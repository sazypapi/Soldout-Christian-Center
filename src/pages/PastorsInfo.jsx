import React from "react";
import { useParams } from "react-router-dom";
import pastorsInfo from "../pastors";
import facebook from "../assets/facebook.png";
import ig from "../assets/insta.png";
import Footer from "../components/Footer";

const PastorsInfo = () => {
  const params = useParams();
  const currentPastor = params.id;
  console.log(currentPastor);
  const findPastor = pastorsInfo.find((pastor) => pastor.id == currentPastor);
  console.log(findPastor);
  return (
    <>
      <div className="pastors-info">
        <div className="pastor-details">
          {findPastor ? (
            <div className="pastor-details" key={findPastor.id}>
              <img src={findPastor.img} alt="" />
              <div className="pastor-text">
                <div className="pastor-short-text">
                  <section>
                    <p>name</p>
                    <h4>{findPastor.name}</h4>
                  </section>
                  <section className="pst-right">
                    <p>position</p>
                    <h4>{findPastor.position}</h4>
                  </section>
                </div>
                <div className="pastor-short-text">
                  <section>
                    <p>nationality</p>
                    <h4>{findPastor.Nationality}</h4>
                  </section>
                  <section className="pst-right">
                    <p>state of origin</p>
                    <h4>{findPastor.stateOfOrigin}</h4>
                  </section>
                </div>
                <div className="pastor-long-text">
                  <p>Autobiography</p>
                  <h4>{findPastor.startOfMinistry}</h4>
                </div>
                <div className="social-media">
                  <p>social Media</p>
                  <div>
                    <a href={findPastor.facebook}>
                      <img src={facebook} alt="" />
                    </a>
                    {findPastor.instagram ? (
                      <a href={findPastor.instagram}>
                        <img src={ig} alt="" />
                      </a>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <h1>Pastor not found</h1>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PastorsInfo;
