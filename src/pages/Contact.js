import { Box, Typography } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import facebook from "../images/social/facebook.png";
import twitter from "../images/social/twitter.png";
import linkedIn from "../images/social/linkedin.png";
import Map from "../components/contact/map";
import { PrimaryHeader } from "../components/Common/Header";
import BodyContainer from "../components/Common/BodyContainer";
import { HorizontalCard } from "../components/Common/Cards/Horizontal";
import SectionContainer from "../components/Common/SectionContainer";

const Contact = () => {
  const socialIcons = [
    {
      name: "facebook",
      icon: facebook,
      link: "https://www.facebook.com/spraxasolutions",
    },
    {
      name: "twitter",
      icon: twitter,
      link: "https://twitter.com/SpraxaSolutions",
    },
    {
      name: "linkedIn",
      icon: linkedIn,
      link: "https://www.linkedin.com/company/spraxa-solutions-pvt-ltd",
    },
  ];

  const CustomContacts = {
    display: "flex",
    alignItems: "center",
    gap: 2,
  };

  return (
    <BodyContainer>
      <SectionContainer>
        <PrimaryHeader
          title={[
            { text: "CONTA", underline: true, noGap: true },
            { text: "CT", underline: false },
            { text: "US", underline: false },
          ]}
          margin={true}
          subtitle="We are here to help and answer any question you might have. We look forward to hearing from you."
        />
        <HorizontalCard image="contactus.jpg" centerAligned={true}>
          <Box
            container
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box sx={CustomContacts}>
              <PhoneIcon />
              <Typography variant="bodytext">
                0120-4167004, +91-9354701277 (India), +1-571-346-7306 (US)
              </Typography>
            </Box>
            <Box sx={CustomContacts}>
              <MailIcon />
              <a href="mailto: mail@spraxa.com">
                <Typography variant="bodytext" text="">
                  mail@spraxa.com
                </Typography>
              </a>
            </Box>
            <Box
              container
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
            >
              <Typography variant="bodytext">Follow Us:</Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {socialIcons.map((icon) => (
                  <a
                    key={icon.name}
                    href={icon.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={icon.icon}
                      alt={icon.name + " logo"}
                      width="30px"
                    ></img>
                  </a>
                ))}
              </Box>
            </Box>
          </Box>
        </HorizontalCard>
      </SectionContainer>

      <Map />
    </BodyContainer>
  );
};

export default Contact;
