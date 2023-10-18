import React from "react";
import { Navbar, Footer } from "./components";
import Home from "./frontend/Home";
import MyRouter from "./router";

const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 scroll-smooth'>
      <Navbar />
      <MyRouter />
      <Footer />
    </div>
  );
};

export default App;
