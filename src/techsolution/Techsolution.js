import React from "react";
import "./techsolution.css";

import Techsolutioncard from "./Techsolutioncard";
import {creativedata, digitaldata, techdata,atlbtldata} from '../data'
function Techsolution() {
  return (
    <div className="techsolution ">
      {techdata.map((elm, idx) => (
        <Techsolutioncard heading={elm.heading} image={elm.image} description={elm.description} pos={elm.position}id={idx+1} />
      ))}

      


    </div>
  );
}

export default Techsolution;
