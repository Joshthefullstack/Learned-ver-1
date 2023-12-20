import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import HeroContent from "../../components/HeroContent/HeroContent";
import AboutUsContent from "../../components/AboutUsContent/AboutUs";
import CourseContent from "../../components/CourseContent/CourseContent";
import ContactContent from "../../components/ContactContent/ContactContent";
import Footer from '../../components/Footer/Footer';
import Course from './Course';

const HomePage = ({setAction, setShowInstructorLogin}) => {
  const [showCourse, setShowCourse] = React.useState(false);
  const [selectedCourse, setSelectedCourse] = React.useState({})
  return (
    <div>
      <Navbar setAction={setAction} setShowInstructorLogin={setShowInstructorLogin} />
      {showCourse ? '' : <HeroContent/>}
      {showCourse ? '' : <AboutUsContent/>}
      {showCourse ? '' : <CourseContent setShowCourse={setShowCourse} setSelectedCourse={setSelectedCourse} />}
      {showCourse ? '' : <ContactContent/>}
      {showCourse ? <Course selectedCourse={selectedCourse} setShowCourse={setShowCourse} /> : ''}

      <Footer/>
    </div>
  )
}

export default HomePage