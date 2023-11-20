import React from "react";
import BreadCrump from "../../components/front/BreadCrump";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { ButtonSubmit, InputText } from "../../components";

const Login = () => {
  return (
    <div className='lg:flex'>
      <div className='flex justify-center items-center text-center mt-10 lg:mt-0 lg:w-6/12 dark:bg-slate-900'>
        <div className='text-center w-full'>
          <h1 className='font-poppins font-bold text-3xl text-slate-800 dark:text-gray-200'>
            Sign in to your Account
          </h1>
          <div className='flex flex-col justify-between items-center text-center'>
            <div className='md:flex justify-center items-center my-6'>
              <Link
                to=''
                className='text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-4 mb-2'
              >
                <FcGoogle size={20} className='mr-6' /> Sign In with Google
              </Link>
              <br className='md:hidden' />
              <span className='md:hidden font-bold my-3'>OR</span>
              <br className='md:hidden' />
              <Link
                to='#'
                className='text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2'
              >
                <FaFacebookF size={20} className='mr-6 text-sky-700' /> Sign In
                with Facebook
              </Link>
            </div>
            <div className='hidden md:flex justify-center -mt-8 items center'>
              <span className='text-white dark:text-gray-900 dark:border-slate-300 border-b-2 border-slate-600'>
                .......................................
              </span>
              <span className='mx-4 font-bold mt-2'>OR</span>
              <span className='text-white dark:text-gray-900 dark:border-slate-300 border-b-2 border-slate-600'>
                ..............................................
              </span>
            </div>
            {/* form */}
            <div className='flex flex-col justify-center w-full md:w-8/12 mb-16'>
              <form action=''>
                <div className='text-start m-3'>
                  <label className='block text-sm font-medium text-gray-700 dark:text-gray-400'>
                    Email
                  </label>
                  <div className='mt-1'>
                    <InputText
                      type='email'
                      name='email'
                      id='email'
                      autoComplete='email'
                      required
                    />
                  </div>
                </div>
                <div className='text-start m-3'>
                  <label className='block text-sm font-medium text-gray-700 dark:text-gray-400'>
                    Password
                  </label>
                  <div className='mt-1'>
                    <InputText
                      type='password'
                      name='password'
                      id='password'
                      autoComplete='password'
                      required
                    />
                  </div>
                </div>
                <div className='lg:flex items-center mt-6'>
                  <div className='text-center m-3'>
                    <ButtonSubmit title='Sign in ' />
                  </div>
                  <div className='text-center m-3'>
                    <Link
                      to='/register'
                      className='text-1xl lg:text-sm font-medium text-gray-900 dark:text-gray-300'
                    >
                      Not Registered?{" "}
                      <span className='underline'>Register</span>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='hidden lg:block w-6/12 bg-primary h-screen'></div>
    </div>
  );
};

export default Login;
