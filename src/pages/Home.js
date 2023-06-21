import React from "react";
import Clients from "../components/home/Clients";
import Testimonials from "../components/home/Testimonials";
import Counter from "../components/home/Counter";
import Portfolio from "../components/home/Portfolio";
import BodyContainer from "../components/Common/BodyContainer";
import Intro from "../components/home/Intro";
const Home = () => {
  return (
    <BodyContainer>
      <Intro />
      <Counter />
      <Portfolio />
      <Testimonials />
      <Clients />
    </BodyContainer>
  );
};

export default Home;
