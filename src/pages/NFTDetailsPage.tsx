import React from "react";
import { useLocation } from "react-router-dom";
import { Box, Card, CardMedia, CardContent, Typography } from "@mui/material";

const NFTDetailsPage: React.FC = () => {
  const location = useLocation();
  const { nft } = location.state || { nft: null };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Card
        style={{
          width: 400,
          backgroundColor: "yellow",
          padding: 16,
          borderRadius: 8,
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={nft ? nft.image_url : ""}
          alt={nft ? nft.name : ""}
        />
        <CardContent>
          <Typography variant="h6" sx={{ fontFamily: "cursive" }}>
            {nft ? nft.name : ""}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ fontFamily: "fantasy" }}
          >
            {nft ? nft.description : ""}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NFTDetailsPage;
