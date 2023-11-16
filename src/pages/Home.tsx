import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pagination, Paper } from "@mui/material";
import NFTCard from "../components/card/NFTCard";
import { StyledCardContainer } from "./styledPages/StyledCardContainer.styled";
import { NFTGrid } from "../components/card/styledCard/NFTGrid.styled";

const NFTsPerPage = 5;

interface NFT {
  id: string;
  name: string;
  description: string;
  image_url: string;
  background_color?: string;
  asset_contract: { chain_identifier: string };
}

const Home: React.FC = () => {
  const [nfts, setNFTs] = useState<NFT[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const fetchNFTs = async (pageNumber: number) => {
    try {
      const response = await axios.get("https://api.opensea.io/api/v1/assets", {
        params: {
          order_direction: "asc",
          offset: (pageNumber - 1) * NFTsPerPage,
          limit: NFTsPerPage + 5,
        },
        headers: {
          "X-API-KEY": `${process.env.REACT_APP_API_KEY}`,
        },
      });

      const allData: NFT[] = response.data.assets.map((asset: any) => ({
        id: asset.id,
        name: asset.name || "No Name",
        description: asset.description || "No Description",
        image_url: asset.image_url || "No Image URL",
        background_color: asset.background_color || undefined,
        asset_contract: asset.asset_contract || undefined,
      }));

      const filteredData: NFT[] = allData
        .filter((nft: NFT) => nft.name !== "Ledger Legend Card")
        .slice(0, NFTsPerPage);

      setNFTs(filteredData);
      setLoading(false);
    } catch (err: any) {
      setError(err.message || "An error occurred");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNFTs(page);
  }, [page]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <StyledCardContainer>
      <NFTGrid>
        {nfts.map((nft: NFT) => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </NFTGrid>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <Paper
        style={{
          display: "flex",
          justifyContent: "center",
          background: "white",
          color: "white",
          borderRadius: 0,
          backgroundColor: "rgb(0, 212, 255) 100.2%",
          padding: "10px",
          marginTop: "20px",
        }}
      >
        <Pagination
          count={8}
          page={page}
          color="secondary"
          onChange={handlePageChange}
        />
      </Paper>
    </StyledCardContainer>
  );
};

export default Home;
