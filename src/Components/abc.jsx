import React from "react";
import "./abc.css";

function ABC() {
  return (
    <div className="grid-container-abc">
      <div className="item-abc item1-abc">
        <div className="service heading">
          <div className="text">
            <h1
              style={{
                marginLeft: "18px",
                fontSize: "30px",
              }}
            >
              Services
              <br /> <span id="creative">We</span> <b>Provide</b>
            </h1>
            <p>
              <b>
                distinctio inventore pariatur placeat architecto dicta facilis,
                incidunt, adipisci vel dolore. Eligendi? Lorem, ipsum dolor sit
                amet doloribus? Minus totam nulla, unde quisquam quia
                repudiandae, eaque similique, quaerat ratione facilis vel
                voluptatem dicta
                <br />
                Eligendi ab nesciunt similique quam laborum, pariatur quae
                distinctio inventore pariatur placeat architecto dicta facilis,
                incidunt, adipisci vel dolore. Eligendi? Lorem, ipsum dolor sit
                amet doloribus? adipisicing elit.
              </b>
            </p>
            <div className="button-container">
              <button className="btn-gradd" style={{marginLeft:"-0px"}}>Read More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="item-abc item2-abc">
        <div className="item2-abc-img">
          <img src="https://cdn.hswstatic.com/gif/why-is-sky-blue.jpg" alt="" />
        </div>
      </div>
      <div className="item-abc item3-abc">
        <div className="item3abc one" style={{width:"8vw"}}><img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/36b885107148725.5fa08100392dd.jpg" alt="" /></div>
        <div className="item3abc two" style={{width:"8vw"}}><img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/36b885107148725.5fa08100392dd.jpg" alt="" /></div>
        <div className="item3abc three"style={{width:"8vw"}}><img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/36b885107148725.5fa08100392dd.jpg" alt="" /></div>
        <div className="item3abc four"style={{width:"8vw"}}><img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/36b885107148725.5fa08100392dd.jpg" alt="" /></div>
        <div className="item3abc five"style={{width:"8vw"}}><img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/36b885107148725.5fa08100392dd.jpg" alt="" /></div>
        <div className="item3abc six"style={{width:"8vw"}}><img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/36b885107148725.5fa08100392dd.jpg" alt="" /></div>
      </div>
    </div>
  );
}

export default ABC;
