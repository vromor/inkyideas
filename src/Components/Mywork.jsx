import React from "react";
import "../Components/Mywork.css";

function Mywork() {
  return (
    <>
      <div class="container px-4 text-center mission-container ">
        <div class="row gx-5 ">
          <div class="col-lg-5 mission-col">
            <div class="p-3">
              <button className="mission-btn">Mission</button>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It
              </p>
            </div>
          </div>
          <div class="col-lg-6 mission-col">
            <div class="p-3">
              <button className="mission-btn">Vission</button>

              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* testimonials */}
      <div className="cnt">
        
        <div class="text-center">
        <h1 className="abouttesthead">Testimonial</h1>
        <br/> 
          <div class="row ">
            <div class="col-md-4 col-lg-6 testimonial2-col">
              <button className="testimonial-btn">
                D. Barman (BDO (East) Hi-Tech Pharma)
              </button>
              <p>
                I know Amit Kundu, Proprietor of INKYIDEAS last one year and we
                have a very healthy relationship too. I worked as a now Business
                Development Officer for Hi Tech Pharma Company. For my company
                all the printing materials like invitation card, flexy banner,
                standy banner, book printing everything done in Inkyideas
                printing house with good quality with good reasonable price.
                More important thing of Amit Kundu is that he is very innovative
                in his work with dedicated too. Wish him good success in his
                life.
              </p>
            </div>
            <div class="col-md-3 col-lg-5 testimonial2-col">
              <button className="testimonial-btn">
                P.K. Ghosh (Krishi Rasayan)
              </button>

              <p>
                It has been an always great feeling working with him and his
                team not just because of the excellent service and the quality
                output more due to their imaginative ideas & nearly putting them
                with a punch. Wish you & your team face more challenges.
                GLORIOUS DAYS AHEAD.
              </p>
            </div>
            <div class="col-md-4 col-lg-12 testimonial2-col">
              <button className="testimonial-btn">
                Debtanu (Technology Application Officer Cargill)
              </button>

              <p>
                We are working last 2 year and he provide all kinds of printing
                support to me while working as a Technology Application Officer
                of Cargill West Bengal Team. Under his dynamic leadership and
                hard work only last year we could able to make a good stall in
                Global Bengal Business Summit in Hyatt ground in 2015. Rather
                than this he always works with innovativeness along with time
                frame which is very important in private organisation providing
                best quality service with economical price. I wish you good
                luck.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Mywork;
