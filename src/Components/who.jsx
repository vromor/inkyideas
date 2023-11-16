import React from "react";
import logo from "../asset/p.jpg";
import "../Components/who.css";
const Who = () => {
  return (
    <>
      <section>
        <div className="profile">
          <img src={logo} alt="Profile Picture 1" />
        </div>
        <div className="about">
          <h2>John Doe</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
            magna vel metus aliquet tincidunt.
          </p>
        </div>
      </section>
      <section>
        <div className="profile">
          <img src={logo} alt="Profile Picture 2" />
        </div>
        <div className="about">
          <h2>Jane Smith</h2>
          <p>
            Curabitur congue tortor ac ligula lacinia sit amet. Nullam malesuada
            turpis id libero ullamcorper.
          </p>
        </div>
      </section>
      {/* Add more sections as needed */}
      <button id="orange-butto" className="orange-button">
        {" "}
        More people
      </button>
      <div className="card-container">
        <div className="card">
          <img src={logo} alt="Profile Picture" />
          <h2>R Roy</h2>
          <p>Software Engineer</p>
          <p>Location: Kalyani</p>
        </div>
        <div className="card">
          <img src={logo} alt="Profile Picture" />
          <h2>R Roy</h2>
          <p>Software Engineer</p>
          <p>Location: Kalyani</p>
        </div>
        <div className="card">
          <img src={logo} alt="Profile Picture" />
          <h2>R Roy</h2>
          <p>Software Engineer</p>
          <p>Location: Kalyani</p>
        </div>
        <div className="card">
          <img src={logo} alt="Profile Picture" />
          <h2>R Roy</h2>
          <p>Software Engineer</p>
          <p>Location: Kalyani</p>
        </div>
        <div className="card">
          <img src={logo} alt="Profile Picture" />
          <h2>R Roy</h2>
          <p>Software Engineer</p>
          <p>Location: Kalyani</p>
        </div>
      </div>
    </>
  );
};

export default Who;
