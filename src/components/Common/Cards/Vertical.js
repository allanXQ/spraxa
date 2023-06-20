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

//for use in testimonials, brief descriptions
const VrCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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
    disableHover,
  } = props;
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        // gap: 1,
        // margin: 10,
        pt: 2,
        position: "relative",
        width: width,
        height: height,
        backgroundColor: bgColor ? bgColor : "white",
        color: color ? color : "black",
        boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.3)",
        "&:hover": disableHover
          ? null
          : { transform: "scale3d(1.02, 1.02, 1)" },
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              maxWidth: 450,
            }}
          >
            <Typography variant="bodytext">{description}</Typography>
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
          </Box>
        )}
      </VrCardContent>
    </Card>
  );
};
