import React from "react";
import { Link, useParams } from "react-router-dom";
import programs from "../programs";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock-upgrade";
const Events = () => {
  const params = useParams();
  const currentProgram = params.id;
  console.log(currentProgram);
  const findProgram = programs.find((program) => program.id == currentProgram);
  console.log(findProgram);
  const { modalState } = useSelector((store) => store.modal);
  if (modalState) {
    disableBodyScroll(document.getElementsByTagName("body"));
  } else {
    enableBodyScroll(document.getElementsByTagName("body"));
  }
  console.log(modalState);

  return (
    <>
      <div className="event-info">
        {findProgram ? (
          <>
            <div className="event-details" key={findProgram.id}>
              <div className="event-img">
                <img src={findProgram.imgSquare} alt="" />
                <h3>{findProgram.name}</h3>
              </div>
              <div className="event-short-text">
                <section>
                  <p>date</p>
                  <h4>{findProgram.date}</h4>
                </section>
                <section className="pst-right">
                  <p>location</p>
                  <h4>{findProgram.location}</h4>
                </section>
              </div>
            </div>
            <div className="event-long-text">
              <p>program description</p>
              <h4>{findProgram.description}</h4>
            </div>
          </>
        ) : (
          <h1>Program is not available</h1>
        )}
        <h5>
          <Link to="/contact" className="contact-link">
            Contact
          </Link>{" "}
          us to learn more
        </h5>
      </div>
      <Footer />
    </>
  );
};

export default Events;
