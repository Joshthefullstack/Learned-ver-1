import React from 'react';
import about_us from "../../assets/about us.png";
import style from "../../styles/AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={style.container}>
      <div>
        <h1>What do we do?</h1>
        <p>In today's fast-paced world, access to quality education is more critical than ever.</p>
        <p>Learned addresses the evolving landscape of education, making quality learning accessible to all. Whether you're a student eager to explore new horizons, an instructor passionate about sharing knowledge, or an admin shaping the educational landscape</p>
        <p><span>Learned is where your journey begins...</span></p>
        <button>Read More</button>
      </div>
      <img src={about_us} alt=''/>
    </div>
  )
}

export default AboutUs;