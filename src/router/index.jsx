import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../frontend/auth/Register";
import Login from "../frontend/auth/Login";
import Home from "../frontend/Home";
import Appointment from "../frontend/Appointment";
import FAQ from "../frontend/FAQ";
import Services from "../frontend/Services";
import About from "../frontend/About";
import AppointmentCreate from "../frontend/AppointmentCreate";
import Contact from "../frontend/Contact";
import SingleService from "../frontend/SingleService";
import Stories from "../frontend/Stories";

const MyRouter = () => {
  return (
    <Routes>
      {/* auth routes */}
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/appointment' element={<Appointment />} />
      <Route path='/appointment-create' element={<AppointmentCreate />} />
      <Route path='/faq' element={<FAQ />} />
      <Route path='/services' element={<Services />} />
      <Route path='/about-us' element={<About />} />
      <Route path='/contact-us' element={<Contact />} />
      <Route path='/service' element={<SingleService />} />
      <Route path='/stories' element={<Stories />} />
    </Routes>
  );
};

export default MyRouter;
