import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import About from "./Components/Pages/About/About";
import Service from "./Components/Pages/Services/Service";
import ServiceDetails from "./Components/Pages/Services/ServiceDetails";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
