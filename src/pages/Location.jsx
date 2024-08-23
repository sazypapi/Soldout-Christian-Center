import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Location = () => {
  return (
    <>
      <div className="location-container">
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
        <Footer />
      </div>
    </>
  );
};

export default Location;
