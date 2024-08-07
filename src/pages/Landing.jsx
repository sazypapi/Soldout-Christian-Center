import React from "react";

import na from "../assets/na.png";
import { Link } from "react-router-dom";
import programs from "../programs";
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
      <div className="audio">
        <h1>LISTEN TO OUR AUDIO PODCASTS</h1>

        <h3>This service isn't available currently</h3>
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
                <Link>
                  <button className="view-program">View Program</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Landing;
