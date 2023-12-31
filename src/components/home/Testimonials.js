import { Box, Typography, styled } from "@mui/material";
import React from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import ClientCard from "../Testimonial/ClientCard";
import { Link } from "react-router-dom";

const MainCard = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.primary.darkgreen,
  justifyContent: "space-evenly",
  alignItems: "center",
  height: "fit-content",
  padding: "50px 0",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: 20,
  },
}));

const Testimonials = () => {
  return (
    <MainCard sx={(theme) => ({})}>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          gap: 1,
          maxWidth: 500,
          flexWrap: "wrap",
        })}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "30px",
          }}
        >
          CLIENTS
        </Typography>
        <Box>
          <Typography
            sx={{
              fontWeight: 300,
              fontSize: "30px",
              lineHeight: "45px",
            }}
          >
            Happy with
          </Typography>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "40px",
              lineHeight: "60px",
              fontStyle: "medium",
            }}
          >
            Customers & Clients
          </Typography>
        </Box>
        <Typography>
          If you need any IT solution we are available for you. As an IT
          solution provider company, we are committed to deliver the best
          technology solutions to our clients.
        </Typography>
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "24px",
          }}
          component={Link}
          to={"/contact"}
        >
          Contact Us
        </Typography>
      </Box>
      <ClientCard />
    </MainCard>
  );
};

export default Testimonials;
