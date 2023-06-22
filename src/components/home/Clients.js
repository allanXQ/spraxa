import { Grid } from "@mui/material";
import React from "react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { PrimaryHeader } from "../Common/Header";

const importAllImages = (r) => {
  let images = [];
  r.keys().forEach((item, index) => {
    images.push(item.replace("./", ""));
  });
  return images;
};
const images = importAllImages(
  require.context("../../images/clients/", false, /\.(png|jpe?g|svg)$/)
);

const Clients = () => {
  return (
    <Grid
      container
      style={{
        display: "flex",
        gap: 20,
      }}
    >
      <Grid item style={{}}>
        <PrimaryHeader
          title={[
            { text: "OUR ", underline: false },
            { text: "CLI ", underline: true, noGap: true },
            { text: "ENTS", underline: false },
          ]}
          margin={true}
        />
      </Grid>
      <Grid item style={{ overflow: "hidden", gap: 50 }}>
        <Swiper
          modules={[Pagination, Autoplay, EffectCoverflow]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            900: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={`/images/clients/${image}`}
                alt={image.replace(/\.(png|jpe?g|svg)$/, "")}
                style={{ width: "150px" }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid>
    </Grid>
  );
};

export default Clients;
