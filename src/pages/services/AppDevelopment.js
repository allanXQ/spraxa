import { Box } from "@mui/material";
import React from "react";
import { VerticalCard } from "../../components/Common/Cards/Vertical";
import { PrimaryHeader } from "../../components/Common/Header";
import BodyContainer from "../../components/Common/BodyContainer";
import SectionContainer from "../../components/Common/SectionContainer";

const AppDevelopment = () => {
  const techs = [
    {
      name: "MICROSOFT DEVELOPMENT",
      image: "microsoft.jpg",
      description:
        "Spraxa, a Microsoft Partner, specializes in Data Management and Custom Development Solutions. Their Microsoft Center of Excellence offers services like designing and developing .NET applications, re-engineering legacy systems to .NET, and enabling remote/mobile access to applications, among others.",
      readMore: false,
      link: "microsoft",
    },
    {
      name: "JAVA DEVELOPMENT",
      image: "java.png",
      description:
        "Java Enterprise Edition (Java EE) is an industry standard for scalable applications. Spraxa offers comprehensive Java services, including architecture, development, integration, and maintenance. Their Java Center of Excellence ensures high-quality solutions, reduced costs, and continuous improvement to meet evolving client requirements.",
      readMore: false,
      link: "java",
    },
    {
      name: "PHP/OPENSOURCE DEVELOPMENT",
      image: "codefile.png",
      description:
        "Spraxa seeks innovative ways to enhance client experience, utilizing PHP and open source applications. The stable and secure LAMP stack is preferred over commercial options, delivering superior performance. Spraxa employs LAMP in diverse projects, ensuring scalability, faster response, customization, and cost-effectiveness. Contact us for high-quality open source solutions.",
      readMore: false,
      link: "php",
    },
    {
      name: "HTML5 DEVELOPMENT",
      image: "html5.png",
      description:
        "HTML5 is a powerful tool for web developers, offering a wide range of options to create engaging websites and enhance user experience. Spraxa specializes in HTML5 and CSS3, providing customized solutions for clients, including compatibility with mobile devices. They prioritize understanding clients' business needs and deliver high-quality websites to boost business. Contact us for assistance.",
      readMore: false,
      link: "html5",
    },
  ];
  return (
    <BodyContainer>
      <SectionContainer>
        <PrimaryHeader
          title={[
            { text: "AP", underline: true, noGap: true },
            { text: "PLICATION ", underline: false },
            { text: "DEVELOPMENT", underline: false },
          ]}
          margin={true}
          subtitle="
            Mobile app development is the act or process by which a mobile app is
          developed for mobile devices, such as personal digital assistants,
          enterprise digital assistants or mobile phones. These applications can
          be pre-installed on phones during manufacturing."
        />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          {techs.map((tech, index) => (
            <VerticalCard
              width={550}
              height={450}
              title={tech.name}
              image={tech.image}
              imgWidth={100}
              imgHeight={100}
              imgPath="services/service"
              description={tech.description}
              avatar={false}
              readMore={tech.readMore}
              redirectTo={`${tech.link}`}
            />
          ))}
        </Box>
      </SectionContainer>
    </BodyContainer>
  );
};

export default AppDevelopment;
