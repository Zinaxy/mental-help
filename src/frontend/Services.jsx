import React from "react";
import BreadCrump from "../components/front/BreadCrump";
import { Service } from "../components";

const Services = () => {
  const servicesData = [
    {
      title: "Consultation",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .",
      link: "#",
      linkTitle: "Read More",
    },
    {
      title: "ANXIETY COUNSELLING",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .",
      link: "#",
      linkTitle: "Read More",
    },
    {
      title: "PERSONAL DEVELOPMENT",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .",
      link: "#",
      linkTitle: "Read More",
    },
    {
      title: "SEXUAL COUNSELLING",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .",
      link: "#",
      linkTitle: "Read More",
    },
    {
      title: "RELATIONSHIP PROBLEMS",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .",
      link: "#",
      linkTitle: "Read More",
    },
    {
      title: "DEPRESSION TREATMENT",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate .",
      link: "#",
      linkTitle: "Read More",
    },
  ];
  return (
    <div className='text-center items-center dark:bg-gray-900 dark:text-slate-100 my-10'>
      {/* bread crupm */}
      <BreadCrump title='Our Services' />
      {/* register btn */}
      <div className='flex justify-center text-center'>
        <div className='grid grid-rows md:grid-cols-3 w-10/12 md:w-8/12 gap-4 mt-10'>
          {servicesData.map((service) => {
            return (
              <div className='text-center w-full'>
                <Service
                  title={service.title}
                  body={
                    service.body.length > 200
                      ? `${service.body.substring(0, 148)}....`
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
    </div>
  );
};

export default Services;
