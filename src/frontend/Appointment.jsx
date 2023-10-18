import React from "react";
import BreadCrump from "../components/front/BreadCrump";
import { AppointmentCard } from "../components";
import { BiLoader, BiUnlink } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";

const Appointment = () => {
  const newAppointments = [
    {
      id: 0,
      title: "Online Zoom",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
      time: "08:00pm - 09:00pm (GMT)",
      date: "01 Nov",
    },
    {
      id: 1,
      title: "Online Zoom",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
      time: "08:00pm - 09:00pm (GMT)",
      date: "15 Dec",
    },
  ];
  const veryAppointments = [
    {
      id: 0,
      title: "Online Zoom",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
      time: "08:00pm - 09:00pm (GMT)",
      date: "01 Nov",
    },
    {
      id: 1,
      title: "Online Zoom",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
      time: "08:00pm - 09:00pm (GMT)",
      date: "21 oct",
    },
    {
      id: 2,
      title: "Online Zoom",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
      time: "08:00pm - 09:00pm (GMT)",
      date: "28 oct",
    },
  ];
  const dueAppointments = [
    {
      id: 0,
      title: "Online Zoom",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
      time: "08:00pm - 09:00pm (GMT)",
      date: "01 Jun",
    },
    {
      id: 1,
      title: "Online Zoom",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
      time: "08:00pm - 09:00pm (GMT)",
      date: "15 Sep",
    },
    {
      id: 2,
      title: "Online Zoom",
      description:
        "Go to this step by step guideline process on how to certify for your weekly benefits:",
      time: "08:00pm - 09:00pm (GMT)",
      date: "10 Oct",
    },
  ];
  return (
    <div className='text-center items-center dark:bg-gray-900 dark:text-slate-100'>
      {/* bread crupm */}
      <BreadCrump title='Your Appointments' />
      {/* register btn */}
      <div className='flex justify-center text-center mt-10 dark:bg-slate-900'>
        <div className='text-center w-full'>
          <div className='flex flex-col justify-between items-center text-center'>
            {/* form */}
            <div className='md:flex justify-center items-center w-full md:w-10/12 gap-8 mb-16 m-4'>
              <div className='flex flex-col'>
                <div className='border-b-2 border-primary text-start mx-6 md:m-0'>
                  <h1 className='flex font-poppins font-bold text-3xl text-slate-800 dark:text-gray-200 mb-4 items-center'>
                    New
                    <span className='hidden md:flex ml-3'> Appointments</span>
                    <span class='bg-primary text-white  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ml-16 borde'>
                      waiting
                      <BiLoader size={20} className='text-white ml-2' />
                    </span>
                  </h1>
                </div>
                {newAppointments.map((appointment) => {
                  return (
                    <AppointmentCard
                      key={appointment.id}
                      title={appointment.title}
                      description={appointment.description}
                      time={appointment.time}
                      date={appointment.date}
                    />
                  );
                })}
              </div>
              <div className='flex flex-col'>
                <div className='border-b-2 border-primary text-start mx-6 md:m-0'>
                  <h1 className='flex font-poppins font-bold text-3xl text-slate-800 dark:text-gray-200 mb-4'>
                    Verified{" "}
                    <span className='hidden md:flex ml-3'> Appointments</span>
                    <span class='bg-green-600 text-white  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ml-16 borde'>
                      Verified
                      <AiFillCheckCircle
                        size={20}
                        className='text-white ml-2'
                      />
                    </span>
                  </h1>
                </div>
                {veryAppointments.map((appointment) => {
                  return (
                    <AppointmentCard
                      key={appointment.id}
                      title={appointment.title}
                      description={appointment.description}
                      time={appointment.time}
                      date={appointment.date}
                    />
                  );
                })}
              </div>
              <div className='flex flex-col'>
                <div className='border-b-2 border-primary text-start mx-6 md:m-0'>
                  <h1 className='flex font-poppins font-bold text-3xl text-slate-800 dark:text-gray-200 mb-4'>
                    Due{" "}
                    <span className='hidden md:flex ml-3'> Appointments</span>
                    <span class='bg-rose-600 text-white  text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded ml-16 borde'>
                      Due/attended
                      <BiUnlink size={20} className='text-white ml-2' />
                    </span>
                  </h1>
                </div>
                {dueAppointments.map((appointment) => {
                  return (
                    <AppointmentCard
                      key={appointment.id}
                      title={appointment.title}
                      description={appointment.description}
                      time={appointment.time}
                      date={appointment.date}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
