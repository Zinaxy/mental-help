import { FaqCard, BreadCrump } from "../components";
import React from "react";

const FAQ = () => {
  const accordionData = [
    {
      id: 1,
      title: "What is mental health? ",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis inventore optio esse enim perferendis consequuntur eos accusantium a nihil perspiciatis.",
    },
    {
      id: 2,
      title: "What do I do if the support doesn't help?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit obcaecati minus quibusdam dolorem, odit, totam nisi aliquam debitis temporibus aperiam te earum voluptate alias incidunt.",
    },
    {
      id: 3,
      title: "Can you prevent mental health problems?",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aspernatur saepe deleniti illum minus labore animi repudiandae laborum quas! s dolore veniam ab nobis at, animi blanditiis qui voluptatem eius.",
    },
    {
      id: 4,
      title: "What causes mental health problems?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis amet sed earum odio iusto nobis culpa doloremque tempore vero quibusdam.",
    },
  ];
  return (
    <section
      id='frequently-asked-questions'
      className='text-center items-center dark:bg-gray-900 dark:text-slate-100'
    >
      {/* bread crupm */}
      <BreadCrump title='Frequently Asked Questions' />
      {/* register btn */}
      <div className='flex justify-center text-center mt-10 dark:bg-slate-900'>
        <div className='text-center w-full'>
          <div className='flex flex-col justify-between items-center text-center'>
            {/* form */}
            <div className='flex flex-col justify-center w-full md:w-6/12 mb-16'>
              {/* questions table */}
              {accordionData.map((accdata) => {
                return (
                  <FaqCard
                    key={accdata.id}
                    title={accdata.title}
                    textbody={accdata.content}
                    id={accdata.id}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
