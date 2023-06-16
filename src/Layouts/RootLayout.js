import React from "react";
import Header from "../components/Hero";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import ScrollToTop from "../components/Common/ScrollToTop";

const RootLayout = () => {
  const location = useLocation();
  return (
    <div>
      {!location.pathname.match("/services/portfolio") && <Header />}
      <main>
        <Outlet />
      </main>
      <ScrollToTop />
      {!location.pathname.match("/services/portfolio") && <Footer />}
    </div>
  );
};

export default RootLayout;
