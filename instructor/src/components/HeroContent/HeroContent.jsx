import React from 'react';
import edutech2 from "../../assets/edutech2.png";
import style from "../../styles/HeroContent.module.css";
import icon1 from "../../assets/icon-removebg-preview.png";
import icon2 from "../../assets/icon_2-removebg-preview.png";
import calculator_icon from "../../assets/calculator-removebg-preview.png";

const HeroContent = () => {
  return (
    <div className={style.container}>
      <img src={icon1} alt='' className={style.icons} />
      <img src={icon2} alt='' className={style.icons2} />
      <img src={calculator_icon} alt='' className={style.icons3} />
      <div>
          <p>THE RIGHT PATHWAY TO SUCCESS</p>
          <h1>The right <span>Platform</span>, for the right <span>Education</span></h1>
          <p>Making a Learned community, one person at a time, taught by well known experts, state of the art technology, and various content for your own choosing.</p>
      </div>
      <img src={edutech2} alt=""/>
    </div>
  );
}

export default HeroContent;