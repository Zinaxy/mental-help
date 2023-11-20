import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../index";

const GuestLayout = () => {
  return (
    <div className='bg-white dark:bg-gray-900 scroll-smooth'>
      <Outlet />
    </div>
  );
};

export default GuestLayout;
