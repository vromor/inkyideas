import React from 'react'
import conatactlogo from "../asset/contact us.png"
import { Col, Row } from 'react-bootstrap'
import './contact.css'

function Contact() {
  return (<>
    <div class="text-center contactBody">
    <Row>
    <Col>
  <img className='contactImg' src={conatactlogo} />
  </Col>
  <Col>
    <main class="form-signin w-100 m-auto">
      <form action="mailto:info@inkyideas.in" method="post">
        
        <h1 className='contactHeading'>Let's Connect</h1>

        <div class="form-floating">
          <input
          type="text"
          name="name"
            class="form-control"
            id="floatingName"
            placeholder="Name"
            required
          />
          <label for="floatingName">Name</label>
        </div>

        <div class="form-floating">
          <input
            type="email"
            name="eemail"
            class="form-control"
            id="floatingEmail"
            placeholder="name@example.com"
            required
          />
          <label for="floatingEmail">Email</label>
        </div>

        <div class="form-floating">
          <input
            type="number"
            name="phone_number"
            class="form-control"
            id="floatingInput"
            placeholder="+91"
            required
          />
          <label for="floatingInput">Phone Number</label>
        </div>
        
        <div class="form-floating">
          <select class="form-select" name="subject" aria-label="Default select example">
            <option selected >Select Subject</option>
            <option value="General">General</option>
            <option value="Service">Service</option>
            <option value="Business">Business</option>
            <option value="Career">Career</option>
          </select>
        </div>
        <div class="form-label mb-3">
          <textarea for="floatingsubject" class="form-control" name="text" placeholder="Enter text...."></textarea>
        </div>
        {/* <!-- <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"> Enter any massage</label>
          <textarea class="form-control" id="exampleFormControlInput1" rows="3"></textarea>
        </div> --> */}
        <input type='submit' value='Submit' class="w-100 btn btn-lg btn-primary contactButton" name="submit"/>
        {/* <button class="w-100 btn btn-lg btn-primary contactButton" name="submit" type="submit">
          Submit
        </button> */}
      </form>
</main>
</Col>
  </Row>
    </div>
    </>
  )
}

export default Contact
