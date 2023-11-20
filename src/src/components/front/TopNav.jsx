import React from "react";
import { Link } from "react-router-dom";
import { BiMobileAlt, BiEnvelope, BiMapAlt } from "react-icons/bi";

const TopNav = () => {
  return (
    <div>
      <div className='w-full bg-primary flex justify-center items-center'>
        <div className='flex justify-between'>
          <div className='hidden lg:flex mx-24 my-4  '>
            <ul className='decoration none list-none flex justify-between text-center space-x-4'>
              <li className='text-white font-bold text-1xl  divide-r-2'>
                <h4 className='text-white flex items-center'>
                  <BiMobileAlt size={20} className='mr-1' /> +1 (205) 947-7532 |
                </h4>
              </li>
              <li className='text-white font-bold text-1xl  divide-r-2'>
                <h4 className='text-white flex items-center'>
                  <BiEnvelope size={20} className='mr-1' />{" "}
                  mentalhealth23@gmail.com |
                </h4>
              </li>
              <li className='text-white font-bold text-1xl  divide-r-2'>
                <h4 className='text-white flex items-center'>
                  <BiMapAlt size={20} className='mr-1' /> 546 kingstone street
                  Harare
                </h4>
              </li>
            </ul>
          </div>
          <div className='flex justify-center text-center m-2'>
            <Link
              to='/appointment-create'
              className='px-5 py-1.5 text-center rounded-2xl bg-transparent border-2 border-white font-bold text-white text-1xl hover:bg-white hover:text-primary'
            >
              Make an Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
