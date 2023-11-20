import React from "react";
import { Navbar, Footer } from "./components";
import Home from "./frontend/Home";
import MyRouter from "./router/router";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 scroll-smooth'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
