import React from 'react';
import { Outlet } from "react-router-dom";
import Sidebar from './Sidebar';


const Layout = () => {
  return (
    <div className='layout'>
      <Sidebar/>
      <div className='layout-content'>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
