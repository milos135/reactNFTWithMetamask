import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pagination, Paper, Toolbar, Typography, AppBar } from "@mui/material";
import NFTCard from "../components/card/NFTCard";

const NFTsPerPage = 5;

const Home = () => {
  const [nfts, setNFTs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const API_KEY = "5402e464f97c44968342dd3057b4a262";

  const fetchNFTs = async () => {
    try {
      const response = await axios.get("https://api.opensea.io/api/v1/assets", {
        params: {
          order_direction: "asc",
          offset: (page - 1) * NFTsPerPage,
          limit: NFTsPerPage,
        },
        headers: {
          "X-API-KEY": API_KEY,
        },
      });
      setNFTs(response.data.assets);
      setLoading(false);
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNFTs();
  }, [page]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">NFTs</Typography>
        </Toolbar>
      </AppBar>

      <div className="nft-card">
        {nfts.map((nft: any, index) => (
          <NFTCard key={nft.id} nft={nft} />
        ))}
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <Paper>
        <Pagination count={8} page={page} onChange={handlePageChange} />
      </Paper>
    </div>
  );
};

export default Home;
