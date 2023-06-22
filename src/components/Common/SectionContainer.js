import { Box } from "@mui/material";
import React from "react";

const SectionContainer = ({ margin, noGap, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: noGap ? 0 : 5,
        mx: margin && { xs: 2, sm: 5 },
      }}
    >
      {children}
    </Box>
  );
};

export default SectionContainer;
