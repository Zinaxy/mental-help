import React from "react";
import { Link } from "react-router-dom";

const InfoGuide = () => {
  const infoinfoGuide = [
    {
      id: 1,
      title: "Factors that affect mental Healthy",
      body: "Learn more about the different biological, psychological, and social factors that can impact your mental health.",
      link: "#",
    },
    {
      id: 2,
      title: " Getting help for your mental health",
      body: "Find out how you can help yourself, what external support is available, and what to do in a crisis.....",
      link: "#",
    },
    {
      id: 3,
      title: "Mental health within different communities",
      body: "Discover mental health information, tips, and advice that's relevant for different groups of people.",
      link: "#",
    },
  ];
  return (
    <section className='flex justify-center  mt-10'>
      <div className='xl:max-w-[1280px] w-full my-10'>
        <h1 className='text-4xl mt-2 font-bold font-poppins text-slate-700 dark:text-white m-4'>
          Information & Guidence
        </h1>
        <span className='text-gray-100 dark:text-slate-900 border-b-4 border-primary'>
          .................................
        </span>
        <div className='md:flex justify-center items-center m-10 gap-6 w-full'>
          {infoinfoGuide.map((info) => {
            return (
              <div
                className='mb-4 md:mb-0 border-2 border-primary rounded-t-[40px] rounded-bl-[40px] p-7 w-10/12 md:w-full '
                key={info.id}
              >
                <div className='flex flex-col gap-4'>
                  <div className=''>
                    <h1 className='text-2xl font-bold capitalize text-slate-800 dark:text-slate-200'>
                      {info.title}
                    </h1>
                    <p className='text-lg text-slate-600 dark:text-slate-400 m-6 '>
                      {info.body}
                    </p>
                  </div>
                  <div className=''>
                    <Link
                      to={info.link}
                      className='rounded-full bg-transparent text-primary font-bold capitalize px-5 py-2.5 border-2 border-primary hover:bg-primary hover:text-white'
                    >
                      learn more
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InfoGuide;
