import "./App.css";
import Carousel from "./Components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Who from "./Components/who";
import Navbar from "./Components/Navbar/Navbar";
import Creativecontent from './creativecontent/Creative';
import Digital from './digitalmarket/Digital';
import Techsolution from './techsolution/Techsolution';
import Atlbtl from "./atl&btl/Atl&btl";
import {creativedata, digitaldata, techdata,atlbtldata} from './data'

import NavLinks from "./Components/Navbar/NavLinks";
import Creative from "./creativecontent/Creative";
import Contact from "./Contact/Contact";
import Gallery from "./Gallery/Gallery";
import React, { useState } from "react";




function App() {
  const [file, setFile] = useState(null);
  return (
    <>
    
    

    <BrowserRouter>
    <Navbar />
    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About Us />} />
          <Route path ="/team" element={<Who/>}/>
          <Route path="/digitalmarketing" element={<Digital  />} />
          <Route path="/creativecontent" element={<Creative  />} />
          <Route path="/techsolution" element={<Techsolution  />} />
          <Route path="/atlbtl" element={<Atlbtl  />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/gallery/:title" element={<Gallery  file={file} setFile={setFile} />} />
          
 
        </Routes>
        <Footer/>
      </BrowserRouter> 
    </>
  );
}

export default App;
