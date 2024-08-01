import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import menuicon from "../assets/menu.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <nav>
        <NavLink to="/" className="nav-image">
          <img src={logo} alt="" />
        </NavLink>
        <div className="links">
          <NavLink to="/about" className="navlink">
            About
          </NavLink>
          <NavLink to="/contact" className="navlink">
            Contact us
          </NavLink>
          <NavLink to="/events" className="navlink">
            Programs
          </NavLink>
          <NavLink to="./giving" className="navlink">
            Giving
          </NavLink>
        </div>
        <button
          onClick={() => {
            alert("I have been clicked");
            setMenu(!menu);
          }}
        >
          <img src={menuicon} alt="" />
        </button>
      </nav>

      <section className={menu ? "big active" : "big"}>
        <div>
          <NavLink to="/about" className="phonelinks">
            About
          </NavLink>
          <NavLink to="/contact" className="phonelinks">
            Contact us
          </NavLink>
          <NavLink to="/events" className="phonelinks">
            Programs
          </NavLink>
          <NavLink to="/giving" className="phonelinks">
            Giving
          </NavLink>
        </div>
        <p>Zedek's Media 2024 &#8482;</p>
      </section>
    </>
  );
};

export default Navbar;
