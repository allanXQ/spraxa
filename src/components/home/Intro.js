import React from "react";
import SectionContainer from "../Common/SectionContainer";
import { PrimaryHeader } from "../Common/Header";
import { HorizontalCard } from "../Common/Cards/Horizontal";

const Intro = () => {
  return (
    <SectionContainer>
      <HorizontalCard
        image="team2.jpg"
        description="As a team of innovative minds, we are dedicated to empowering your self-improvement journey 
        across various business sectors. We aim to understand and actualize your unique vision and goals effectively.
         We partner with you, whether you're an entrepreneur or an experienced executive, to foster growth and 
         improve skills. Simply put, our mission is to guide you in evolving and confidently navigating your path 
         to success.
      "
      >
        <PrimaryHeader
          title={[
            { text: "OUR", underline: false },
            { text: "TEAM", underline: false },
            { text: "WILL", underline: false },
            { text: "HELP", underline: false },
            { text: "YOU", underline: false },
            { text: "TO", underline: true },
            { text: "BECOME", underline: false },
            { text: "BETTER", underline: false },
          ]}
          margin={false}
          maxWidth={470}
          subtitle="We are a team of like-minded people who do business, understands the ideas and realize them."
        />
      </HorizontalCard>
    </SectionContainer>
  );
};

export default Intro;
