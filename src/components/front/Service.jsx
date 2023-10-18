import React from "react";
import { bg2 } from "../../assets";

const Service = (props) => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center text-center'>
      <div className='border-1 border-gray-200 shadow rounded-xl dark:bg-gray-800'>
        <div className='p-6 space-y-4'>
          <img src={bg2} alt='' className='w-full m-0 max-h-[12rem]' />
          <h1 className='text-2xl font-bold text-gray-800 dark:text-gray-200 mb-0 uppercase'>
            {props.title}
          </h1>
          <span className='text-white dark:text-gray-800 border-b-2 border-primary mt-0'>
            ............
          </span>
          <p className='text-gray-600 dark:text-gray-400'>{props.body}</p>
          <div className=''>
            <a
              href={props.link}
              className='inline-flex items-center px-4 py-2 bg-primary border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary active:bg-primary focus:outline-none focus:border-primary focus:ring ring-primary disabled:opacity-25 transition ease-in-out duration-150'
            >
              {props.linkTitle}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
