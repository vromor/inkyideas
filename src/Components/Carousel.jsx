import Carousel from "react-bootstrap/Carousel";

import carousel1 from "../asset/carousel 1.4-01.png";
import carousel2 from "../asset/carousel 2.1-01.png";
import carousel3 from "../asset/carousel 3.1-01.png";
import carousel4 from "../asset/carousel 4.1-01.png";
import carousel5 from "../asset/carousel 5.2-01.png";
import "./carousel.css";
// import ParticleBg from "./ParticleBg";
function CarouselFadeExample() {
  return (
    <>
      {/* <ParticleBg/> */}
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={carousel1} alt="First slide" />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}

            <div class="buttons">
              <button className="cofee">
                <span className="inviteus">Invite us</span> for Coffee!
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel2}
            alt="Second slide"
          />
          <Carousel.Caption>
          <div class="buttons">
              <button className="cofee">
                <span className="inviteus">Invite us</span> for Coffee!
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel3}
            alt="Third slide"
          />
          <Carousel.Caption>
          <div class="buttons">
              <button className="cofee">
                <span className="inviteus">Invite us</span> for Coffee!
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel4}
            alt="First slide"
          />
          <Carousel.Caption>
          <div class="buttons">
              <button className="cofee">
                <span className="inviteus">Invite us</span> for Coffee!
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={carousel5}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>Five slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            <div class="buttons">
              <button className="cofee">
                <span className="inviteus">Invite us</span> for Coffee!
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselFadeExample;
