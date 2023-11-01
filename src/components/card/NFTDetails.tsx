import React from "react";

interface NFTDetailsProps {
  nft: any;
}

const NFTDetails: React.FC<NFTDetailsProps> = ({ nft }) => {
  if (!nft) {
    return <p>Pick NFT.</p>;
  }

  return (
    <div>
      <h3>Details of NFT:</h3>

      <p>Name: {nft.name}</p>
      <p>Description: {nft.description}</p>
    </div>
  );
};

export default NFTDetails;
