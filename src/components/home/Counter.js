import { Card, CardContent, Grid, Typography } from "@mui/material";
import React from "react";

const Counter = () => {
  const Stats = [
    {
      title: "Happy Clients",
      count: 500,
    },
    {
      title: "Skilled Professionals",
      count: 51,
    },
    {
      title: "Technologies",
      count: 20,
    },
    {
      title: "Years of Experience",
      count: 25,
    },
  ];
  return (
    <Grid
      container
      sx={{
        backgroundImage: "url(/images/statsbg3.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: { xs: "column", sm: "row" },
          gap: 5,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
          margin: "20px 0 20px 0",
        }}
      >
        {Stats.map((stat, index) => (
          <Card
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: "10px 2px 2px 2px",
              borderStyle: "solid",
              borderColor: "primary.main",
              borderRadius: "10px",
              backgroundColor: "transparent",
              width: "250px",
              height: "200px",
            }}
          >
            <CardContent
              style={{
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
              }}
            >
              <Typography variant="h3" style={{ fontWeight: "bold" }}>
                {stat.count}+
              </Typography>
              <Typography variant="h6" style={{ fontWeight: "bold" }}>
                {stat.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
};

export default Counter;
