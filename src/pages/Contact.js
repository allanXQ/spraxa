import { Box } from "@mui/material";
import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import facebook from "../images/social/facebook.png";
import twitter from "../images/social/twitter.png";
import linkedIn from "../images/social/linkedin.png";
import { SectionGap } from "../styles";
import NormalText from "../components/Common/BodyContent";
import Map from "../components/contact/map";
import { PrimaryHeader } from "../components/Common/Header";
import BodyContainer from "../components/Common/BodyContainer";

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
      <PrimaryHeader
        text={[
          { text: "CONTA", underline: true, noGap: true },
          { text: "CT", underline: false },
          { text: "US", underline: false },
        ]}
      />

      <NormalText text="We are here to help and answer any question you might have. We look forward to hearing from you." />
      <Box sx={{ display: "flex", flexDirection: "column", gap: SectionGap }}>
        <Box
          xs={12}
          sx={{
            display: "flex",
            gap: 5,
            alignItems: "center",
          }}
        >
          <img src="/images/contactus1.jpg" width={700} alt="contact us" />
          <Box
            container
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Box sx={CustomContacts}>
              <PhoneIcon />
              <NormalText text="0120-4167004, +91-9354701277 (India), +1-571-346-7306 (US)" />
            </Box>
            <Box sx={CustomContacts}>
              <MailIcon />
              <a href="mailto: mail@spraxa.com">
                <NormalText text="mail@spraxa.com" />
              </a>
            </Box>
            <Box
              container
              sx={{ display: "flex", alignItems: "center", gap: 2 }}
            >
              <NormalText text="Follow Us: " />
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
        </Box>
      </Box>
      <Map />
    </BodyContainer>
  );
};

export default Contact;
