import { Box, Typography } from "@mui/material";
import React from "react";
import { HorizontalCard } from "../../components/Common/Cards/Horizontal";
import SectionContainer from "../../components/Common/SectionContainer";
import { SecondaryHeader } from "../../components/Common/Header";
import BodyContainer from "../../components/Common/BodyContainer";

const MobileApps = () => {
  return (
    <BodyContainer>
      <SectionContainer noGap={true}>
        <SecondaryHeader title="BEST SERVICES AND CONSULTING FOR BUSINESS" />"
        <HorizontalCard
          width={1250}
          height="auto"
          title="MOBILE APPS"
          image="mobilebg.jpg"
          imgWidth="100%"
          imgHeight="auto"
          imgPath="services/service"
          description="The popularity of mobile applications has risen tremendously. With the proliferation of high speed networks, smart phones and coupled with the fact that information needs to be available on the go, it has become very essential for software companies to have a mobile version of the application to complete their product offering in addition users always seek to make their lives simpler by accessing applications for information, utility, entertainment, etc."
        />
      </SectionContainer>
    </BodyContainer>
  );
};

export default MobileApps;
