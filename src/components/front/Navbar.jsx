import React, { useState } from "react";
import { logo, head } from "../../assets/";
import { Link } from "react-router-dom";
import TopNav from "./TopNav";
import { DarkThemeToggle, Flowbite } from "flowbite-react";
import { RiMenu3Fill } from "react-icons/ri";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Appointment",
      path: "/appointment",
    },
    {
      name: "FAQ",
      path: "/faq",
    },
    {
      name: "Story",
      path: "/about-us",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Contact Us",
      path: "/about-us",
    },
  ];
  return (
    <Flowbite>
      <nav className='bg-white border-gray-200 dark:bg-gray-900 shadow-xl'>
        <TopNav />
        <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
          <Link to='#' className='flex items-center'>
            <img
              src={head}
              className='h-6 lg:h-10 mr-3'
              alt='Mental Healthy Logo'
            />
            <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
              MentalHealthy.org
            </span>
          </Link>
          <div className='flex justify-center items-center md:order-2'>
            <Link
              to='/register'
              className='hidden md:block mr-4 px-5 py-2 bg-primary text-white rounded-full hover:bg-transparent hover:text-primary hover:border-2 border-primary  font-md text-sm'
            >
              Sign Up
            </Link>
            <span
              onClick={handleNav}
              className='md:hidden text-slate-800 dark:text-slate-50 w-8 cursor-pointer mr-3'
            >
              {!nav ? <TfiClose size={40} /> : <RiMenu3Fill size={40} />}
            </span>
            <DarkThemeToggle className='text-gray-900 dark:text-white' />
          </div>
          <div
            className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
            id='navbar-cta'
          >
            <ul className='flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
              {navLinks.map((linkItem) => {
                return (
                  <li key={linkItem.name}>
                    <Link
                      to={linkItem.path}
                      className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary md:p-0 md:dark:hover:text-primary dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
                    >
                      {linkItem.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Mobile nav */}
          <div
            className={
              !nav
                ? "fixed bg-white border-gray-200 dark:bg-gray-900 shadow-xl left-0 top-0 right-0 w-full h-full ease-in-out duration-500"
                : "fixed hidden"
            }
          >
            <TopNav />
            <div className='flex justify-between items-center mt-4 mx-4'>
              <Link
                to='#'
                className='flex justify-between items-center w-full text-3xl'
              >
                {" "}
                <img
                  src={logo}
                  className='h-10 mr-3'
                  alt='Mental healthy Logo'
                />
              </Link>

              <span
                onClick={handleNav}
                className='text-slate-800 dark:text-slate-50 w-8 cursor-pointer mr-3'
              >
                {!nav ? <TfiClose size={40} /> : <RiMenu3Fill size={40} />}
              </span>
            </div>
            <ul className='uppercase px-4 m-6 font-bold text-md dark:text-white'>
              {navLinks.map((linkItem) => {
                return (
                  <li
                    key={linkItem.name}
                    className='p-3 border-b border-slate-200'
                  >
                    <Link
                      to={linkItem.path}
                      className='flex justify-start items-center hover:border-2 border-primary rounded-full hover:text-center px-5 py-2.5'
                      onClick={handleNav}
                    >
                      {linkItem.name}
                    </Link>
                  </li>
                );
              })}
              <li className='p-3 '>
                <Link
                  to='/register'
                  onClick={handleNav}
                  className='flex justify-center items-center  px-5 py-2.5 bg-primary text-white rounded-full hover:bg-transparent hover:border-2 border-primary hover:text-primary font-bold text-lg'
                >
                  Sign UP
                </Link>
              </li>
              <li className='p-3 '>
                <Link
                  to='/register'
                  onClick={handleNav}
                  className='flex justify-center items-center  px-5 py-2.5 b-transparent text-primary rounded-full border-2 border-primary hover:bg-primary hover:text-white font-bold text-lg'
                >
                  Make Donations
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Flowbite>
  );
};

export default Navbar;
