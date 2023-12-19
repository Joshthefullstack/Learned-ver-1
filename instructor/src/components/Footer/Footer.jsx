import React from 'react';
import footer_logo from "../../assets/cover.png";
import { FaFacebook, FaLinkedin, FaSquareInstagram, FaXTwitter    } from "react-icons/fa6";
import style from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={style.container}>
      <img src={footer_logo} alt=''/>

      <div>
       <p>@Copyright LearnedInc</p> 
      </div>

      <div>
        <FaFacebook />
        <FaLinkedin />
        <FaSquareInstagram />
        <FaXTwitter/>
      </div>
    </div>
  )
}

export default Footer;