import { Box, Typography } from "@mui/material";
import React from "react";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <Typography variant="h4" style={{ fontWeight: "bold" }}>
      {title}
    </Typography>
  );
};

const PrimaryHeader = ({ text, maxWidth }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        maxWidth,
      }}
    >
      {text.map((word, index) => (
        <Typography
          key={index}
          variant="sectionheading"
          sx={{
            color: "#0c2e8a",
            letterSpacing: "1px",
            fontWeight: 700,
            textDecoration: word.underline ? "underline" : "none",
            textDecorationColor: (theme) =>
              word.underline ? theme.palette.primary.main : "inherit",
            textDecorationThickness: word.underline ? 5 : "auto",
            marginRight: word.noGap ? 0 : 1.2,
          }}
        >
          {word.text}
        </Typography>
      ))}
    </Box>
  );
};

export { SectionHeader, PrimaryHeader };
