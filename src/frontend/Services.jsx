import React from "react";
import BreadCrump from "../components/front/BreadCrump";
import { Service } from "../components";

const Services = () => {
  const servicesData = [
    {
      id: 0,
      title: "Consultation",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .",
      link: "/service",
      linkTitle: "Read More",
    },
    {
      id: 1,
      title: "ANXIETY COUNSELLING",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .",
      link: "/service",
      linkTitle: "Read More",
    },
    {
      id: 2,
      title: "PERSONAL DEVELOPMENT",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .",
      link: "/service",
      linkTitle: "Read More",
    },
    {
      id: 3,
      title: "SEXUAL COUNSELLING",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .",
      link: "/service",
      linkTitle: "Read More",
    },
    {
      id: 4,
      title: "RELATIONSHIP PROBLEMS",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .",
      link: "/service",
      linkTitle: "Read More",
    },
    {
      id: 5,
      title: "DEPRESSION TREATMENT",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .",
      link: "/service",
      linkTitle: "Read More",
    },
  ];
  return (
    <section
      id='services'
      className='text-center items-center dark:bg-gray-900 dark:text-slate-100'
    >
      {/* bread crupm */}
      <BreadCrump title='Our Services' />
      {/* register btn */}
      <div className='flex justify-center text-center'>
        <div className='grid grid-rows md:grid-cols-2 lg:grid-cols-3 w-10/12 md:w-8/12 gap-4 mt-10'>
          {servicesData.map((service) => {
            return (
              <div className='text-center w-full' key={service.id}>
                <Service
                  title={service.title}
                  body={
                    service.body.length > 200
                      ? `${service.body.substring(0, 148)}  ....`
                      : service.body
                  }
                  link={service.link}
                  linkTitle={service.linkTitle}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
