import React from "react";
import HeroBanner from "./HeroBanner";
import LogoCarousel from "./LogoCarousel";
import WhoWeAre from "../About/WhoWeAre";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <LogoCarousel />
      <WhoWeAre />
      <WhyChooseUs />
    </>
  );
};

export default Home;
