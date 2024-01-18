import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="footers">
      <footer id="foots" className="text-center text-lg-start  text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span id="spans" style={{color:"white",marginLeft:"5px"}}>Get connected with us on social networks:</span>
          </div>
          <div className="footlinks">
            <a href="#" className="me-4 text-resets">
              <i className="fa fa-facebook-f"></i>
            </a>

            <a href="#" className="me-4 text-resets">
              <i className="fa fa-google"></i>
            </a>
            <a href="#" className="me-4 text-resets">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#" className="me-4 text-resets">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
        </section>
        <section className="foot2s">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fa fa-gem me-3" style={{color:"white"}}></i>InkyIdeas
                </h6>
                <p style={{color:"white"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{color:"white"}}>Quick Links</h6>
                <p>
                
                <Link to="/" className="text-resets" style={{color:"white"}}>
                   Home
                  </Link>
                </p>
                <p>
                  <a href="/about" className="text-resets" style={{color:"white"}}>
                    About US
                  </a>
                </p>
                <p>
                  <a href="/atlbtl" className="text-resets" style={{color:"white"}} >
                    Services
                  </a>
                </p>
                <p>
                  <a href="/contact" className="text-resets" style={{color:"white"}}>
                    Contact Us
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{color:"white"}}>Useful links</h6>
                <p>
                  <a href="#!" className="text-resets" style={{color:"white"}}>
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-resets" style={{color:"white"}}>
                    Online Services
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-resets" style={{color:"white"}}>
                    BTL
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-resets" style={{color:"white"}}>
                    Help
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4" style={{color:"white"}}>Contact</h6>
                <p>
                  <i className="fa fa-home me-3" style={{color:"white"}}></i>Kalyani Webel IT Phase-II
                </p>
                <p>
                  <i className="fa fa-envelope me-3" style={{color:"white"}}></i>
                  info@example.com
                </p>
                <p>
                  <i className="fa fa-phone me-3" style={{color:"white"}}></i> + 01 234 567 88
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4 footends"
          style={{ backgroundColor: "#333333" }}
        >
          © 2023 Copyright :
          <a
            className="text-resets fw-bold"
            href="https://inkyideas.in/"
            target="_blank"
          >
            {" "}
            inkyideas.in
          </a>
        </div>
      </footer>
    </div>
  );
}
