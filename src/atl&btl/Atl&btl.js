import React from "react";
import "./atl&btl.css";
import banner4 from '../asset/4.png'

import Atlbtlcard from "./Atl&btlcard";
import {creativedata, digitaldata, techdata,atlbtldata} from '../data';
function Atlbtl() {
  return (
    <>
    <img src={banner4} alt="atlbtl"/>
    <div className="atlbtl ">
      {atlbtldata.map((elm, idx) => (
        <Atlbtlcard heading={elm.heading} image={elm.image} description={elm.description} pos={elm.position}id={idx+1} />
      ))}

      


    </div>
    </>
  );
}

export default Atlbtl;
