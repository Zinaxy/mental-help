import React from "react";
import { BsEmojiAngry } from "react-icons/bs";
import { FaArrowTurnUp } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='flex justify-center items-center text-center h-screen dark:bg-gray-900'>
      <div className='flex flex-col justify-center items-center mt'>
        <BsEmojiAngry size={60} className='font-bold text-rose-600' />
        <h1 className='text-8xl font-exrabold dark:text-white '>
          <span className='tracking-wider font-mono text-primary'>404</span>-
          Page not Found !
        </h1>
        <Link
          to={"/"}
          className='px-8 py-4 text-2xl text-white text-bold border-2 bg-primary rounded mt-4 flex justify-between items-center hover:text-primary hover:bg-white hover:border-primary'
        >
          Home Page <FaArrowTurnUp className='mx-4' />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
