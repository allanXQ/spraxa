import { Box, Typography, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { SecondaryHeader } from "../../components/Common/Header";
import BodyContainer from "../../components/Common/BodyContainer";
import SectionContainer from "../../components/Common/SectionContainer";
import { VerticalCard } from "../../components/Common/Cards/Vertical";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "20px",
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

const CardsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: 30,
  [theme.breakpoints.up("lg")]: {
    display: "none",
  },
}));

const Technology = () => {
  const imagePath = "images/technologies/";
  const Technologies = [
    {
      name: "Technology Overview",
      image: "technologies-overview.png",
      link: "technology",
      description:
        "Spraxa Solutions specializes in deploying cutting-edge IT solutions for effective client strategies. With a focus on innovation, Spraxa leverages key technologies to deliver quality software solutions for mobile, web, desktop, and big data applications. They also utilize open Stack, Java, Opensource/PHP, and Microsoft Application Development platforms.",
      readMore: true,
    },
    {
      name: "Mobile Application Development",
      image: "web_development.png",
      link: "mobileappdev",
      description:
        "Spraxa Solutions – with its reliable expertise in the Information Technology solutions, deploys cutting edge technology, in order to provide the most effective solutions to the clients. The key to any business solution is to understand the strategy.",
      readMore: true,
    },
    {
      name: "Application Development",
      image: "app_development.png",
      link: "appdevelopment",
      description:
        "Spraxa Solutions – with its reliable expertise in the Information Technology solutions, deploys cutting edge technology, in order to provide the most effective solutions to the clients. The key to any business solution is to understand the strategy.",
      readMore: true,
    },
    {
      name: "Big Data",
      image: "big_data.png",
      link: "bigdata",
      description:
        "Spraxa Solutions – with its reliable expertise in the Information Technology solutions, deploys cutting edge technology, in order to provide the most effective solutions to the clients. The key to any business solution is to understand the strategy.",
      readMore: true,
    },
  ];
  return (
    <BodyContainer>
      <SectionContainer>
        <SecondaryHeader title="TECHNOLOGIES" />
        <Container>
          {Technologies.map((tech, index) => (
            <Box class="flip-card">
              <Box class="flip-card-inner">
                <Box class="flip-card-front">
                  <img
                    src={`${imagePath}/${tech.image}`}
                    alt="Avatar"
                    style={{ width: "500px" }}
                  />
                </Box>
                <Box class="flip-card-back">
                  <Typography variant="h5">{tech.name}</Typography>
                  <Typography>{tech.description}</Typography>
                  <Typography style={{ color: "white" }}>
                    <Link to={`/${tech.link}`} style={{ color: "white" }}>
                      Read More...
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Container>
        <CardsContainer>
          {Technologies.map((tech, index) => (
            <VerticalCard
              key={index}
              width={550}
              height={450}
              image={tech.image}
              imgPath="technologies"
              imgWidth={200}
              imgHeight={150}
              avatar={false}
              title={tech.name}
              // subtitle={service.title}
              description={tech.description}
              readMore={false}
              color="#353535"
            />
          ))}
        </CardsContainer>
      </SectionContainer>
    </BodyContainer>
  );
};

export default Technology;
