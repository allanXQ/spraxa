import { Box, Button, Typography, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ActionContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // width: "fit-content",
  color: "white",
  position: "absolute",
  backgroundColor: "rgba(0,0,0,0.5)",
  height: "100%",
  width: "100%",
  opacity: 0,
  transition: ".5s ease",
  "&:hover": {
    opacity: 1,
  },
}));

const PortfolioCard = (props) => {
  const { image, title, imagePath } = props;
  console.log(imagePath);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        width: "fit-content",
        position: "relative",
      }}
    >
      <img
        src={
          imagePath
            ? `/images/${imagePath}/${image}`
            : `/images/portfolio/${image}`
        }
        alt={title}
        width={330}
        style={{}}
      />
      <ActionContainer>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          {title?.toUpperCase()}
        </Typography>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          DO YOU WANT AN APP LIKE THIS?
        </Typography>
        <Link to="/contact">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "transparent",
              border: "2px solid white",
              color: "white",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            CLICK HERE
          </Button>
        </Link>
      </ActionContainer>
    </Box>
  );
};

export default PortfolioCard;
