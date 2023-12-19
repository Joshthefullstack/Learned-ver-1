import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import HeroContent from "../../components/HeroContent/HeroContent";
import AboutUsContent from "../../components/AboutUsContent/AboutUs";
import CourseContent from "../../components/CourseContent/CourseContent";
import ContactContent from "../../components/ContactContent/ContactContent";

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <HeroContent/>
      <AboutUsContent/>
      <CourseContent/>
      <ContactContent/>
    </div>
  )
}

export default HomePage