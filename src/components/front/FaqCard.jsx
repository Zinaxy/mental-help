import React from "react";
("use client");

import { Accordion } from "flowbite-react";

const FaqCard = (props) => {
  return (
    <Accordion collapseAll className='shadow dark:bg-gray-800'>
      <Accordion.Panel>
        <Accordion.Title>
          {" "}
          <span className='font-bold mr-2 px-1.5 py-0.5 rounded-full border-2 border-primary'>
            {props.id}
          </span>
          {props.title}
        </Accordion.Title>
        <Accordion.Content>
          <p className='mb-2 text-gray-500 dark:text-gray-400 text-start'>
            {props.textbody}
          </p>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
};

export default FaqCard;
