import React from "react";
import phone from "../assets/phone.png";
import instagram from "../assets/ig.png";
import email from "../assets/email.png";
import Footer from "../components/Footer";
import facebookc from "../assets/facebookc.png";
const ContactUs = () => {
  return (
    <>
      <div className="contact-us">
        <h1>Communication with you is our priority</h1>
        <h4>
          Effective communication with our members at Soldout Christian Center
          is essential because it fosters a strong sense of community and
          spiritual growth. Through open and consistent communication, we ensure
          that everyone is informed, encouraged, and engaged in our collective
          journey of faith. It allows us to share God’s Word, address individual
          needs, and strengthen our bond as a family in Christ. This connection
          helps us grow together in love, unity, and purpose, fulfilling our
          mission to impact lives and bring people closer to God.
        </h4>
      </div>
      <h3 className="contact-h3">Below are ways you can contact us!</h3>
      <div className="ccc">
        <a href="tel:08083975406">
          <div className="contact-card">
            <img src={phone} alt="" />
            <h4>08083975406</h4>
          </div>
        </a>

        <a href="mailto:soldoutchristiancenter2015@gmail.com">
          <div className="contact-card">
            <img src={email} alt="" />
            <h4>soldoutchristiancenter2015@gmail.com</h4>
          </div>
        </a>
        <a href="https://www.facebook.com/profile.php?id=61564928609646&mibextid=ZbWKwL">
          <div className="contact-card">
            <img src={facebookc} alt="" />
            <h4>Soldout Christian Center</h4>
          </div>
        </a>

        <a href="https://www.instagram.com/soldoutchristiancenter?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
          <div className="contact-card">
            <img src={instagram} alt="" />
            <h4>soldoutchristiancenter</h4>
          </div>
        </a>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
