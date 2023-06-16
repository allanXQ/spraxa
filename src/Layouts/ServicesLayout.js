import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Services from "../pages/Services";

const ServicesLayout = () => {
  const location = useLocation();
  return (
    <>
      {(location.pathname === "/services" ||
        location.pathname === "/services/") && <Services />}
      <Outlet />
    </>
  );
};

export default ServicesLayout;
