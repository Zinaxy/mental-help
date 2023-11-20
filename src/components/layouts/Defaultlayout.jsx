import React from "react";
import { Navbar, Footer } from "../index";
import { Outlet } from "react-router-dom";

const Defaultlayout = () => {
  return (
    <div className='bg-white dark:bg-gray-900 scroll-smooth'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Defaultlayout;
