import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Faq = () => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [accordionOpen2, setAccordionOpen2] = useState(false);
  const [accordionOpen3, setAccordionOpen3] = useState(false);
  const [accordionOpen4, setAccordionOpen4] = useState(false);
  const [accordionOpen5, setAccordionOpen5] = useState(false);
  const [accordionOpen6, setAccordionOpen6] = useState(false);

  return (
    <>
      <div className="accordion-container">
        <h1>FAQ</h1>
        <div class="accordion">
          <div class="accordion-header">
            <h2> When was Soldout Christian Center Founded?</h2>
            {accordionOpen ? (
              <button
                class="hidebutton"
                onClick={() => setAccordionOpen(!accordionOpen)}
              >
                -
              </button>
            ) : (
              <button
                class="showbutton"
                onClick={() => setAccordionOpen(!accordionOpen)}
              >
                +
              </button>
            )}
          </div>
          {accordionOpen ? (
            <div class="accordion-footer">
              <h3>May 2017</h3>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div class="accordion">
          <div class="accordion-header">
            <h2> What time does Sunday Service start</h2>
            {accordionOpen2 ? (
              <button
                class="hidebutton"
                onClick={() => setAccordionOpen2(!accordionOpen2)}
              >
                -
              </button>
            ) : (
              <button
                class="showbutton"
                onClick={() => setAccordionOpen2(!accordionOpen2)}
              >
                +
              </button>
            )}
          </div>
          {accordionOpen2 ? (
            <div class="accordion-footer">
              <h3>8:30am</h3>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div class="accordion">
          <div class="accordion-header">
            <h2> Do you have any other services?</h2>
            {accordionOpen3 ? (
              <button
                class="hidebutton"
                onClick={() => setAccordionOpen3(!accordionOpen3)}
              >
                -
              </button>
            ) : (
              <button
                class="showbutton"
                onClick={() => setAccordionOpen3(!accordionOpen3)}
              >
                +
              </button>
            )}
          </div>
          {accordionOpen3 ? (
            <div class="accordion-footer">
              <h3>
                Yes!, we have our Tuesday service which holds by 5 : 30pm and
                our Thursday service which holds by 8: 00 am
              </h3>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div class="accordion">
          <div class="accordion-header">
            <h2> Do you have children church?</h2>
            {accordionOpen4 ? (
              <button
                class="hidebutton"
                onClick={() => setAccordionOpen4(!accordionOpen4)}
              >
                -
              </button>
            ) : (
              <button
                class="showbutton"
                onClick={() => setAccordionOpen4(!accordionOpen4)}
              >
                +
              </button>
            )}
          </div>
          {accordionOpen4 ? (
            <div class="accordion-footer">
              <h3>
                We have a functional and wonderful childrens church with amazing
                teachers
              </h3>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div class="accordion">
          <div class="accordion-header">
            <h2> How do i join a team?</h2>
            {accordionOpen5 ? (
              <button
                class="hidebutton"
                onClick={() => setAccordionOpen5(!accordionOpen5)}
              >
                -
              </button>
            ) : (
              <button
                class="showbutton"
                onClick={() => setAccordionOpen5(!accordionOpen5)}
              >
                +
              </button>
            )}
          </div>
          {accordionOpen5 ? (
            <div class="accordion-footer">
              <h3>
                Go to our <Link to="/contact">Contact</Link> page and choose
                your preferred mode of communication to join the team
              </h3>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div class="accordion">
          <div class="accordion-header">
            <h2> Who do i call for birthdays, weddings and other events?</h2>
            {accordionOpen6 ? (
              <button
                class="hidebutton"
                onClick={() => setAccordionOpen6(!accordionOpen6)}
              >
                -
              </button>
            ) : (
              <button
                class="showbutton"
                onClick={() => setAccordionOpen6(!accordionOpen6)}
              >
                +
              </button>
            )}
          </div>
          {accordionOpen6 ? (
            <div class="accordion-footer">
              <h3>
                Go to our <Link to="/contact">Contact</Link> page and choose
                your preferred mode of communication to find out more
              </h3>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
