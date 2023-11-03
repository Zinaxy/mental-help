import React from "react";
import BreadCrump from "../components/front/BreadCrump";
import { ToastAlert } from "../components";

const AppointmentCreate = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    return <ToastAlert />;
  };
  return (
    <section
      id='booking'
      className='text-center items-center dark:bg-gray-900 dark:text-slate-100'
    >
      {/* bread crupm */}
      <BreadCrump title='Make an Appointment' />
      {/* register btn */}
      <div className='flex justify-center text-center mt-10 dark:bg-slate-900'>
        <div className='text-center w-full'>
          <h1 className='font-poppins font-bold text-3xl text-slate-800 dark:text-gray-200'>
            Make an Appointment
          </h1>
          <div className='flex flex-col justify-between items-center text-center'>
            {/* form */}
            <div className='flex flex-col justify-center w-full md:w-4/12 mb-16'>
              <form onSubmit={handleSubmit}>
                <div className='text-start m-3'>
                  <label className='block text-sm font-medium text-gray-700 dark:text-gray-400'>
                    Phone Number
                  </label>
                  <div className='mt-1'>
                    <input
                      type='tel'
                      name='phineNumber'
                      id='phineNumber'
                      autoComplete='phone-number'
                      required
                      className='block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
                    />
                  </div>
                </div>
                <div className='text-start m-3'>
                  <label className='block text-sm font-medium text-gray-700 dark:text-gray-400'>
                    Service
                  </label>
                  <div className='mt-1'>
                    <select
                      name='service'
                      id='service'
                      className='block w-full px-3 py-2 bg-transparent dark:bg-gray-900 dark:text-gray-300 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
                    >
                      <option
                        value=''
                        disabled
                        defaultValue={"CHOOSE YOUR SERVICE"}
                      >
                        CHOOSE YOUR SERVICE
                      </option>
                      <option value='Consultation'>Consultation</option>
                      <option value='Therapy'>Therapy</option>
                    </select>
                  </div>
                </div>
                {/*  <div className='text-start m-3'>
                  <div className='lg:flex space-x-4'>
                    <div className='w-full lg:w-6/12'>
                      <label className='block text-sm font-medium text-gray-700 dark:text-gray-400'>
                        Date
                      </label>
                      <div className='mt-1'>
                        <input
                          type='date'
                          name='date'
                          id='date'
                          required
                          className='block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
                        />
                      </div>
                    </div>
                    <div className='flex gap-4 w-full lg:w-6/12 mt-3'>
                      <div className='w-full'>
                        <label className='block text-sm font-medium text-gray-700 dark:text-gray-400'>
                          Time From
                        </label>
                        <div className='mt-1'>
                          <input
                            type='time'
                            name='time'
                            id='time'
                            required
                            className='block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
                          />
                        </div>
                      </div>
                      <div className='w-full'>
                        <label className='block text-sm font-medium text-gray-700 dark:text-gray-400'>
                          Time To
                        </label>
                        <div className='mt-1'>
                          <input
                            type='time'
                            name='time'
                            id='time'
                            required
                            className='block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className='text-start m-3'>
                  <label className='block text-sm font-medium text-gray-700 dark:text-gray-400'>
                    Description
                  </label>
                  <div className='mt-1'>
                    <textarea
                      name='description'
                      id='description'
                      rows='4'
                      autoComplete='description'
                      required
                      className='block w-full px-3 py-2 bg-transparent border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm'
                    ></textarea>
                  </div>
                </div>
                <div className='flex items-center m-1'>
                  <div className='text-center m-3'>
                    <button
                      type='submit'
                      className='inline-flex items-center px-4 py-2 bg-primary border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-primary active:bg-primary focus:outline-none focus:border-primary focus:ring ring-primary disabled:opacity-25 transition ease-in-out duration-150'
                    >
                      Submit Now
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCreate;
