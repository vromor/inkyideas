import React from "react";
import "./creative.css";
import banner from '../asset/2.png'
import Creativecard from "./Creativecard";
import {creativedata, digitaldata, techdata,atlbtldata} from '../data'
function Creative() {
  return (<>
    <img src={banner} alt="creative"/>
    <div className="creative ">
      {creativedata.map((elm, idx) => (
        <Creativecard heading={elm.heading} image={elm.image} description={elm.description} pos={elm.position}id={idx+1} />
      ))}

      


    </div>
    </>
  );
}

export default Creative;
