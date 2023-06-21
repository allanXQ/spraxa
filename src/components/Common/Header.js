import { Box, Typography } from "@mui/material";
import React from "react";

const SecondaryHeader = ({ title, subtitle }) => {
  return (
    <Typography variant="h4" style={{ fontWeight: "bold" }}>
      {title}
    </Typography>
  );
};

const PrimaryHeader = ({ title, maxWidth, margin, subtitle }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: 1,
        ml: margin && { xs: 2, sm: 5 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          maxWidth,
        }}
      >
        {title.map((word, index) => (
          <Typography
            key={index}
            variant="sectionheading"
            sx={{
              color: "#0c2e8a",
              letterSpacing: "1px",
              lineHeight: "3.125rem",
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
      <Box>
        {subtitle && (
          <Typography
            variant="bodytext"
            sx={{
              color: "#616161",
              fontWeight: 400,
              lineHeight: "1.5rem",
              mt: 1,
            }}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export { SecondaryHeader, PrimaryHeader };
