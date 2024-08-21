import React, { useRef, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ScrollToTop from "../ScrollToTop";
const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Outlet />
    </>
  );
};

export default HomeLayout;
