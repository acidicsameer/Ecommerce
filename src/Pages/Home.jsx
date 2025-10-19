import React from "react";
import Services from "../Components/UI/Services";
import Contact from "../Components/UI/Contact";
import HeroSection from "../Components/UI/HeroSection";
const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
