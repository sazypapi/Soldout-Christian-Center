import React from "react";

const PageComps = ({page, text, text2}) => {
  return (
    <>
      <div className="page-comps-container">
        <div className="page-comps">
          <h1>{page}</h1>
          <h4>{text}</h4>
        </div>
        <div className="audio">
          <h1>Send us an email </h1>

          <h3>{text2}</h3>
          <a href="mailto:soldoutchristiancenter2015@gmail.com">
            <button>Send us an email</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default PageComps;
