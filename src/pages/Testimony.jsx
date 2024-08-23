import React from "react";
import PageComps from "../components/PageComps";
import Footer from "../components/Footer";
const Testimony = () => {
  return (
    <>
      <div className="testimony-container">
        <PageComps
          page="Testimony"
          text="Have a powerful story of how God has moved in your life? We’d love to hear it! Share your testimony by sending it to us via email. Your story can inspire others, strengthen their faith, and bring hope to those who need it most. Together, we can celebrate the incredible work God is doing in our lives"
          text2="click the button below to tell us your testimony!"
        />
      </div>
      <Footer />
    </>
  );
};

export default Testimony;
