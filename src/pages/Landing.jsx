import React from "react";
import dedication from "../assets/dedication.jpg";
import services from "../assets/services.png";
import { Link } from "react-router-dom";
import programs from "../programs";
const Landing = () => {
  return (
    <>
      <div className="welcome">
        <h1>WELCOME TO SOLDOUT CHRISTIAN CENTER</h1>
        <h4>
          Soldout Christian Center is a Bible-based church located in Satellite
          Town, Lagos. Founded in May 2018, we are dedicated to preaching and
          living by the Word of God and nothing but the Word. The responsibility
          of discipling our congregation has been entrusted by the Lord to Pastors Lawrence
          and Grace Nnatu.
        </h4>
        <Link to="/about">
          <button className="welcome-btn">GET TO KNOW US</button>
        </Link>
      </div>
      <div className="services">
        <h1>OUR SERVICES</h1>
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Landing;
