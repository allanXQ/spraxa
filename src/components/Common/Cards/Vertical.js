import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import NormalText from "../BodyContent";

//for use in testimonials, brief descriptions
const VrCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: 10,
  padding: 20,
  position: "relative",
}));

const VrCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const VrCardActionArea = styled(CardActionArea)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "flex-end",
  justifyContent: "flex-end",
  position: "absolute",
  bottom: 10,
}));

export const VerticalCard = (props) => {
  const {
    bgColor,
    color,
    width,
    height,
    image,
    imgPath,
    avatar,
    title,
    subtitle,
    description,
    imgWidth,
    imgHeight,
    readMore,
    redirectTo,
  } = props;
  return (
    <VrCard
      style={{
        width: width,
        height: height,
        backgroundColor: bgColor ? bgColor : "white",
        color: color ? color : "black",
        boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.3)",
        "&:hover": {
          transform: "scale3d(2.006, 2.006, 9)",
        },
      }}
    >
      {avatar ? (
        <Avatar
          src={imgPath ? `/images/${imgPath}/${image}` : `/images/${image}`}
          alt={image.replace(/\.(png|jpe?g|svg)$/, "")}
          sx={{ width: 100, height: 100 }}
        />
      ) : (
        <img
          src={imgPath ? `/images/${imgPath}/${image}` : `/images/${image}`}
          alt={image.replace(/\.(png|jpe?g|svg)$/, "")}
          style={{
            imgWidth: imgWidth,
            maxWidth: "600px",
            height: imgHeight,
            maxHeight: "700px",
          }}
        />
      )}
      <VrCardContent>
        {title && (
          <Typography variant="h6" style={{ fontWeight: "bold" }}>
            {title}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="subtitle1" style={{ fontWeight: "bold" }}>
            {subtitle}
          </Typography>
        )}
        {description && (
          <Box>
            <NormalText text={description} />
            {readMore && (
              <Typography
                variant="body2"
                component={Link}
                to={redirectTo}
                style={{ color: "black" }}
              >
                {" "}
                Read More
              </Typography>
            )}
          </Box>
        )}
      </VrCardContent>
    </VrCard>
  );
};
