import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { BiTime } from "react-icons/bi";

const AppointmentCard = (props) => {
  return (
    <section id='about-us'>
      {/* single category */}
      <div className='flex justify-center items-center w-full m-4 hover:shadow-lg'>
        <div className='mx-3 bg-primary px-3 py-2 uppercase'>
          <h1 className='font-bold text-2xl font-serif text-white'>
            {props.date}
          </h1>
        </div>
        <div className='text-start ml-4'>
          <Link to='#'>
            <h5 className='mb-2 text-1xl font-semibold tracking-tight text-slate-900 dark:text-white'>
              {props.title}
            </h5>
          </Link>
          <p className='flex text-sm text-primary items-center space-x-3'>
            <BiTime className='mr-2' />
            {props.time}
          </p>
          <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>
            {props.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCard;
