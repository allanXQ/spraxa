import React from "react";
import { Box, Typography } from "@mui/material";
import { VerticalCard } from "../components/Common/Cards/Vertical";
import { SecondaryHeader } from "../styles";
import BodyText from "../components/Common/BodyContent";
import { HorizontalCard } from "../components/Common/Cards/Horizontal";
import BodyContainer from "../components/Common/BodyContainer";

const About = () => {
  const Executives = [
    {
      name: "Yen Dutt Jain",
      position: "CEO",
      image: "yen.png",
      description:
        "Yen Dutt Jain started working with Spraxa Solutions Pvt. Ltd. in its hardware division. He was mainly responsible for handling the support business. After departure of Durlabh Jain from Spraxa Solutions, Yen Dutt Jain took upon him to guide Spraxa Solutions Pvt. Ltd. to achieve greater heights in Software Development arena. Being an Ex-Employee of Fujitsu, he brings decades of experience to the company.",
    },
    {
      name: "Durlabh Jain",
      position: "MENTOR / GURU",
      image: "dj.png",
      description:
        "Former project manager at Fujitsu managing over 200 people. Scaled software specialist with 30 years of experience.",
    },
  ];
  return (
    <BodyContainer>
      <Typography
        sx={{
          color: "secondary.main",
          fontSize: "2rem",
          fontWeight: "bold",
          display: "flex",
          alignSelf: "center",
        }}
      >
        BEST SERVICES AND CONSULTING FOR BUSINESS
      </Typography>
      <Box xs={12} sx={{ display: "flex" }}>
        <HorizontalCard
          width={1250}
          height="auto"
          title="EXECUTIVE LEADERSHIP"
          image="team.jpg"
          imgWidth="100%"
          imgHeight="auto"
          imgPath="about"
          subtitle="We are ready to provide you the best services to do bussiness anywhere in the world."
          description="Spraxa Solutions is a pioneer in delivering Information Technology solutions. As a leading IT solution provider company, we are committed to deliver the best technology solutions to our clients. We have developed expertise in almost all IT related areas over the years, such as – software development, IT consulting, support, training, staff augmentation etc. It is important to identify the business problems of a client, understand them, and then come up with the most effective solution that could save the client’s resources as well. And that is exactly what we do. Information Technology is a boon and we know how to take the best out of it, to ensure the growth of your business."
        />
      </Box>

      <Box xs={12} sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{
                ...SecondaryHeader,
                textDecorationLine: "underline",
                textDecorationThickness: 5,
                textDecorationColor: (theme) => theme.palette.primary.main,
              }}
            >
              EX
            </Typography>
            <Typography sx={SecondaryHeader}>ECUTIVE</Typography>
          </Box>
          <Typography variant="bodytext">
            Meet our professional and experienced team
          </Typography>
        </Box>
        <Box
          sx={(theme) => ({
            display: "flex",
            gap: 5,
            justifyContent: "center",
            alignItems: "center",
            [`@media screen and (max-width: ${theme.breakpoints.values.md}px)`]:
              {
                flexDirection: "column",
              },
          })}
        >
          {Executives.map((executive) => (
            <VerticalCard
              key={executive.name}
              width={500}
              height={700}
              title={executive.name}
              subtitle={executive.position}
              image={executive.image}
              imgWidth={400}
              imgHeight={400}
              imgPath="about"
              description={executive.description}
              avatar={false}
              readMore={false}
            />
          ))}
        </Box>
      </Box>

      <Box item xs={12} sx={{ display: "flex" }}>
        <HorizontalCard
          width={1250}
          height="auto"
          title="OUR PARTNERS"
          image="partners.jpg"
          imgWidth="100"
          imgHeight="auto"
          imgPath="about"
          description="We are a Microsoft certified partner and an IBM partner. Since, clients’ service is our priority, we find it extremely important to associate with other leading IT service companies, so that we can provide the best of the solutions. Spraxa remains a place of technological innovation and quality services, and it will continue to be the same through reliable associations."
          avatar={false}
          readMore={false}
          reverse={false}
        />
      </Box>
    </BodyContainer>
  );
};

export default About;
