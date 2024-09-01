import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function RootElementForApp() {
  return (
    <>
      <Navbar />
      <Outlet />
      
    </>
  );
}

export default RootElementForApp;
