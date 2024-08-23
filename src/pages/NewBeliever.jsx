import React from "react";
import PageComps from "../components/PageComps";
import Footer from "../components/Footer";

const NewBeliever = () => {
  return (
    <>
      <div className="newbeliever">
        <PageComps
          text="Are you new in your walk with Christ? We'd love to hear how God is transforming your life! Share your story with us by sending your testimony via email. Your journey of faith can encourage others who are just beginning, reminding them of the incredible hope and new life found in Christ. We'd also like to keep in contact with you to help you on your journey!"
          page="new believer?"
          text2="Send us an email telling us about your salvation and prayer requests if you have any"
        />
      </div>
      <Footer />
    </>
  );
};

export default NewBeliever;
