import React from "react";
import PageComps from "../components/PageComps";
import Footer from "../components/Footer";

const Thanksgiving = () => {
  return (
    <>
      <div className="thanksgiving-container">
        <PageComps
          page="Thanksgiving"
          text2="send us an email to book a thanksgiving date"
          text="Planning to give thanks for a special milestone? Reserve your date for a Thanksgiving event by sending us an email. Whether it’s for a birthday, anniversary, or any significant moment, we’re here to help you celebrate and give glory to God."
        />
      </div>
      <Footer />
    </>
  );
};

export default Thanksgiving;
