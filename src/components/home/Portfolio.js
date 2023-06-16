import { Typography, Grid, Box } from "@mui/material";
import React from "react";
import PortfolioCard from "../Common/PortfolioCard";
import { PrimaryHeader, SectionHeader } from "../Common/Header";
import SectionContainer from "../Common/SectionContainer";

const Portfolio = () => {
  const Projects = [
    {
      title: "Spraxa",
      image: "spraxa.png",
    },
    {
      title: "Coolr",
      image: "coolr.png",
    },
    {
      title: "Exception Browser",
      image: "exceptionbrowser.png",
    },
    {
      title: "Kundli",
      image: "kundli.png",
    },
    {
      title: "Orflow",
      image: "orflow.png",
    },
    {
      title: "Realwave",
      image: "realwave.png",
    },
    {
      title: "Tailored Logistics",
      image: "tailoredlogistics.png",
    },
    {
      title: "Volza",
      image: "volza.png",
    },
  ];

  return (
    <SectionContainer>
      <PrimaryHeader
        text={[
          { text: "OU", underline: true, noGap: true },
          { text: "R ", underline: false },
          { text: "PORTFOLIO", underline: false },
        ]}
      />
      <Typography>
        View our collection of portfolio website designs and optimize your
        website with us today, our team is always ready to serve you the best
        website and mobile apps.
      </Typography>
      <Grid
        item
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 7,
        }}
      >
        {Projects.map((project, index) => (
          <PortfolioCard image={project.image} title={project.title} />
        ))}
      </Grid>
    </SectionContainer>
  );
};

export default Portfolio;
