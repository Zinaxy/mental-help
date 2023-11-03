import React, { useState } from "react";
import CountUp from "react-countup";
import { BiSmile, BiDrink, BiUserPlus, BiQuestionMark } from "react-icons/bi";

const CTA = () => {
  const [cta, setCta] = useState(false);
  const handleCta = (e) => {
    e.preventDefault();
    setCta(true);
  };
  return (
    <section
      onMouseEnter={handleCta}
      id='call-to-action'
      className="w-full bg-[url('/src/assets/bg1.jpg')] snap-mandatory snap-y bg-no-repeat bg-cover grid grid-cols-2 md:flex justify-center items-center gap-x-10"
    >
      <div className='items-center text-center m-6'>
        <BiSmile size={40} className='text-white mx-12' />
        <h2 className='text-primary font-bold font-poppins text-6xl my-3'>
          {cta ? <CountUp end={456} /> : "0"}
        </h2>
        <h2 className='text-white font-bold font-poppins text-lg my-3 uppercase'>
          Happy Clients
        </h2>
      </div>
      <div className='items-center text-center m-6'>
        <BiDrink size={40} className='text-white mx-12' />
        <h2 className='text-primary font-bold font-poppins text-6xl my-3'>
          {cta ? <CountUp end={206} /> : "0"}
        </h2>
        <h2 className='text-white font-bold font-poppins text-lg my-3 uppercase'>
          Success Story
        </h2>
      </div>
      <div className='items-center text-center m-6'>
        <BiUserPlus size={40} className='text-white mx-16' />
        <h2 className='text-primary font-bold font-poppins text-6xl my-3'>
          {cta ? <CountUp end={100} /> : "0"}
        </h2>
        <h2 className='text-white font-bold font-poppins text-lg my-3 uppercase'>
          Our Councellors
        </h2>
      </div>
      <div className='items-center text-center m-6'>
        <BiQuestionMark size={40} className='text-white mx-20' />
        <h2 className='text-primary font-bold font-poppins text-6xl my-3'>
          {cta ? <CountUp end={234} /> : "0"}
        </h2>
        <h2 className='text-white font-bold font-poppins text-lg my-3 uppercase'>
          Questions Answered
        </h2>
      </div>
    </section>
  );
};

export default CTA;
