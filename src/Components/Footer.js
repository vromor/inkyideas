import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div>
      <div id="Footer">
        <div className="container text-center">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3>
                <span>Inkyideas <div className="underline"><span></span></div></span>.in 
              </h3> 
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Laborum ea quo ex ullam laboriosam magni totam, facere eos iure
                voluptate.
              </p>
              <div className="footer-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5> Quick Links <div className="underline"><span></span></div></h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Portfolio
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ft-3">
              <h5>Contact Us <div className="underline"><span></span></div></h5>
              <p>
                <i class="fa-solid fa-phone-volume"></i> (033) 2582 5005, 9830060590
              </p>
              <p>
                <i class="fa-solid fa-envelope"></i> amitkundu@rediffmail.com, 
inkysales@gmail.com, 
 info@inkyideas.in
              </p>
              <p>
                <i class="fa-solid fa-paper-plane"></i> Regd. Office :
A-9 Multiplex, Block-II,
Ground Floor, Kalyani, Nadia, West Bengal
<br></br><br/>
Workshop :
T-7/Pt.-5, Kalyani Industrial Estate,
Phase - II, Kalyani, Nadia, West Bengal
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        
        <p>&copy;<span className="f-2">2023</span><span className="f-1">&nbsp;Inkyideas</span>  &nbsp; &nbsp;  &nbsp;<span className="f-2">Design By :- </span><span className="f-1">Inkyideas_Digipioneers</span></p>
      </div>
    </div>
  );
}

export default Footer;
