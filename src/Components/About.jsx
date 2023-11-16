import React from "react";
import "../Components/style.css";
// import logo from "../assets/p.jpg";
import { Link } from "react-router-dom";
import Mywork from "../Components/Mywork";
const About = () => {
  return (
    <>
      <div className="row">
        <div className="line">
          <div className="section">
            <Link to="/about" className="custom-link">
              About Us
            </Link>
          </div>
          <div className="section">
            <Link to="/who" className="custom-link">
              About Team
            </Link>
          </div>
        </div>
        <div className="abt-sctn">
          <div className="inr-cntnr">
            <h1>About Us</h1>
            <p className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              voluptatibus facere numquam illo sint ipsa, voluptatum ducimus
              excepturi repudiandae, deserunt doloribus eos iusto, veritatis
              porro omnis architecto iste corporis non eum dolor. Quam est vel,
              placeat voluptates, officiis numquam rem sunt possimus sapiente
              dolores ut consequatur eligendi! Vitae, debitis commodi
            </p>
          </div>
        </div>
      </div>

      <Mywork />

      <div className="project">
        <h1 className="head">Start an project</h1>
        <button className="btn">Get in Touch</button>
      </div>
      <div className="projecte">
        <h1 className="head">Team Inkyideas</h1>
      </div>
    </>
  );
};

export default About;
