import React from "react";
import ContactIcon from "../components/front/ContactIcon";
import { BreadCrump } from "../components";
import { Link } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoWhatsapp,
  BiLogoTwitter,
  BiLogoInstagram,
  BiPhoneCall,
  BiMap,
} from "react-icons/bi";

const Contact = () => {
  const socialDetails = [
    {
      id: 0,
      icon: <BiLogoFacebook className='text-white  text-center text-3xl' />,
      socialLink: "#",
      IconName: "facebook",
    },
    {
      id: 1,
      icon: <BiLogoWhatsapp className='text-white  text-center text-3xl' />,
      socialLink: "#",
      IconName: "WhastApp",
    },
    {
      id: 2,
      icon: <BiLogoInstagram className='text-white  text-center text-3xl' />,
      socialLink: "#",
      IconName: "Instagram",
    },
    {
      id: 3,
      icon: <BiLogoTwitter className='text-white  text-center text-3xl' />,
      socialLink: "#",
      IconName: "Twitter / X",
    },
    {
      id: 4,
      icon: <BiPhoneCall className='text-white  text-center text-3xl' />,
      socialLink: "#",
      IconName: "+263 (784) 484 144",
    },
    {
      id: 5,
      icon: <BiMap className='text-white  text-center text-3xl' />,
      socialLink: "#",
      IconName: "1556 logan street ,Harare Zimbabwe",
    },
  ];
  return (
    <section id='contact-us'>
      <div className='text-center items-center dark:bg-gray-900 dark:text-slate-100'>
        {/* bread crupm */}
        <BreadCrump title='Contact Us' />
        <div className='flex justify-center  mt-10'>
          <div className='xl:max-w-[1280px] w-full'>
            <div className='mx-2 md:mx-0 my-10 justify-between space-x-4 gap-4'>
              <div className='md:flex gap-8 mb-8  w-full outline-1 text-start'>
                <div className='w-full md:w-6/12'>
                  <h1 className='text-2xl font-bold font-poppins text-slate-700 dark:text-white text-start'>
                    Our Social Links.
                  </h1>
                  <span className='text-white dark:text-slate-900 border-b-4 border-primary text-start'>
                    ............
                  </span>
                  <div className='grid grid-cols-3  gap-y-8 mt-10'>
                    {socialDetails.map((ourSocial) => {
                      return (
                        <ContactIcon
                          key={ourSocial.id}
                          icon={ourSocial.icon}
                          socialLink={ourSocial.socialLink}
                          IconName={ourSocial.IconName}
                        />
                      );
                    })}
                  </div>
                </div>

                <div className='w-full md:w-6/12 mt-12 md:mt-0'>
                  <h1 className='text-2xl font-bold font-poppins text-slate-700 dark:text-white text-start'>
                    Leave Us a Message.
                  </h1>
                  <span className='text-white dark:text-slate-900 border-b-4 border-primary text-start'>
                    ............
                  </span>
                  <div className='flex flex-col justify-center w-full md:w-10/12 mb-16'>
                    <form action=''>
                      <div className='text-start m-3'>
                        <label className='block text-sm font-medium text-gray-700 dark:text-gray-400'>
                          Subject
                        </label>
                        <div className='mt-1'>
                          <input
                            type='text'
                            name='subject'
                            id='subject'
                            autoComplete='subject'
                            required
                            className='block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
                          />
                        </div>
                      </div>
                      <div className='text-start m-3'>
                        <label className='block text-sm font-medium text-gray-700 dark:text-gray-400'>
                          Email
                        </label>
                        <div className='mt-1'>
                          <input
                            type='email'
                            name='email'
                            id='email'
                            autoComplete='email'
                            required
                            className='block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
                          />
                        </div>
                      </div>
                      <div className='text-start m-3'>
                        <label className='block text-sm font-medium text-gray-700 dark:text-gray-400'>
                          Your Message
                        </label>
                        <div className='mt-1'>
                          <textarea
                            rows={6}
                            name='message'
                            id='message'
                            autoComplete='message'
                            required
                            className='block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
                          ></textarea>
                        </div>
                      </div>
                      <div className='flex items-center m-1'>
                        <div className='text-center m-3'>
                          <button
                            type='submit'
                            className='block items-center px-4 py-2 bg-primary border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary active:bg-primary focus:outline-none focus:border-primary focus:ring ring-primary disabled:opacity-25 transition ease-in-out duration-150'
                          >
                            Submit Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* our features */}
              {/*  <div className='space-y-4 w-full md:6/12 my-5 text-start'>
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
                {/* sub categories 
                <div className='grid grid-rows md:grid-cols-2 gap-y-6'></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
