import { Box, Typography } from "@mui/material";
import React from "react";
import BodyContainer from "../components/Common/BodyContainer";

const Products = () => {
  return (
    <BodyContainer>
      <Box>
        <Box style={{ display: "flex", flexDirection: "row", gap: 20 }}>
          <Box style={{}}>
            <img src="/images/products/kundli.jpg" width={500}></img>
          </Box>
          <Box
            style={{
              width: "57%",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              Kundli Mobile
            </Typography>
            <Typography variant="bodytext">
              The Kundli application is made by Durlabh Jain. Kundli app
              provides you with kundli or Janma Kundali creation, dosha reports
              and their specific remedies, gemstone suggestions based on birth
              kundli, various astrological calculations, Answers to the Kundli
              related questions, daily personalised horoscope, even Match Making
              and much more completely free. Kundli app is an ultimate app on
              Vedic Astrology created using accurate and ancient Vedic
              Astrological techniques and methods.
            </Typography>
            <Box style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <a href="https://play.google.com/store/apps/details?id=com.durlabh.kundli&hl=en_IN">
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  Download for Android
                </Typography>
              </a>
              <a href="https://apps.apple.com/in/app/kundli-by-durlabh-jain/id1043514973">
                <Typography variant="body1" style={{ fontWeight: "bold" }}>
                  Download for IOS
                </Typography>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box style={{ display: "flex", gap: 20 }}>
          <Box
            style={{
              width: "57%",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              Shikhar App
            </Typography>
            <Typography variant="bodytext">
              This online application can help you to enter your petty expenses
              with attaching the receipts.
            </Typography>
          </Box>
          <Box style={{}}>
            <img src="/images/products/shikhar.PNG" width={500}></img>
          </Box>
        </Box>
      </Box>

      <Box>
        <Box style={{ display: "flex", gap: 20 }}>
          <Box style={{}}>
            <img src="/images/products/exception.png" width={500}></img>
          </Box>
          <Box
            style={{
              width: "57%",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <Typography variant="h5" style={{ fontWeight: "bold" }}>
              Exception Browser
            </Typography>
            <Typography variant="bodytext">
              Exception Browser is used for error logging and email notification
              to the group. For different project we can create email group for
              notification. Through this software, Error tracing is easy which
              saves the developer time on debugging for large and small
              Projects.
            </Typography>
          </Box>
        </Box>
      </Box>
    </BodyContainer>
  );
};

export default Products;
