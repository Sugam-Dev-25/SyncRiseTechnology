import React from "react";
import TopHeader from "../../Layouts/TopHeader";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import BottomFooter from "../../Layouts/BottomFooter";
import HeroBanner from "./HeroBanner";
import LogoCarousel from "./LogoCarousel";
import WhoWeAre from "../About/WhoWeAre";

const Home = () => {
  return (
    <>
      <TopHeader />
      <Header />
      <HeroBanner/>
      <LogoCarousel/>
      <WhoWeAre/>
      <Footer />
      <BottomFooter />
    </>
  );
};

export default Home;
