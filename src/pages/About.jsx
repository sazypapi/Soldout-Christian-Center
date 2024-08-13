import React from "react";
import { Link } from "react-router-dom";
import pastorsInfo from "../pastors";
import aboutus from "../assets/AboutUs.jpg";
import ministers from "../ministers";
import teams from "../teams";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <div className="about-home">
        <img src={aboutus} alt="" />
      </div>
      <div className="about-text">
        <h3>This is</h3>
        <h1>SOLDOUT CHRISTIAN CENTER</h1>
        <div className="about-sub">
          <h3>Welcome Home</h3>
          <p>
            Welcome to Soldout Christian Center, where love, faith, and
            community create a spiritual home for everyone. Whether you're
            seeking a deeper connection with God or a supportive community,
            we’re here to walk with you. Founded in May 2017, Soldout Christian
            Center, under the leadership of Pastor Lawrence Nnatu and Pastor
            Grace Nnatu, is a Bible-based church spreading God’s love and grace
            in Satellite Town, Lagos.
          </p>
        </div>
        <div className="about-sub">
          <h3>Our Mission</h3>
          <p>
            To be a home where everyone can experience God's love, grow in
            faith, and find belonging. We offer a safe, supportive space to live
            out your purpose.
          </p>
        </div>
        <div className="about-sub">
          <h3>Our Community</h3>
          <p>
            Located at Plot E 132, Kehinde Eta-Oko Street, by Close 16 Bridge,
            Satellite Town Lagos, we are more than a church—we’re a family. Our
            diverse community, united by faith in Jesus Christ, welcomes you to
            belong, grow, and make a difference. Whether new to faith or seeking
            a church home, join us and experience the warmth that defines
            Soldout Christian Center. Welcome home.
          </p>
        </div>
      </div>
      <h1 className="MTT">Meet the Team</h1>
      <div className="pastors-container">
        <h1>Our Pastors</h1>
        <div className="pastors-div">
          {pastorsInfo.map((pastors) => {
            return (
              <div className="pastors" key={pastors.id}>
                <img src={pastors.img} alt="" />
                <h5>{pastors.name}</h5>
                <h6>{pastors.position}</h6>
                <Link to={`/pastors/${pastors.id}`}>
                  <button className="pastors-btn">View Pastor</button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className="ministers-container">
        <h1>Our Ministers</h1>
        <div className="ministers-div">
          {ministers.map((minister) => {
            return (
              <div className="ministers" key={minister.id}>
                <img src={minister.img} alt={minister.name} />
                <h5>{minister.name}</h5>
                <h6>{minister.position}</h6>
              </div>
            );
          })}
        </div>
      </div>
      <div className="team-container">
        <h1>Our Teams</h1>
        <div className="teams-div">
          {teams.map((team) => {
            return (
              <div className="team" key={team.id}>
                <img src={team.img} alt="" />
                <h5>{team.team}</h5>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
