import React from "react";
import "./digital.css";
import banner2 from '../asset/1.png'

import Digitalcard from "./Digitalcard";
import {creativedata, digitaldata, techdata,atlbtldata} from '../data'
function Digital() {
  return (
    <>
    <img src={banner2} alt="digitalmarketing"/>
    <div className="creative ">
      {digitaldata.map((elm, idx) => (
        <Digitalcard heading={elm.heading} image={elm.image} description={elm.description} pos={elm.position}id={idx+1} />
      ))}

      


    </div>
    </>
  );
}

export default Digital;
