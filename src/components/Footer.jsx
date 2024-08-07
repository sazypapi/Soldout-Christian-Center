import React from "react";
import logo from "../assets/logo.png";
import ig from "../assets/ig.png";
import phone from "../assets/phone.png";
import email from "../assets/email.png";
import whatsapp from "../assets/whatsapp.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer-header">
        <img src={logo} alt="" />
        <h1>SOLDOUT CHRISTIAN CENTER</h1>
      </div>
      <div className="quick-links">
        <h3>Quick Links</h3>
        <div>
          <div className="sec1">
            <Link className="seclink">Home</Link>
            <Link className="seclink">About</Link>
            <Link className="seclink">Contact us</Link>
            <Link className="seclink">Giving</Link>
            <Link className="seclink">Events</Link>
          </div>
          <div className="sec2">
            <Link className="seclink">Location</Link>
            <Link className="seclink">FAQ</Link>
            <Link className="seclink">Testimony</Link>
            <Link className="seclink">Thanksgiving</Link>
          </div>
        </div>
      </div>
      <div className="footer-footer">
        <h5>Website and graphics by Zedek's Media</h5>
        <div>
          <a href="https://www.instagram.com/zedeks.media?igsh=aHZlcXVsMnY1bzV4">
            <img src={ig} alt="" />
          </a>
          <a href="mailto:zedeksmedia24@gmail.com">
            <img src={email} alt="" />
          </a>
          <a href="tel:08089033810">
            <img src={phone} alt="" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=2348089033810&text=I%20want%20to%20make%20an%20enquiry%0A">
            <img src={whatsapp} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
