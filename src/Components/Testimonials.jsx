import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Testimonial.css";

function Testimonials() {
  const clientCount = useRef(null);
  const projectCount = useRef(null);
  const contractCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 11, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 91, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };
  const animationContactCount = () => {
    animate(0, 9731, {
      duration: 1,
      onUpdate: (v) => (contractCount.current.textContent = v.toFixed()),
    });
  };

  return (
    <div className=" text-center ">
      <div className="moving-background">
        <Row className="wrapper hh">
          <Col className="container">
            <i class="fas fa-utensils"></i>
            <motion.span
              whileInView={animationClientsCount}
              ref={clientCount}
              class="num"
              data-val="400+"
            >
              000
            </motion.span>
            <span class="text">projects</span>
          </Col>
          <Col className="container">
            <i class="fas fa-utensils"></i>
            <motion.span
              whileInView={animationProjectsCount}
              ref={projectCount}
              class="num"
              data-val="400+"
            >
              000
            </motion.span>
            <span class="text">contracts</span>
          </Col>
          <Col className="container">
            <i class="fas fa-utensils"></i>
            <motion.span
              whileInView={animationContactCount}
              ref={contractCount}
              class="num"
              data-val="400"
            >
              000
            </motion.span>
            <span class="text">clients</span>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Testimonials;
