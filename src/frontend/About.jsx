import React from "react";
import BreadCrump from "../components/front/BreadCrump";

import { bg2 } from "../assets";
import { Link } from "react-router-dom";
import { BiAngry, BiMaleFemale } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <div>
      <div className='text-center items-center dark:bg-gray-900 dark:text-slate-100'>
        {/* bread crupm */}
        <BreadCrump title='About Us' />
        <div className='flex justify-center  mt-10'>
          <div className='xl:max-w-[1280px] w-full'>
            {/* <h1 className='text-4xl mt-2 font-bold font-poppins text-slate-700 dark:text-white'>
              <span className='text-primary'>Mental Healthy</span> Professionals
            </h1>
            <span className='text-white dark:text-slate-900 border-b-4 border-primary'>
              .................................
            </span> */}
            <div className='mx-2 md:mx-0 my-10 justify-between space-x-4 gap-4'>
              <div className='md:flex gap-8 mb-8  w-full outline-1 text-start'>
                <div className='w-full md:w-6/12'>
                  <img
                    src={bg2}
                    alt=''
                    className='hover:brightness-75 rounded-lg w-full'
                  />
                </div>
                <div className='w-full md:w-6/12'>
                  <h1 className='text-2xl mt-2 font-bold font-poppins text-slate-700 dark:text-white text-start'>
                    Who We Are
                  </h1>
                  <span className='text-white dark:text-slate-900 border-b-4 border-primary'>
                    ............
                  </span>
                  <p className='flex text-start mt-5 leading-normal text-slate-600 dark:text-slate-200 text-lg'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deleniti voluptatibus esse fuga sit! Numquam.Lorem ipsum
                    dolor sit, amet consectetur adipisicing elit. Dolor,
                    doloremque harum? A odio officia totam velit corrupti
                    eligendi aliquam dignissimos reiciendis commodi assumenda,
                    voluptatem, est voluptatum eum nobis quae minus.
                  </p>
                  <Link className='text-primary font-bold font-serif text-lg flex gap-3 items-center mt-3'>
                    Read More <BsArrowRight />
                  </Link>
                </div>
              </div>
              {/* our features */}
              <div className='space-y-4 w-full md:6/12 my-5 text-start'>
                <h1 className='text-3xl font-bold font-poppins text-slate-700 dark:text-white text-start'>
                  Our Features.
                </h1>
                <span className='text-white dark:text-slate-900 border-b-4 border-primary text-start'>
                  ............
                </span>
                <p className='flex text-start mt-5 leading-normal text-slate-600 dark:text-slate-200 text-lg'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolor, doloremque harum?
                </p>
                {/* sub categories */}
                <div className='grid grid-rows md:grid-cols-2 gap-y-6'>
                  {/* single category */}
                  <div className='flex w-full'>
                    <div className='mx-3 bg-primary px-4 py-2 h-12'>
                      <svg
                        className='w-7 h-7 text-white'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 20 18'
                      >
                        <path
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M16 5h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2v3l-4-3H8m4-13H2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2v3l4-3h4a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z'
                        />
                      </svg>
                    </div>
                    <div className=''>
                      <Link to='#'>
                        <h5 className='mb-2 text-1xl font-semibold tracking-tight text-slate-900 dark:text-white'>
                          Consultation?
                        </h5>
                      </Link>
                      <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>
                        Go to this step by step guideline process on how to
                        certify for your weekly benefits:
                      </p>
                      <Link className='text-primary font-bold font-serif text-medium flex gap-3 items-center mt-3'>
                        Read More <BsArrowRight />
                      </Link>
                    </div>
                  </div>
                  {/* single category */}
                  <div className='flex w-full'>
                    <div className='mx-3 bg-primary px-4 py-2 h-12'>
                      <svg
                        className='w-7 h-7 text-white'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 20 20'
                      >
                        <path
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M4.333 6.764a3 3 0 1 1 3.141-5.023M2.5 16H1v-2a4 4 0 0 1 4-4m7.379-8.121a3 3 0 1 1 2.976 5M15 10a4 4 0 0 1 4 4v2h-1.761M13 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-4 6h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z'
                        />
                      </svg>
                    </div>
                    <div className=''>
                      <Link to='#'>
                        <h5 className='mb-2 text-1xl font-semibold tracking-tight text-slate-900 dark:text-white'>
                          Family Therapy?
                        </h5>
                      </Link>
                      <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>
                        Go to this step by step guideline process on how to
                        certify for your weekly benefits:
                      </p>
                      <Link className='text-primary font-bold font-serif text-medium flex gap-3 items-center mt-3'>
                        Read More <BsArrowRight />
                      </Link>
                    </div>
                  </div>
                  {/* single category */}
                  <div className='flex w-full'>
                    <div className='mx-3 bg-primary px-4 py-2 h-12'>
                      <BiAngry size={30} className='text-white' />
                    </div>
                    <div className=''>
                      <Link to='#'>
                        <h5 className='mb-2 text-1xl font-semibold tracking-tight text-slate-900 dark:text-white'>
                          Angry or Depression?
                        </h5>
                      </Link>
                      <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>
                        Go to this step by step guideline process on how to
                        certify for your weekly benefits:
                      </p>
                      <Link className='text-primary font-bold font-serif text-medium flex gap-3 items-center mt-3'>
                        Read More <BsArrowRight />
                      </Link>
                    </div>
                  </div>
                  {/* single category */}
                  <div className='flex w-full'>
                    <div className='mx-3 bg-primary px-4 py-2 h-12'>
                      <BiMaleFemale size={30} className='text-white' />
                    </div>
                    <div className=''>
                      <Link to='#'>
                        <h5 className='mb-2 text-1xl font-semibold tracking-tight text-slate-900 dark:text-white'>
                          Relationship and Marriage?
                        </h5>
                      </Link>
                      <p className='mb-3 font-normal text-gray-500 dark:text-gray-400'>
                        Go to this step by step guideline process on how to
                        certify for your weekly benefits:
                      </p>
                      <Link className='text-primary font-bold font-serif text-medium flex gap-3 items-center mt-3'>
                        Read More <BsArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
