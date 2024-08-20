import React from "react";
import programs from "../programs";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Programs = () => {
  return (
    <>
      <div className="program-container">
        <div className="upcoming-programs">
          {programs.map((program) => {
            return (
              <div className="program-card" key={program.id}>
                <h4>{program.date}</h4>
                <img src={program.imgSquare} alt="" />
                <h5>{program.name}</h5>
                <Link to={`/program/${program.id}`}>
                  <button className="view-program">View Program</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Programs;
