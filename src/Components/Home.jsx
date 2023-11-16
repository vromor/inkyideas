import React from "react";
import Carousel from "../Components/Carousel";
import Quote from "./Quote";
// import Amazing from "./Amazing";
// import Abc from "./abc";
import Testimonials from "./Testimonials";
import Swipper from "./Swipper";
import Clients from "./Clients";


const Home = () => {
  return (
    <>
     
      <Carousel />
     
      <Quote />
      <br />
      {/* <Abc /> */}
      
      <Testimonials />
     
      <div style={{marginTop:"20px"}}>
        <Swipper />
      </div>
      <Clients />
    </>
  );
};

export default Home;
