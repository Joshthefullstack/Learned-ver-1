import React from "react";
import cover from "../../assets/cover.png";
// import { Link } from 'react-router-dom';
import style from "../../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={style.container}>
      <img src={cover} alt="" />

      <div className={style.link__group}>
        <a href="/">Home</a>
        <a href="#about">About</a>
        <a href="#courses">Courses</a>
        <a href="#contact">Contact</a>
      </div>

      <div className={style.button__group}>
        <button>Get Started</button>
        <button>For Instructors</button>
      </div>
    </div>
  );
};

export default Navbar;
