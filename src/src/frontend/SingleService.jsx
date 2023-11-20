import React from "react";
import { bg2 } from "../assets";
import { BreadCrump } from "../components";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const SingleService = () => {
  return (
    <div>
      {" "}
      <div className='text-center items-center dark:bg-gray-900 dark:text-slate-100'>
        {/* bread crupm */}
        <BreadCrump title='Single Service' />
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
                    Consultation
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
                    voluptatem, est voluptatum eum nobis quae minus. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Unde eius
                    facilis vel possimus est eligendi sunt! Temporibus,
                    explicabo recusandae? Obcaecati.
                  </p>
                  <Link
                    to='/appointment-create'
                    className='text-primary font-bold font-serif text-lg flex gap-3 items-center mt-3'
                  >
                    Book Now <BsArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
