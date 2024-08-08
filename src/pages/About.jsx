import React from "react";
import { Link } from "react-router-dom";
import pastorsInfo from "../pastors";
import aboutus from "../assets/AboutUs.png";
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
          <h4>Welcome Home</h4>
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
          <h4>Our Mission</h4>
          <p>
            To be a home where everyone can experience God's love, grow in
            faith, and find belonging. We offer a safe, supportive space to live
            out your purpose.
          </p>
        </div>
        <div className="about-sub">
          <h4>Our Community</h4>
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
      <div>Meet the Team</div>
      <div className="pastors-container">
        <h1>Pastors</h1>
        {pastorsInfo.map((pastors) => {
          return (
            <div className="pastors" key={pastors.id}>
              <img src={pastors.img} alt="" />
              <h5>{pastors.name}</h5>
              <Link>
                <button>View {pastors.name}</button>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="ministers-container">
        <h1>Ministers</h1>
        {ministers.map((minister) => {
          return (
            <div className="ministers" key={minister.id}>
              <img src={minister.img} alt="" />
              <h5>{minister.name}</h5>
            </div>
          );
        })}
      </div>
      <div className="team-container">
        <h1>Our Departments</h1>
        {teams.map((team) => {
          return (
            <div className="team" key={team.id}>
              <img src={team.img} alt="" />
              <h5>{team.team}</h5>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default About;
