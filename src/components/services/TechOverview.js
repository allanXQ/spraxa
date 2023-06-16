import React from "react";

import { HorizontalCard } from "../../components/Common/Cards/Horizontal";
import { Box, Typography } from "@mui/material";

const TechOverview = () => {
  return (
    <Box
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Typography
        sx={{
          color: "secondary.main",
          fontSize: "3rem",
          fontWeight: "bold",
          display: "flex",
          alignSelf: "center",
        }}
      >
        THE BEST TECHNOLOGIES
      </Typography>
      <Box>
        <HorizontalCard
          width={1250}
          height="auto"
          title="TECHNOLOGIES"
          image="platformsolns.jpg"
          imgWidth="100%"
          imgHeight="auto"
          imgPath="services/service"
          description={{
            1: "Spraxa Solutions – with its reliable expertise in the Information Technology solutions, deploys cutting edge technology, in order to provide the most effective solutions to the clients. The key to any business solution is to understand the strategy, then plan accordingly and implement it with the latest tools and technologies. We at Spraxa understand this really well and serve our clients with best of the technological solutions.",
            2: "Information Technology is the heart of today’s technology based business solutions. It has made it possible to implement the latest business trends while ensuring the simplicity in the operations, so that the end customers – professionals and business people can leverage it to simplify their day to day work. Spraxa is a pioneer in providing the Information Technology solutions and has consistently delivered the quality services to all the clients. Technology is our core strength and we keep striving for innovation to provide the best solution, each time.",
            3: "Spraxa software solutions are built on a Core Foundation of Services, Technologies and Components. Our Core Technologies encompass the primary operating systems and platforms, application servers, databases, and development tools we use to build software solutions. These include commercial third-party products, as well as Spraxa’s proprietary technologies and software assets. Spraxa has proven technical expertise in Mobile Application Development, Web And Desktop Application Development and Big Data.",
            4: "Provides significant expertise in Application Development utilizing the open Stack, Java Application Development Stack and Opensource / PHP platform. standards platforms, including the Microsoft Application Development.",
          }}
          hideKey={true}
        />
      </Box>
    </Box>
  );
};

export default TechOverview;
