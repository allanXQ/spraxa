import { Box, Typography } from "@mui/material";
import React from "react";
import { VerticalCard } from "../../components/Common/Cards/Vertical";
import { CustomColor, SectionHeader } from "../../styles";
import NormalText from "../../components/Common/BodyContent";

const AppDevelopment = () => {
  const techs = [
    {
      name: "MICROSOFT DEVELOPMENT",
      image: "microsoft.jpg",
      description:
        "Spraxa, a Microsoft Partner, specializes in Data Management and Custom Development Solutions. Their Microsoft Center of Excellence offers services like designing and developing .NET applications, re-engineering legacy systems to .NET, and enabling remote/mobile access to applications, among others.",
      readMore: true,
      link: "microsoft",
    },
    {
      name: "JAVA DEVELOPMENT",
      image: "java.png",
      description:
        "Java Enterprise Edition (Java EE) is an industry standard for scalable applications. Spraxa offers comprehensive Java services, including architecture, development, integration, and maintenance. Their Java Center of Excellence ensures high-quality solutions, reduced costs, and continuous improvement to meet evolving client requirements.",
      readMore: true,
      link: "java",
    },
    {
      name: "PHP/OPENSOURCE DEVELOPMENT",
      image: "codefile.png",
      description:
        "Spraxa seeks innovative ways to enhance client experience, utilizing PHP and open source applications. The stable and secure LAMP stack is preferred over commercial options, delivering superior performance. Spraxa employs LAMP in diverse projects, ensuring scalability, faster response, customization, and cost-effectiveness. Contact us for high-quality open source solutions.",
      readMore: true,
      link: "php",
    },
    {
      name: "HTML5 DEVELOPMENT",
      image: "html5.png",
      description:
        "HTML5 is a powerful tool for web developers, offering a wide range of options to create engaging websites and enhance user experience. Spraxa specializes in HTML5 and CSS3, providing customized solutions for clients, including compatibility with mobile devices. They prioritize understanding clients' business needs and deliver high-quality websites to boost business. Contact us for assistance.",
      readMore: true,
      link: "html5",
    },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
          ml: { xs: 2, sm: 5 },
          mt: 0,
        }}
      >
        <Typography sx={SectionHeader}>OUR SERVICES WILL HELP </Typography>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            sx={{
              ...SectionHeader,
              textDecorationLine: "underline",
              textDecorationThickness: 5,
              textDecorationColor: (theme) => theme.palette.primary.main,
            }}
          >
            AP
          </Typography>
          <Typography sx={SectionHeader}>PLICATION DEVELOPMENT</Typography>
        </Box>
        <NormalText
          text="Mobile app development is the act or process by which a mobile app is developed for mobile devices, 
            such as personal digital assistants, enterprise digital assistants or mobile phones. 
            These applications can be pre-installed on phones during manufacturing."
        />
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {techs.map((tech, index) => (
            <VerticalCard
              width={360}
              height={440}
              title={tech.name}
              image={tech.image}
              imgWidth={100}
              imgHeight={100}
              imgPath="services/service"
              description={tech.description}
              avatar={false}
              readMore={tech.readMore}
              bgColor="#50d8af"
              color="white"
              redirectTo={`/${tech.link}`}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default AppDevelopment;
