import React, { useState, useEffect } from "react";
import axios from "axios";
import "./NFT.styles.css";

const NFTCard: React.FC = () => {
  const [nfts, setNFTs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [loadedCount, setLoadedCount] = useState<number>(5);

  const API_KEY = "5402e464f97c44968342dd3057b4a262";

  const fetchNFTs = async () => {
    try {
      const response = await axios.get("https://api.opensea.io/api/v1/assets", {
        params: {
          order_direction: "asc",
          offset: 0,
          limit: loadedCount,
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

  const loadMore = () => {
    setLoadedCount(loadedCount + 5);
  };

  useEffect(() => {
    fetchNFTs();
  }, [loadedCount]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <div className="nft-card">
        {nfts.map((nft: any, index) => (
          <div className="nft-item" key={nft.id}>
            <img src={nft.image_url} alt={nft.name} />
            <p className="nft-name">{nft.name}</p>
            {(index + 1) % 5 === 0 && <div className="row-divider" />}
          </div>
        ))}
      </div>
      <button className="load-more-button" onClick={loadMore}>
        Load More NFTs
      </button>
    </div>
  );
};

export default NFTCard;
