import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id='hero'
      className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply"
    >
      <div className='px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56'>
        <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
          <h3 className='bg-transparent md:bg-primary text-base md:text-3xl inline-flex justify-center items-center py-3 px-5  font-medium text-center text-white rounded-full border border-white  focus:ring-4 focus:ring-gray-400'>
            Improve your Mental Healthy
          </h3>
        </div>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl'>
          We invest in the world’s potential
        </h1>
        <p className='mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          dicta id nihil eos perferendis minus!. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit.
        </p>
        <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
          <Link
            to='/appointment-create'
            className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-full bg-primary hover:bg-blue-100 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-100 hover:text-primary'
          >
            Booking
            <svg
              className='w-6 h-6 text-white ml-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 5h12m0 0L9 1m4 4L9 9'
              />
            </svg>
          </Link>
          <Link
            href='#'
            className='inline-flex justify-center hover:text-primary items-center py-3 px-5 text-base font-medium text-center text-white rounded-full border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400'
          >
            Donate
            <svg
              className='w-6 h-6 text-white ml-2'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 11 20'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1.75 15.363a4.954 4.954 0 0 0 2.638 1.574c2.345.572 4.653-.434 5.155-2.247.502-1.813-1.313-3.79-3.657-4.364-2.344-.574-4.16-2.551-3.658-4.364.502-1.813 2.81-2.818 5.155-2.246A4.97 4.97 0 0 1 10 5.264M6 17.097v1.82m0-17.5v2.138'
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
