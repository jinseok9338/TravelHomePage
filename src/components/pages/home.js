import React from "react";
import "../../App.css";
import HeroSection from "../HeroSection";
import Cards from "../../cards";
import Footer from "../footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
