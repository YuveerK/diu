import React from "react";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import Workflow from "../components/Workflow";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Testimonials from "../components/Testimonials";
const Home = () => {
  return (
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Testimonials />
      <Contact />

    </div>
  );
};

export default Home;
