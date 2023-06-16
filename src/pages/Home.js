import React from "react";
import Clients from "../components/home/Clients";
import Testimonials from "../components/home/Testimonials";
import Counter from "../components/home/Counter";
import Portfolio from "../components/home/Portfolio";
import BodyContainer from "../components/Common/BodyContainer";
const Home = () => {
  return (
    <BodyContainer>
      <Counter />
      <Portfolio />
      <Testimonials />
      <Clients />
    </BodyContainer>
  );
};

export default Home;
