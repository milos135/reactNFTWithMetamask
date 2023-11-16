import React from "react";
import { Link } from "react-router-dom";
import { NFTGrid } from "./styledCard/NFTGrid.styled";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface NFT {
  id: string;
  name: string;
  description: string;
  image_url: string;
}

interface NFTCardProps {
  nft: NFT;
}

const CardStyled = {
  width: 250,
  height: 320,
  margin: "16px",
  backgroundImage: "radial-gradient(circle farthest-side, #fceabb, #f8b500)",
  borderRadius: "15px",
  boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
};

const NFTCard: React.FC<NFTCardProps> = ({ nft }) => {
  return (
    <NFTGrid>
      <Card style={CardStyled}>
        <CardMedia
          component="img"
          height="200"
          image={nft.image_url}
          alt={nft.name}
        />
        <CardContent>
          <Typography variant="h6">{nft.name}</Typography>
          <Typography variant="body2" color="textSecondary"></Typography>

          <Link to={`/nft/${nft.id}`} state={{ nft }}>
            <Typography variant="body2" color="primary">
              View Details
            </Typography>
          </Link>
        </CardContent>
      </Card>
    </NFTGrid>
  );
};

export default NFTCard;
