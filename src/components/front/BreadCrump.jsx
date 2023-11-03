import React from "react";
import { head } from "../../assets";

const BreadCrump = (props) => {
  return (
    <section
      id={props.title}
      className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply flex justify-center text-center shadow-xl mb-10"
    >
      <div className='flex justify-between text-center m-10   md:w-6/12 p-6'>
        <div className='hidden md:flex'>
          <img src={head} alt='' className='w-24' />
        </div>
        <div className='border-8 border-white p-6'>
          <h1 className='text-1xl  md:text-5xl font-bold font-poppins text-white drop-shadow-2xl'>
            {props.title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BreadCrump;
