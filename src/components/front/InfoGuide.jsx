import React from 'react'
import { Link } from 'react-router-dom'

const InfoGuide = () => {
  return (
    <div className="flex justify-center  mt-10">
      <div className="xl:max-w-[1280px] w-full my-10">
            <h1 className="text-4xl mt-2 font-bold font-poppins text-slate-700 dark:text-white m-4">Information & Guidence</h1>
             <span className="text-gray-100 dark:text-slate-900 border-b-4 border-primary">.................................</span>
            <div className="md:flex justify-center items-center m-10 gap-6">
                <div className="mb-4 md:mb-0 border-2 border-primary rounded-t-[40px] rounded-bl-[40px] p-7 w-full">
                    <h1 className="text-2xl font-bold capitalize text-slate-800 dark:text-slate-200">Factors that affect mental Healthy</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 m-6 ">Learn more about the different biological, psychological, and social factors that can impact your mental health.</p>
                     <Link to='#' className='rounded-full bg-transparent text-primary font-bold capitalize px-5 py-2.5 border-2 border-primary hover:bg-primary hover:text-white' >learn  more</Link>
                </div>
                <div className="mb-4 md:mb-0 border-2 border-primary rounded-t-[40px] rounded-bl-[40px] p-7 w-full">
                    <h1 className="text-2xl font-bold capitalize text-slate-800 dark:text-slate-200">Getting help for your mental health</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 m-6 ">Find out how you can help yourself, what external support is available, and what to do in a crisis.</p>
                     <Link to='#' className='rounded-full bg-transparent text-primary font-bold capitalize px-5 py-2.5 border-2 border-primary hover:bg-primary hover:text-white' >learn  more</Link>
                </div>
                <div className="mb-4 md:mb-0 border-2 border-primary rounded-t-[40px] rounded-bl-[40px] p-7 w-full">
                    <h1 className="text-2xl font-bold capitalize text-slate-800 dark:text-slate-200">Mental health within different communities</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-400 m-6 ">Discover mental health information, tips, and advice that's relevant for different groups of people.</p>
                    <Link to='#' className='rounded-full bg-transparent text-primary font-bold capitalize px-5 py-2.5 border-2 border-primary hover:bg-primary hover:text-white' >learn  more</Link>
                </div>
            </div>
      </div>
    </div>
  )
}

export default InfoGuide