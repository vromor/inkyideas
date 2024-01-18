import React from 'react';
import './section.css'; // Updated file name

import logo1 from '../asset/logo1.jpg';
import logo2 from '../asset/logo2.jpg';
import logo3 from '../asset/logo3.jpg';
import logo4 from '../asset/logo4.jpg';
import logo5 from '../asset/logo5.jpg';
import logo6 from '../asset/logo6.jpg';
import logo7 from '../asset/logo7.jpg';
import logo8 from '../asset/logo8.jpg';
import logo9 from '../asset/logo9.jpg';
import logo10 from '../asset/logo10.jpg';
import logo11 from '../asset/logo11.jpg';
import logo12 from '../asset/logo12.jpg';
import logo13 from '../asset/logo13.jpg';
import logo14 from '../asset/logo14.jpg';
import logo15 from '../asset/logo15.jpg';
import logo16 from '../asset/logo16.jpg';
import logo17 from '../asset/logo17.jpg';
import logo18 from '../asset/logo18.jpg';
import logo19 from '../asset/logo19.jpg';
import logo20 from '../asset/logo20.jpg';
import logo21 from '../asset/logo21.jpg';

// ... (similar imports for logo3, logo4, ..., logo21)

export default function Section() {
  return (
    <div className="custom-section-row">
      <h1 className="custom-section-header"><center>Satisfied Customers</center></h1>
      <br />
      <div id='custom-section-container' className="custom-section-container">
        <section className="custom-logo-carousel slider" data-arrows="true">
          <div className="custom-logo-item"><img src={logo1} alt='slfs' className="custom-cliImg" /></div>
          <div className="custom-logo-item"><img src={logo2} className="custom-cliImg" alt='ss' /></div>
          <div className="custom-logo-item"><img src={logo3} className="custom-cliImg" alt='ss' /></div>
          <div className="custom-logo-item"><img src={logo4} className="custom-cliImg" alt='ss' /></div>
          <div className="custom-logo-item"><img src={logo5} className="custom-cliImg" alt='ss' /></div>
          <div className="custom-logo-item"><img src={logo6} className="custom-cliImg" alt='ss' /></div>
          <div className="custom-logo-item"><img src={logo7} className="custom-cliImg" alt='ss' /></div>
          {/* <div className="custom-logo-item"><img src={logo8} className="custom-cliImg" alt='ss' /></div>
          <div className="custom-logo-item"><img src={logo9} className="custom-cliImg" alt='ss' /></div> */}
          {/* <div className="custom-logo-item"><img src={logo10} className="custom-cliImg" alt='ss' /></div>
          <div className="custom-logo-item"><img src={logo11} className="custom-cliImg" alt='ss' /></div>
          <div className="custom-logo-item"><img src={logo12} className="custom-cliImg" alt='ss' /></div>
          <div className="custom-logo-item"><img src={logo13} className="custom-cliImg" alt='ss' /></div>
          <div className="custom-logo-item"><img src={logo14} className="custom-cliImg" alt='ss' /></div> */}
          {/* <div className="custom-logo-item"><img src={logo15} className="custom-cliImg" alt='ss' /></div>
          <div className="custom-logo-item"><img src={logo16} className="custom-cliImg" alt='ss' /></div>
          <div className="custom-logo-item"><img src={logo17} className="custom-cliImg" alt='ss' /></div> */}
          {/* <div className="custom-logo-item"><img src={logo18} className="custom-cliImg" alt='ss' /></div>
          <div className="custom-logo-item"><img src={logo19} className="custom-cliImg" alt='ss' /></div>
          <div className="custom-logo-item"><img src={logo20} className="custom-cliImg" alt='ss' /></div>
          <div className="custom-logo-item"><img src={logo21} className="custom-cliImg" alt='ss' /></div> */}
          {/* ... (similar elements with unique class names) */}
        </section>
        <section className="custom-logo-carousel slider" data-arrows="true">
        <div className="custom-logo-item"><img src={logo1} alt='slfs' className="custom-cliImg" /></div>
          <div className="custom-logo-item"><img src={logo2} className="custom-cliImg" alt='ss' /></div>
          <div className="custom-logo-item"><img src={logo3} className="custom-cliImg" alt='ss' /></div>
          <div className="custom-logo-item"><img src={logo4} className="custom-cliImg" alt='ss' /></div>
          <div className="custom-logo-item"><img src={logo5} className="custom-cliImg" alt='ss' /></div>
          <div className="custom-logo-item"><img src={logo6} className="custom-cliImg" alt='ss' /></div>
          <div className="custom-logo-item"><img src={logo7} className="custom-cliImg" alt='ss' /></div>
          {/* ... (similar elements with unique class names) */}
        </section>
      </div>
    </div>
  );
}
