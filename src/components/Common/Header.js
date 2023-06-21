import { Box, Typography } from "@mui/material";
import React from "react";

const SecondaryHeader = ({ title, subtitle }) => {
  return (
    <Typography variant="h4" style={{ fontWeight: "bold" }}>
      {title}
    </Typography>
  );
};

const PrimaryHeader = ({
  title,
  maxWidth,
  margin,
  subtitle,
  noGap,
  cardHeader,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: !noGap && 1,
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
      <Box
        sx={
          cardHeader && {
            maxWidth: 400,
          }
        }
      >
        {subtitle && (
          <Typography
            variant="bodytext"
            sx={
              cardHeader && {
                color: "primary.main",
                fontWeight: 600,
                fontSize: "1.125rem",
                lineHeight: "1.5rem",
              }
            }
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export { SecondaryHeader, PrimaryHeader };
