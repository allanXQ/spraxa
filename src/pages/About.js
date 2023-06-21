import React from "react";
import { Box, Typography } from "@mui/material";
import { VerticalCard } from "../components/Common/Cards/Vertical";
import { HorizontalCard } from "../components/Common/Cards/Horizontal";
import BodyContainer from "../components/Common/BodyContainer";
import { PrimaryHeader } from "../components/Common/Header";
import SectionContainer from "../components/Common/SectionContainer";

const Title = ({ name, title }) => {
  return (
    <Box>
      <Typography>{name}</Typography>
      <Typography>{title}</Typography>
    </Box>
  );
};

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
      <SectionContainer>
        <HorizontalCard
          image="team.jpg"
          imgPath="about"
          description="Spraxa Solutions is a pioneer in delivering Information Technology solutions. As a leading IT solution provider company, we are committed to deliver the best technology solutions to our clients. We have developed expertise in almost all IT related areas over the years, such as – software development, IT consulting, support, training, staff augmentation etc. It is important to identify the business problems of a client, understand them, and then come up with the most effective solution that could save the client’s resources as well. And that is exactly what we do. Information Technology is a boon and we know how to take the best out of it, to ensure the growth of your business."
        >
          <PrimaryHeader
            title={[
              { text: "EX", underline: true, noGap: true },
              { text: "ECUTIVE", underline: false },
              { text: "LEADERSHIP", underline: false },
            ]}
            subtitle="We are ready to provide you the best services to do bussiness anywhere in the world."
          />
        </HorizontalCard>
      </SectionContainer>
      <SectionContainer>
        <Box>
          <PrimaryHeader
            title={[
              { text: "EXECUT", underline: false, noGap: true },
              { text: "IV", underline: true, noGap: true },
              { text: "E", underline: false },
              { text: "LEADERSHIP", underline: false },
            ]}
            subtitle="Meet our professional and experienced team"
          />
          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
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
              <HorizontalCard
                key={executive.name}
                width={500}
                height={700}
                image={executive.image}
                imgPath="about"
                description={executive.description}
                readMore={false}
              >
                <Title name={executive.name} title={executive.position} />
              </HorizontalCard>
            ))}
          </Box>
        </Box>
      </SectionContainer>
      <SectionContainer>
        <HorizontalCard
          title="OUR PARTNERS"
          image="partners.jpg"
          imgPath="about"
          description="We are a Microsoft certified partner and an IBM partner. Since, clients’ service is our priority, we find it extremely important to associate with other leading IT service companies, so that we can provide the best of the solutions. Spraxa remains a place of technological innovation and quality services, and it will continue to be the same through reliable associations."
          avatar={false}
          readMore={false}
          reverse={true}
        >
          <PrimaryHeader
            title={[
              { text: "OU", underline: true, noGap: true },
              { text: "R", underline: false },
              { text: "PARTNERS", underline: false },
            ]}
          />
        </HorizontalCard>
      </SectionContainer>
    </BodyContainer>
  );
};

export default About;
