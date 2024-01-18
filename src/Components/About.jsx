import React from "react";
// import "../Components/style.css";
import "../Components/about.css";
// import logo from "../assets/p.jpg";
import { Link } from "react-router-dom";
import Mywork from "../Components/Mywork";
import about from '../asset/AboutUs.png'
const About = () => {
  return (
    <>
      
        <div className="line">
          <div className="section">
            <Link to="/about" className="custom-link">
              About Us
            </Link>
          </div>
          <div className="section">
            <Link to="/team" className="custom-link">
              About Team
            </Link>
          </div>
        </div>
<br/><br/>
        <div class="container ">
          <div class="row ">
            <div class="col-md-6">
              <h2 className="about-heading">About Inkyideas</h2>
              <p className="about-para">
                We are a reputed brand communications company for over thirteen
                years. We specialize in BTL (Below the Line) communications
                which help the clients and take an important plod on the lives
                of people. BTL communication directly delivers the goods in
                between and similar people. Now a days time is essential for
                everybody, that's why BTL communication thrives on connecting
                directly with the audience. Just like the way when someone
                reaches out to us personally, we feel special.
              </p>
            </div>
            <div class="col-md-6">
              <img
                src={about}
                className="img-fluid about-img"
                alt="About Us img"
              />
            </div>
          </div>
        </div>
      

      <Mywork />

      {/* <div className="project">
        <h1 className="head">Start an project</h1>
        <button className="btn">Get in Touch</button>
      </div>
      <div className="projecte">
        <h1 className="head">Team Inkyideas</h1>
      </div> */}
    </>
  );
};

export default About;
