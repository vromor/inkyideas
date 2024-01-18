import React from "react";
import logo from "../asset/p.jpg";
import fullteam from "../asset/team ui img w.png";
import "../Components/who.css";
const Who = () => {
  return (
    <>
      <div className="container service-cnt">
        <div className="row service-row">
          <div className="col-sm-8">
            <h2 className="service-heading">
              Strategic Planner : Anirban Mondal
            </h2>
            <hr></hr>
            <p className="service-para">
              He oversees the development of corporate plans and budgets by
              playing a lead role in all the planning and budgeting activities
              performed by the business. In this position, he establishes and
              reviews key strategic priorities and translates them into
              actionable and quantitative plans. Provides much needed support in
              the formulation of individual department strategies.
              <br></br>
              <br></br>
              Anirban Mondal is a graduate from Jadavpur University and Post
              Graduate from IIT Roorkee. He comes with over 14 years of
              professional experience in project management and business
              development. He has a wide spectrum of industry-based knowledge
              having served as consultant in companies in varied sectors ranging
              from mining, real estate, agro-chemicals, light/ heavy
              manufacturing, energy & power, pharmaceuticals, FMCG etc working
              in India and Bangladesh.
            </p>
          </div>

          <div className="col-sm-4 ">
            <img
              className="serviceImg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfXpi1Nrns6Lg_qmU2V4jJ4kexQbqsgKyCxg&usqp=CAU"
            ></img>
          </div>
        </div>
      </div>
      <img src={fullteam} alt="full team"/>
    </>
  );
};

export default Who;
