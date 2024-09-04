import React, { useEffect } from "react";
import na from "../assets/na.png";
import { Link } from "react-router-dom";
import programs from "../programs";
import Footer from "../components/Footer";
import x from "../assets/modalx.png";
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock-upgrade";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../modal";

const Landing = () => {
  const modalProgram = programs.find((prog) => prog.id === 1);
  const { modalState } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    const body = document.querySelector("body");

    const timer = setTimeout(() => {
      if (!modalState) {
        dispatch(setModal());
      }
    }, 5000);

    if (modalState) {
      disableBodyScroll(body); 
    } else {
      clearAllBodyScrollLocks(); 
    }

    return () => {
      clearTimeout(timer);
      clearAllBodyScrollLocks(); 
    };
  }, [modalState, dispatch]);

  return (
    <>
      {modalState && modalProgram ? (
        <div className="modal">
          <div className="modal-box">
            <div className="modal-head">
              <button onClick={() => dispatch(setModal())}>
                <img src={x} alt="" />
              </button>
            </div>
            <Link
              to={`/program/${modalProgram.id}`}
              className="modal-link"
              onClick={() => dispatch(setModal())}
            >
              <img src={modalProgram.img} alt="" />
            </Link>
          </div>
        </div>
      ) : null}
      
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
        <div className="planning-text">
          <h4>
            Coming with public transport? <br /> We've got you!
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
          {programs.map((program) => (
            <div className="program-card" key={program.id}>
              <h4>{program.date}</h4>
              <img src={program.imgSquare} alt="" />
              <h5>{program.name}</h5>
              <Link to={`/program/${program.id}`}>
                <button className="view-program">View Program</button>
              </Link>
            </div>
          ))}
        </div>
        <div className="audio">
          <h1>Share your testimony</h1>
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
