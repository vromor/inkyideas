import React from "react";
import "./techsolution.css";
import banner3 from '../asset/3.png'
import Techsolutioncard from "./Techsolutioncard";
import {creativedata, digitaldata, techdata,atlbtldata} from '../data'
function Techsolution() {
  return (<>
  <img src={banner3} alt="techsolution"/>
    <div className="techsolution ">
      {techdata.map((elm, idx) => (
        <Techsolutioncard heading={elm.heading} image={elm.image} description={elm.description} pos={elm.position}id={idx+1} />
      ))}

      


    </div>
    </>
  );
}

export default Techsolution;
