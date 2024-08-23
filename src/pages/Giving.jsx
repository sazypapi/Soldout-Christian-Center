import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "../components/Footer";

const Giving = () => {
  const copyText = () => {
    const text = document.getElementById("text-to-copy").innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        toast.success("Text copied to clipboard!");
      })
      .catch((err) => {
        toast.error("Failed to copy text.");
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <>
      <div className="giving">
        <div className="giving-head">
          <h1>Why do we give?</h1>
        </div>
        <p>
          At Soldout Christian Center, we view giving as a vital act of worship
          and a reflection of God's boundless generosity in our lives. We
          encourage you to give not out of obligation, but with a joyful heart,
          knowing that every gift, no matter the size, helps us further God's
          work within our community and beyond. <br /> <br /> As the Bible
          teaches us, "Each of you should give what you have decided in your
          heart to give, not reluctantly or under compulsion, for God loves a
          cheerful giver." (2 Corinthians 9:7) <br /> Your support empowers us
          to serve and uplift others, making a difference in our shared mission.
        </p>
        <div className="account-number">
          <h1>Want to give?</h1>
          <h4>
            You can give by sending the amount you intend to give to the account
            number below
          </h4>
          <h3>
            Grace Nnatu <br /> First bank <br /> 2020146056
          </h3>
          <p id="text-to-copy">2020146056</p>
          <button onClick={copyText}>Copy account number</button>
          <ToastContainer />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Giving;
