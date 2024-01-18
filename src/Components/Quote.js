import React from "react";

import "./Quote.css";
import logo from "./A shadow.png";
import { Link } from "react-router-dom";
// import ParticleBg from "./ParticleBg";

function Quote() {
  return (
    <>
      {/* <div class="container text-center"> */}
      <div class="row" id="quote">
        <div class="col-md-4" id="left">
          <h1 className="wearecreativeagency">
            We are <span id="creative">creative</span> <span>agency</span>
          </h1>
          <p className="quotepara">
            InkyIdeas is your gateway to a world of creative possibilities. Our
            Creative & Design services encompass a wide array of offerings that
            cater to all your visual and artistic needs. We believe that a
            strong brand identity starts with exceptional design, and that's
            precisely what we deliver. Our team at InkyIdeas is adept at turning
            ideas into captivating visual assets.
          </p>
          {/* <Link to="..."></Link> */}
          <Link to="/about" >
                <button className="btn-grad">Read More</button>
              </Link>
          {/* <input className="btn-grad" type="button" value="Read More" /> */}
          {/* <button className="btn-grad">Read More</button> */}
        </div>
        <div class="col-md-4">
          <img src={logo} class="rounded mx-auto d-block" alt="A"></img>
          {/* <img id="amit" src={logo} alt="A" /> */}
        </div>
        <div class="col-md-4" id="right">
          <figure class="text-end">
            <blockquote class="blockquote">
              <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption class="blockquote-footer">
              Mr. Amit Kr. Kumdu{" "}
              <cite title="Source Title">(CEO,INKYIDEAS)</cite>
            </figcaption>
          </figure>
          {/* <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five
              </p>
              <h4>~Amit Kr. Kundu</h4> */}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Quote;
