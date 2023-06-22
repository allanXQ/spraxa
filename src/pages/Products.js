import { Box, Typography } from "@mui/material";
import React from "react";
import BodyContainer from "../components/Common/BodyContainer";
import SectionContainer from "../components/Common/SectionContainer";
import { HorizontalCard } from "../components/Common/Cards/Horizontal";

const ActionArea = () => {
  return (
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
  );
};
const Products = () => {
  const products = [
    {
      name: "Kundli Mobile",
      image: "kundli.jpg",
      ActionArea,
      description:
        "The Kundli application is made by Durlabh Jain. Kundli app provides you with kundli or Janma Kundali creation, dosha reports and their specific remedies, gemstone suggestions based on birth kundli, various astrological calculations, Answers to the Kundli related questions, daily personalised horoscope, even Match Making and much more completely free. Kundli app is an ultimate app on Vedic Astrology created using accurate and ancient Vedic Astrological techniques and methods.",
    },

    {
      name: "Shikhar App",
      image: "shikhar.PNG",
      description:
        "This online application can help you to enter your petty expenses with attaching the receipts.",
    },
    {
      name: "Exception Browser",
      image: "exception.png",
      description: `Exception Browser is used for error logging and email notification 
      to the group. For different project we can create email group for
      notification. Through this software, Error tracing is easy which
      saves the developer time on debugging for large and small
      Projects.`,
    },
  ];

  return (
    <BodyContainer>
      <SectionContainer>
        {products.map((product, index) => (
          <HorizontalCard
            title={product.name}
            image={product.image}
            description={product.description}
            avatar={false}
            readMore={false}
            imgPath="products"
            reverse={index % 2 === 0 ? false : true}
            ActionArea={product.ActionArea}
          >
            <Typography variant="body1" style={{ fontWeight: "bold" }}>
              {product.name}
            </Typography>
          </HorizontalCard>
        ))}
      </SectionContainer>
    </BodyContainer>
  );
};

export default Products;
