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
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        gap: !noGap && 1,
        ml: margin && 5,
        [theme.breakpoints.down("sm")]: {
          marginLeft: 0,
          alignItems: "center",
          gap: 0.5,
        },
      })}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          maxWidth: maxWidth && maxWidth,
          [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
          },
        })}
      >
        {title.map((word, index) => (
          <Typography
            key={index}
            variant="sectionheading"
            sx={(theme) => ({
              color: "#0c2e8a",
              letterSpacing: "1px",
              lineHeight: "3.125rem",
              fontWeight: 700,
              textDecoration: word.underline ? "underline" : "none",
              textDecorationColor: (theme) =>
                word.underline ? theme.palette.primary.main : "inherit",
              textDecorationThickness: word.underline ? 5 : "auto",
              marginRight: word.noGap ? 0 : 1.2,
              [theme.breakpoints.down("sm")]: {
                fontSize: "2rem",
                lineHeight: "2.3rem",
              },
            })}
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
            sx={(theme) => ({
              color: cardHeader && "primary.main",
              fontWeight: cardHeader && 600,
              lineHeight: cardHeader && "1.5rem",
              [theme.breakpoints.down("sm")]: {
                display: "flex",
                // alignItems: "center",
                flexWrap: "wrap",
                paddingLeft: !cardHeader && 2,
                paddingRight: !cardHeader && 2,
              },
            })}
          >
            {subtitle}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export { SecondaryHeader, PrimaryHeader };
