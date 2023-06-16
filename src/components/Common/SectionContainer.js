import { Box } from "@mui/material";
import React from "react";

const SectionContainer = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      {children}
    </Box>
  );
};

export default SectionContainer;
