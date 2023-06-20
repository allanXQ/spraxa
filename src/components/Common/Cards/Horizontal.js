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
import { CardSubtitle, SecondaryHeader } from "../../../styles";

//for use in products, Services description etc
const StyledHrCard = styled(Card)(({ theme }) => ({
  display: "flex",
  backgroundColor: "white",
  // alignItems:'center',
  margin: 10,
  padding: 20,
  [`@media screen and (max-width: ${theme.breakpoints.values.md}px)`]: {
    flexDirection: "column",
  },
}));

const StyledHrCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  // alignItems:'center',
  gap: 10,
}));

export const HorizontalCard = (props) => {
  const {
    hideKey,
    width,
    height,
    image,
    imgPath,
    title,
    subtitle,
    description,
    imgWidth,
    imgHeight,
    readMore,
    redirectTo,
    reverse,
  } = props;
  function isObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
  }
  return (
    <StyledHrCard
      sx={{
        width: width,
        height: height,
        gap: 5,
        flexDirection: reverse ? "row-reverse" : "row",
      }}
    >
      {
        <img
          src={imgPath ? `/images/${imgPath}/${image}` : `/images/${image}`}
          alt={image.replace(/\.(png|jpe?g|svg)$/, "")}
          style={{
            imgWidth: imgWidth,
            maxWidth: "600px",
            height: imgHeight,
            maxHeight: "700px",
            objectFit: "contain",
          }}
        />
      }
      <StyledHrCardContent sx={{ flexDirection: "column" }}>
        {title && <Typography style={SecondaryHeader}>{title}</Typography>}
        {subtitle && (
          <Typography style={{ ...CardSubtitle, maxWidth: 270 }}>
            {subtitle}
          </Typography>
        )}
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
      </StyledHrCardContent>
    </StyledHrCard>
  );
};
