import React from 'react';
import style from '../../styles/Sidebar.module.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={style.container}>
      <h1>Learned-Admin</h1>
      <Link to="/">Dashboard</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/lessons">Lessons</Link>
    </div>
  )
}

export default Sidebar
