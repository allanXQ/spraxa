import { Avatar, Box, Card, Typography, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

//for use in testimonials, brief descriptions
const Content = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  gap: 5,
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
    hideboxShadow,
  } = props;
  return (
    <Card
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        py: 2,
        position: "relative",
        width: width,
        height: height,
        backgroundColor: bgColor ? bgColor : "#fcfcfc",
        color: color ? color : "black",
        boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.3)",
        [theme.breakpoints.down("sm")]: {
          maxWidth: 350,
        },

        "&:hover": disableHover
          ? null
          : { transform: "scale3d(1.02, 1.02, 1)" },
      })}
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
      <Content>
        {title && (
          <Typography
            variant="h6"
            style={{
              fontWeight: "bold",
            }}
          >
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
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "none",
              gap: 2,
              maxWidth: 420,
              [theme.breakpoints.down("sm")]: {
                maxWidth: 300,
              },
            })}
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
      </Content>
    </Card>
  );
};
