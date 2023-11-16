import Carousel from "react-bootstrap/Carousel";

import logo from "../asset/a.png";
import "./carousel.css";
// import ParticleBg from "./ParticleBg";
function CarouselFadeExample() {
  return (
    <>
      {/* <ParticleBg/> */}
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={logo} alt="First slide" />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}

            <div class="buttons">
              <button className="cofee">
                <s>Let's</s> <b class="eff">Invite Us</b> for Cofee!
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wowslider.com/sliders/demo-93/data1/images/landscape.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <div class="buttons">
              <button className="cofee">
                <s>Let's</s> <b class="eff">Invite Us</b> for Cofee!
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <div class="buttons">
              <button className="cofee">
                <s>Let's</s> <b class="eff">Invite Us</b> for Cofee!
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <div class="buttons">
              <button className="cofee">
                <s>Let's</s> <b class="eff">Invite Us</b> for Cofee!
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wowslider.com/sliders/demo-93/data1/images/lake.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>Five slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            <div class="buttons">
              <button className="cofee">
                <s>Let's</s> <b class="eff">Invite Us</b> for Cofee!
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselFadeExample;
