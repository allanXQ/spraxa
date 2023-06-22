import React from "react";
import { Box, Typography } from "@mui/material";
import { HorizontalCard } from "../../components/Common/Cards/Horizontal";
import BodyContainer from "../../components/Common/BodyContainer";
import SectionContainer from "../../components/Common/SectionContainer";
import { SecondaryHeader } from "../../components/Common/Header";

const AppManagement = () => {
  return (
    <BodyContainer>
      <SectionContainer noGap={true}>
        <SecondaryHeader title="BEST SERVICES AND CONSULTING FOR BUSINESS" />"
        <HorizontalCard
          width={1250}
          height="auto"
          title="APPLICATION MANAGEMENT & SUPPORT"
          image="culture.jpg"
          imgWidth="100%"
          imgHeight="auto"
          imgPath="services/service"
          description="Spraxa offers comprehensive application lifecycle management services that include maintenance of, adding new functionality to and providing support for existing applications. We have fixed bid, time and materials, and hybrid pricing options as well as the choice of an engagement model that includes the full range of managed services."
        />
      </SectionContainer>
    </BodyContainer>
  );
};

export default AppManagement;
