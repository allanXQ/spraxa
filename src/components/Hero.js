import React from "react";
import Navbar from "./Navbar";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const style = {
    fontSize: "50px",
    lineHeight: "60px",
    letterSpacing: "1px",
    fontWeight: 900,
  };

  return (
    <Stack>
      <Navbar />
      <Box
        sx={{
          marginTop: 10,
          height: "500px",
          width: "100%",
          backgroundImage: "url(/images/hero/slider-1.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            ml: { xs: 2, sm: 5 },
            mt: 20,
          }}
        >
          <Box>
            <Stack direction="row" gap={2}>
              <Typography
                variant="h3"
                sx={{ ...style, color: "secondary.other" }}
              >
                You
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  ...style,
                  padding: 0,
                  color: "primary.main",
                  textDecorationLine: "underline",
                  textDecorationThickness: 5,
                  textDecorationColor: "primary.main",
                }}
              >
                Think
              </Typography>
            </Stack>
            <Typography
              variant="h3"
              sx={{ ...style, color: "secondary.other" }}
            >
              We Deliver
            </Typography>
          </Box>
          <Typography variant="bodytext" sx={{ maxWidth: 500 }}>
            Spraxa is the leading Information Technology services provider. Our
            expertise in the area of technology and our innovative methodologies
            enable us to create a huge impact on our clients’ business – which
            is what drives us
          </Typography>
          <Link to="/about" sx={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                width: 150,
                height: 50,
                backgroundColor: "primary.main",
                color: "white",
                fontWeight: "bold",
                mt: 2,
                ml: 4,
              }}
            >
              Learn More
            </Button>
          </Link>
        </Box>
      </Box>
    </Stack>
  );
};

export default Header;
