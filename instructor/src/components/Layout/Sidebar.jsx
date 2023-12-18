import React from 'react';
import style from '../../styles/Sidebar.module.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className={style.container}>
      <h1>Learned-Instructors</h1>
      <div>
        <p>Welcome back, {user.username}</p>
      </div>
      <Link to="/">Dashboard</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/lessons">Lessons</Link>
      <Link onClick={() => {localStorage.removeItem('user'); window.location.reload(false);}}>Logout</Link>
    </div>
  )
}

export default Sidebar
