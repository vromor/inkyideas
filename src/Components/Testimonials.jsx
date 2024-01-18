 import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Testimonial.css";

function Testimonials() {
  const clientCount = useRef(null);
  const projectCount = useRef(null);
  const contractCount = useRef(null);

  const animateCounter = (from, to, ref) => {
    animate(from, to, {
      duration: 1,
      onUpdate: (v) => (ref.current.textContent = v.toFixed()),
    });
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-moving-background">
        <Row className="testimonial-wrapper hh">
         {/* For medium-sized screens, set column size to 12 (full width) */}
          {/* xs={12} sm={12} md={4}  */}
          <Col className="testimonial-container-col">
            <i className="fa-solid fa-hand-holding-hand fa-beat" style={{ color: "#ffffff" }}></i>
            <motion.span
              whileInView={() => animateCounter(0, 11, clientCount)}
              ref={clientCount}
              className="testimonial-num"
              data-val="400+"
            >
              000+
            </motion.span>
            <span className="testimonial-text">Projects</span>
          </Col>
          <Col className="testimonial-container-col">
            <i className="fa-solid fa-file-signature fa-bounce" style={{ color: "#ffffff" }}></i>
            <motion.span
              whileInView={() => animateCounter(0, 91, projectCount)}
              ref={projectCount}
              className="testimonial-num"
              data-val="400+"
            >
              000+
            </motion.span>
            <span className="testimonial-text">Contracts</span>
          </Col>
          <Col className="testimonial-container-col">
            <i className="fa-solid fa-users-line fa-beat" style={{ color: "#ffffff" }}></i>
            <motion.span
              whileInView={() => animateCounter(0, 9731, contractCount)}
              ref={contractCount}
              className="testimonial-num"
              data-val="400"
            >
              000+
            </motion.span>
            <span className="testimonial-text">Clients</span>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Testimonials;
