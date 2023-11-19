import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pagination, Paper } from "@mui/material";
import NFTCard from "../components/card/NFTCard";
import { StyledCardContainer } from "./styledPages/StyledCardContainer.styled";
import { NFTGrid } from "../components/card/styledCard/NFTGrid.styled";

const NFTsPerPage = 5;
const TotalNFTs = 40;
const TotalPages = Math.ceil(TotalNFTs / NFTsPerPage);

interface NFT {
  id: string;
  name: string;
  description: string;
  image_url: string;
}

const Home: React.FC = () => {
  const [nfts, setNFTs] = useState<NFT[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const fetchNFTs = async (pageNumber: number) => {
    try {
      const response = await axios.get(
        "https://api.opensea.io/api/v2/collections",
        {
          params: {
            order_direction: "asc",
            offset: 0,
            limit: TotalNFTs,
          },
          headers: {
            "X-API-KEY": `${process.env.REACT_APP_API_KEY}`,
          },
        }
      );

      const allData: NFT[] = response.data.collections.map((asset: any) => ({
        id: Math.random(),
        name: asset.collection,
        description: asset.description || "No Description",
        image_url: asset.image_url || "/6.webp",
      }));

      const startIndex = (pageNumber - 1) * NFTsPerPage;
      const endIndex = startIndex + NFTsPerPage;
      const slicedData: NFT[] = allData.slice(startIndex, endIndex);

      setNFTs(slicedData);
      setLoading(false);
    } catch (err: any) {
      setError(err.message || "An error occurred");
      setLoading(false);
    }
  };

  console.log(nfts);

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
          marginTop: "50px",
        }}
      >
        <Pagination
          count={TotalPages}
          page={page}
          color="secondary"
          onChange={handlePageChange}
        />
      </Paper>
    </StyledCardContainer>
  );
};

export default Home;
