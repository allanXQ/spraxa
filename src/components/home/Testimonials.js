import {
  Avatar,
  Box,
  Card,
  Grid,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { SectionHeader } from "../Common/Header";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const Testimonials = () => {
  const testimonials = [
    {
      image: "1.jpg",
      name: "Rakeesh Saraff",
      title: "(Director) Infodrive India Pvt Ltd",
      description:
        "Having a 20 year long association with Spraxa has been a great experience. They have always gone an extra mile to meet our needs, especially in resolving crisis, and never failed to deliver on time.",
    },
    {
      image: "1.jpg",
      name: "Brian Ellis",
      title: "Tailored Logistics",
      description:
        "Spraxa team consists of some of the brightest people in the industry, I have worked with a number of knowledgeable and expirenced people.",
    },
    {
      image: "1.jpg",
      name: "Katie Chang",
      title: "Benten Solutions",
      description:
        "Spraxa team consists of some of the brightest people in the industry, I have worked with a number of knowledgeable and expirenced people.",
    },
  ];
  // <SectionHeader title='Testimonials'/>

  return (
    <Grid
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // gap: 40,
        position: "relative",
      }}
    >
      <Grid
        item
        sx={{
          backgroundColor: "primary.main",
          width: "51rem",
          height: "35.5rem",
          position: "relative",
        }}
      >
        <Typography>CLIENTS</Typography>
        <Typography>Happpy with</Typography>
        <Typography>Customers & Clients</Typography>
        <Typography>
          If you need any IT solution we are available for you. As an IT
          solution provider company, we are committed to deliver the best
          technology solutions to our clients.
        </Typography>
        <Typography>Contact Us</Typography>
      </Grid>
      <Grid
        item
        sx={{
          backgroundColor: "primary.darkblue",
          width: "51rem",
          height: "35.5rem",
          position: "absolute",
          top: "5rem",
          left: "41rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
            width: "32rem",
            height: "20rem",
            top: "4.5rem",
          }}
        >
          <Box sx={{ position: "relative", top: 0, left: 38 }}>
            <img
              src="/images/contactus1.jpg"
              width={200}
              height={150}
              alt="contact us"
            />
            <Box
              sx={{
                backgroundColor: "white",
                width: 500,
                height: 350,
                position: "absolute",
                top: "5rem",
                left: "8rem",
              }}
            >
              <Box>
                <IconButton>
                  <ArrowBackIos />
                </IconButton>
                <IconButton>
                  <ArrowForwardIos />
                </IconButton>
              </Box>
              {testimonials.map((testimonial) => {
                return (
                  <Box>
                    <Typography>{testimonial.name}</Typography>
                    <Typography>{testimonial.title}</Typography>
                    <Typography>{testimonial.description}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Testimonials;
