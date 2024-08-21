import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import menuicon from "../assets/menu.png";
import x from "../assets/x.png";

import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock-upgrade";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav>
        <NavLink
          to="/"
          className="nav-image"
          onClick={() => {
            setMenu(false);
            enableBodyScroll(document.getElementsByTagName("body"));
          }}
        >
          <img src={logo} alt="" />
        </NavLink>
        <div className="links">
          <NavLink to="/about" className="navlink">
            About
          </NavLink>
          <NavLink to="/contact" className="navlink">
            Contact us
          </NavLink>
          <NavLink to="/program" className="navlink">
            Programs
          </NavLink>
          <NavLink to="/giving" className="navlink">
            Giving
          </NavLink>
        </div>
        {!menu ? (
          <button
            onClick={() => {
              setMenu(!menu);
              disableBodyScroll(document.getElementsByTagName("body"));
            }}
          >
            <img src={menuicon} alt="" />
          </button>
        ) : (
          <button
            onClick={() => {
              setMenu(!menu);
              enableBodyScroll(document.getElementsByTagName("body"));
            }}
          >
            <img src={x} alt="" />
          </button>
        )}
      </nav>
      <section className={menu ? "big active" : "big"}>
        <div>
          <NavLink
            to="/about"
            className="phonelinks"
            onClick={() => {
              setMenu(!menu);
              enableBodyScroll(document.getElementsByTagName("body"));
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="phonelinks"
            onClick={() => {
              setMenu(!menu);
              enableBodyScroll(document.getElementsByTagName("body"));
            }}
          >
            Contact us
          </NavLink>
          <NavLink
            to="/program"
            className="phonelinks"
            onClick={() => {
              setMenu(!menu);
              enableBodyScroll(document.getElementsByTagName("body"));
            }}
          >
            Programs
          </NavLink>
          <NavLink
            to="/giving"
            className="phonelinks"
            onClick={() => {
              setMenu(!menu);
              enableBodyScroll(document.getElementsByTagName("body"));
            }}
          >
            Giving
          </NavLink>
        </div>
        <p>Zedek's Media 2024 &#8482;</p>
      </section>
    </>
  );
};

export default Navbar;
