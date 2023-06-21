import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ImageDimensions = {
  width: 600,
  height: 400,
};
//for use in products, Services description etc
const CardContainer = styled(Box)(({ theme, reverse }) => ({
  display: "flex",
  backgroundColor: "white",
  gap: 40,
  flexDirection: reverse ? "row-reverse" : "row",
  [`@media screen and (max-width: ${theme.breakpoints.values.md}px)`]: {
    flexDirection: "column",
  },
}));

const CardDescription = styled(Box)(({ theme, centerAligned }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: centerAligned ? "center" : "flex-start",
  gap: 10,
}));

export const HorizontalCard = (props) => {
  const {
    hideKey,
    image,
    imgPath,
    description,
    readMore,
    reverse,
    redirectTo,
    centerAligned,
    children,
  } = props;
  function isObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
  }
  return (
    <CardContainer reverse={reverse}>
      <img
        src={imgPath ? `/images/${imgPath}/${image}` : `/images/${image}`}
        alt={image?.replace(/\.(png|jpe?g|svg)$/, "")}
        width={ImageDimensions.width}
        height={ImageDimensions.height}
      />
      <CardDescription centerAligned={centerAligned}>
        {children}
        {description && typeof description === "string" ? (
          <Typography variant="bodytext">{description}</Typography>
        ) : description && Array.isArray(description) ? (
          <ul>
            {description.map((text) => (
              <li>{text}</li>
            ))}
          </ul>
        ) : description && isObject(description) ? (
          <Box>
            {Object.keys(description).map((desc) => (
              <Box sx={{ display: "flex" }}>
                {!hideKey && (
                  <Typography variant="bodytext" sx={{ fontWeight: "bold" }}>
                    {desc}
                  </Typography>
                )}
                <Typography variant="bodytext" style={{ marginBottom: 15 }}>
                  {description[desc]}
                </Typography>
              </Box>
            ))}
          </Box>
        ) : (
          ""
        )}
        {readMore && (
          <Typography
            variant="boldbodytext"
            component={Link}
            to={redirectTo}
            sx={{ color: "primary.main" }}
          >
            {" "}
            Read More
          </Typography>
        )}
      </CardDescription>
    </CardContainer>
  );
};
