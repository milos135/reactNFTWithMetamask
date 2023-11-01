import React from "react";
import "./NFT.styles.css";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface NFT {
  id: number;
  name: string;
  description: string;
  image_url: string;
}

interface NFTCardProps {
  nft: NFT;
}

const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  return (
    <Card style={{ width: 200, margin: "16px" }}>
      <CardMedia
        component="img"
        height="200"
        image={nft.image_url}
        alt={nft.name}
      />
      <CardContent>
        <Typography variant="h6">{nft.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {nft.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NFTCard;
