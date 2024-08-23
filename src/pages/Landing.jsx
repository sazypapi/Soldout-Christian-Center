import React from "react";

import na from "../assets/na.png";
import { Link } from "react-router-dom";
import programs from "../programs";
import Footer from "../components/Footer";
import pastorsInfo from "../pastors";
const Landing = () => {
  return (
    <>
      <div className="welcome-container">
        <div className="welcome">
          <h1>WELCOME TO SOLDOUT CHRISTIAN CENTER</h1>
        </div>
        <div className="welcome-text">
          <h4>
            Soldout Christian Center is a Bible-based church located in
            Satellite Town, Lagos. Founded in May 2018, we are dedicated to
            preaching and living by the Word of God and nothing but the Word.
            The responsibility of discipling our congregation has been entrusted
            by the Lord to Pastors Lawrence and Grace Nnatu.
          </h4>
          <Link to="/about">
            <button className="welcome-btn">GET TO KNOW US</button>
          </Link>
        </div>
      </div>
      <div className="services">
        <h1>OUR SERVICES</h1>
        <div className="service-time">
          <div className="service-cell">
            <h1 id="title">Tuesday</h1>
            <h1>Healing School - 5:30 PM</h1>
          </div>
          <div className="service-cell">
            <h1 id="title">Thursday</h1>
            <h1>Faith Clinic - 8:00 AM</h1>
          </div>
          <div className="service-cell">
            <h1 id="title">Sunday</h1>
            <h1>Sunday Service - 8:30 AM</h1>
          </div>
        </div>
      </div>
      <div className="planning-visit">
        <h1>Planning to attend?</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.5901758553!2d3.2676453999999997!3d6.4466313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b888592d775f7%3A0x48d0fa6c2011ab92!2sHorn%20Of%20Salvation%20Ministries%20International%20Aka%20Dominion%20Assembly!5e0!3m2!1sen!2sng!4v1724403899345!5m2!1sen!2sng"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="disclaimer">
          <p>
            <strong>Disclaimer:</strong> The map location is correct, but the
            name shown is outdated. We are in the process of updating it to
            reflect our current name.
          </p>
        </div>

        <div className="planning-text">
          <h4>
            Coming with public transport? <br /> We've got you !
          </h4>
          <p>
            Tell the driver of whatever mode of transportation you're using to
            drop you at 16 Bridge. When you get down from the bridge, go right,
            and after a few kilometers, you'll find us!
          </p>

          <span>
            If you need further assistance, feel free to{" "}
            <Link to="/contact" className="planning-link">
              Contact us
            </Link>
          </span>
        </div>
      </div>

      <div className="upcoming-parent">
        <h1>UPCOMING PROGRAMS</h1>
        <div className="upcoming-programs">
          {programs.map((programs) => {
            return (
              <div className="program-card" key={programs.id}>
                <h4>{programs.date}</h4>
                <img src={programs.imgSquare} alt="" />
                <h5>{programs.name}</h5>
                <Link to={`/program/${programs.id}`}>
                  <button className="view-program">View Program</button>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="audio">
          <h1>Share you testimony </h1>

          <h3>Click the button below to email your testimony to us!</h3>
          <a href="mailto:soldoutchristiancenter2015@gmail.com">
            <button>Share your testimony</button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
