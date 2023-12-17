import React from 'react';
import style from '../../styles/Sidebar.module.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={style.container}>
      <h1>Learned-Instructors</h1>
      <div>
        <p>JO</p>
        <p>John Doe</p>
      </div>
      <Link to="/">Dashboard</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/lessons">Lessons</Link>
      <Link to="/">Logout</Link>
    </div>
  )
}

export default Sidebar
