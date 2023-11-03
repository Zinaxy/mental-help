import React from "react";
import { CTA, Hero, IntroService, Loader } from "../components";
import InfoGuide from "../components/front/InfoGuide";
import Testmonial from "../components/front/Testmonial";

const Home = () => {
  return (
    <section
      id='home-page'
      className='text-center items-center dark:bg-gray-900 dark:text-slate-100'
    >
      {/* hero section */}
      <Hero />
      {/* introduction notes */}
      <div className=' m-6'>
        <IntroService />
      </div>
      {/* information and guidence */}
      <div className=' bg-gray-100 dark:bg-slate-900'>
        <InfoGuide />
      </div>
      {/* Testmonials */}
      {/* <div className="">
          <Testmonial />
         </div> */}
      {/* call to action */}
      <div className=''>
        <CTA />
      </div>
    </section>
  );
};

export default Home;
