import React from 'react'

function Creativecard({ heading, description, image, pos,id }) {
  return (
    <div id={id}>
        {
        pos == "left" ? (<div className="container service-cnt">
          <div className="row service-row">
            <div className="col-sm-8">
              <h2 className="service-heading">{heading}</h2>
              <hr></hr>
              <p className="service-para">
                {description}
              </p>
            </div>

            <div className="col-sm-4 ">
              <img
                className="serviceImg"
                src={image}
                width="400px"
                height="400px"
              />
            </div>
          </div>
        </div>) : (
          <div className="container service-cnt">
            <div className="row service-row">
              <div className="col-sm-4 ">
                <img
                  className="serviceImg"
                  src={image}
                  width="400px"
                  height="400px"
                />
              </div>
              <div className="col-sm-8">
                <h2 className="service-heading">{heading}</h2>
                <hr></hr>
                <p className="service-para">
                  {description}
                </p>
              </div>


            </div>
          </div>
        )
      }
    </div>
  )
}

export default Creativecard