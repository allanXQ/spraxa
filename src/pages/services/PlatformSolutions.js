import React from "react";
import { Box, Typography } from "@mui/material";
import { HorizontalCard } from "../../components/Common/Cards/Horizontal";
import SectionContainer from "../../components/Common/SectionContainer";
import { SecondaryHeader } from "../../components/Common/Header";
import BodyContainer from "../../components/Common/BodyContainer";

const PlatformSolutions = () => {
  return (
    <BodyContainer>
      <SectionContainer noGap={true}>
        <SecondaryHeader title="BEST SERVICES AND CONSULTING FOR BUSINESS" />"
        <HorizontalCard
          width={1250}
          height="auto"
          title="PLATFORM SOLUTIONS"
          image="platformsolns.jpg"
          imgWidth="100%"
          imgHeight="auto"
          imgPath="services/service"
          description={[
            "WordPress base design, development and customization",
            "Joomla based design, development, customization and integration",
            "Microsoft Sharepoint 2003/ 2007/ 2010 Deployment, Customization and Maintenance",
            "Microsoft SQL Server 2000/ 2005/ 2008/ 2008 R2 – Analysis, Database Design, Optimization and Review",
            "Microsoft SQL Server Reporting Services – Analaysis, Report Design, Scheduling and Integration",
            "Microsoft SQL Server Analysis Services – Analysis, Cube Creation, Maintenance, Optimization and Review.",
          ]}
        />
      </SectionContainer>
    </BodyContainer>
  );
};

export default PlatformSolutions;
