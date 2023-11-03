import React from "react";
import { Link } from "react-router-dom";

const ContactIcon = (props) => {
  return (
    <section
      id='contact-card'
      className='flex flex-col justify-center text-center items-center rounded-full'
    >
      <div className='text-center items-center bg-primary border-2 border-primary rounded-full p-6 shadow-lg hover:p-8'>
        {" "}
        <Link to={props.socialLink}>{props.icon}</Link>
      </div>
      <div className='w-full'>
        <Link to={props.socialLink}>
          <h1 className='font-bold text-baseline text-gray-700 dark:text-gray-300'>
            {props.IconName}
          </h1>
        </Link>
      </div>
    </section>
  );
};

export default ContactIcon;
