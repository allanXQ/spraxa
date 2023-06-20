import { Box } from "@mui/material";
import React from "react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { VerticalCard } from "../Common/Cards/Vertical";

const ClientCard = () => {
  const testimonials = [
    {
      image: "1.jpg",
      name: "Rakeesh Saraff",
      title: "(Director) Infodrive India Pvt Ltd",
      description:
        "Having a 20 year long association with Spraxa has been a great experience. They have always gone an extra mile to meet our needs, especially in resolving crisis, and never failed to deliver on time.",
    },
    {
      image: "1.jpg",
      name: "Brian Ellis",
      title: "Tailored Logistics",
      description:
        "Spraxa team consists of some of the brightest people in the industry, I have worked with a number of knowledgeable and expirenced people.",
    },
    {
      image: "1.jpg",
      name: "Katie Chang",
      title: "Benten Solutions",
      description:
        "Spraxa team consists of some of the brightest people in the industry, I have worked with a number of knowledgeable and expirenced people.",
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: 500,
        height: 400,
      }}
    >
      <Swiper
        modules={[Pagination, Autoplay, EffectCoverflow]}
        //   spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            //   spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            //   spaceBetween: 40,
          },
          1024: {
            slidesPerView: 1,
            //   spaceBetween: 50,
          },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={testimonial.name}>
            <VerticalCard
              key={index}
              width={500}
              height={400}
              avatar={true}
              readMore={false}
              disableHover={true}
              image={testimonial.image}
              title={testimonial.name}
              subtitle={testimonial.title}
              description={testimonial.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default ClientCard;
