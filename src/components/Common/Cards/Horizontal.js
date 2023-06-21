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
  height: 500,
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

const CardDescription = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 20,
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
      <CardDescription>
        {children}
        {description && typeof description === "string" ? (
          <Typography variant="body1">{description}</Typography>
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
                  <Typography sx={{ fontWeight: "bold" }}>{desc}</Typography>
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
          <Link to={redirectTo}>
            <Button variant="contained">Read More</Button>
          </Link>
        )}
      </CardDescription>
    </CardContainer>
  );
};
