import React from "react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
// import "./App.css";
import AllRoutes from "./AllRoutes";
import TopHeader from "./Components/Layouts/TopHeader";
import Header from "./Components/Layouts/Header";
import Footer from "./Components/Layouts/Footer";
import BottomFooter from "./Components/Layouts/BottomFooter";

function App() {
  return (
    <BrowserRouter>
      <TopHeader />
      <Header />
      <AllRoutes />
      <Footer />
      <BottomFooter />
    </BrowserRouter>
  );
}

export default App;
