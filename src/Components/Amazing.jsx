import React from "react";

import weed1 from "../asset/a.png";
import weed2 from "../asset/a.png";
import weed3 from "../asset/a.png";
import weed4 from "../asset/a.png";
import "./Amazing.css";

const Amazing = () => {
  const imgStyle = {
    maxWidth: "100%",
  };
  const paragraphStyle = {
    margin: "10px",
    padding: "15px",
  };
  const buttonStyle = {
    background:
      "linear-gradient(109.6deg, rgb(255, 78, 80) 11.2%, rgb(249, 212, 35) 100.2%)",
    color: "white",
    border: "none",
    padding: "10px 40px",
    cursor: "pointer",
    borderRadius: "15px",
  };

  const handleButtonClick = () => {
    alert("Button Clicked!");
  };

  return (
    <>
      <div className="App">
        <div className="UpperLeft">
          <img src={weed1} alt="Weed 1" style={imgStyle} />
        </div>
        <div className="UpperRight">
          <img src={weed2} alt="Weed 2" style={imgStyle} />
        </div>
        <div className="LowerLeft">
          <img src={weed3} alt="Weed 3" style={imgStyle} />
        </div>
        <div className="LowerRight">
          <img src={weed4} alt="Weed 4" style={imgStyle} />
        </div>
        <div className="CenteredDiv">
          <h1>Amazing 𝖋𝖊𝖆𝖙𝖚𝖗𝖊𝖘 </h1>
          <p style={paragraphStyle}>
            <b>
              The product comes equipped with a myriad of amazing features that
              truly set it apart from the competition. Its cutting-edge
              technology enables lightning-fast performance, ensuring that tasks
              are completed in record time. With an intuitive user interface,
              users can effortlessly navigate through its numerous capabilities.
              The product's robust security features provide peace of mind,
              safeguarding sensitive data from potential threats.
            </b>
          </p>
          <button style={buttonStyle} onClick={handleButtonClick}>
            Click Me
          </button>
        </div>
      </div>
    </>
  );
};

export default Amazing;
