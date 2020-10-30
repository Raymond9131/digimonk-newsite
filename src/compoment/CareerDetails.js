import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow,  MDBAnimation, MDBIcon, MDBInput, MDBBtn } from 'mdbreact'
import Navbar from "./Navbar";
import Footer from "./Footer";
export default class CareerDetails extends Component {
    render() {
        return (
            <div>
                 <Navbar/>
<div className="about-us linebg">
<MDBContainer>
                      <MDBRow>
                          <MDBCol md="12">
                              <div className="about-banner">
                                 <MDBAnimation reveal type="fadeInUp">
                              <h1>CAREERS</h1>
                              </MDBAnimation> 
                              <MDBAnimation reveal type="fadeInUp">
                              <p>
                              We’re always looking for new talents - just drop us a line!</p>
</MDBAnimation>
                              </div>
                          </MDBCol>
                      </MDBRow>
                  </MDBContainer>
</div>

<div className="share-career linebg">
    <MDBContainer>
        <MDBRow>
            <MDBCol md="12">
            <MDBAnimation reveal type="fadeInUp">
                <ul className="socials-car">
                    <li><h3>Share</h3> <div className="share-icon">
                        <a href="#" target="_blank">
                        <MDBIcon fab icon="facebook-square" />
                        </a>
                        <a href="#" target="_blank"><MDBIcon fab icon="twitter-square" /></a>
                        <a href="#" target="_blank"><MDBIcon fab icon="linkedin" /></a>
                        <a href="#" target="_blank"><MDBIcon fab icon="whatsapp-square" /></a>
                        </div></li>
                </ul>
                </MDBAnimation>
            </MDBCol>
        </MDBRow>
    </MDBContainer>
</div>

<div className="developer linebg">
    <MDBContainer>
        <div className="career-detail-text">
        <MDBAnimation reveal type="fadeInUp">
            <h3>React Native Developer</h3>
            </MDBAnimation>
            
            <div className="job-requirement">
            <MDBAnimation reveal type="fadeInUp">
<ul>
    <li><MDBIcon far icon="calendar-check" /> 1-5 Years</li>
    <li> <MDBIcon icon="map-marker-alt" /> Gwalior</li>
    <li> <MDBIcon icon="graduation-cap" /> B.Tech/B.E. in Computers</li>
</ul>

</MDBAnimation>
            </div>
            <div className="career-text">
            <MDBAnimation reveal type="fadeInUp">
            <p>We are looking for a React Native developer interested in building performant mobile apps on both the iOS and Android platforms. You will be responsible for architecting and building these applications, as well as coordinating with the teams responsible for other layers of the product infrastructure. Building a product is a highly collaborative effort, 
                and as such, a strong team player with a commitment to perfection is required.</p>
                </MDBAnimation>
                <MDBAnimation reveal type="fadeInUp">
                <h4>Responsibilities and Duties</h4>
                <ul>
	<li>Build pixel-perfect, smooth UIs across both mobile platforms.</li>
	<li>Leverage native APIs for deep integrations with both platforms.</li>
	<li>Diagnose and fix bugs and performance bottlenecks for performance that feels native.</li>
	<li>Reach out to the open-source community to encourage and help implement mission-critical software fixes—React Native moves fast and often breaks things.</li>
	<li>Maintain code and write automated tests to ensure the product is of the highest quality.</li>
	<li>Transition existing React web apps to React Native.</li>
</ul>
</MDBAnimation>
<MDBAnimation reveal type="fadeInUp">
<h4>Key Skills</h4>
<p>JavaScript, React, React Native, ReactJS, Mobile</p>
<h4>Required Experience and Qualifications</h4>
<ul>
	<li>Firm grasp of the JavaScript&nbsp;language and its nuances, including ES6+ syntax</li>
	<li>Knowledge of&nbsp;programming</li>
	<li>Ability to write well-documented, clean Javascript code</li>
	<li>Rock solid at working with third-party dependencies and debugging dependency conflicts</li>
	<li>Familiarity with native build tools, like XCode, Gradle&nbsp;<strong>Android Studio, IntelliJ</strong></li>
	<li>Understanding of REST APIs, the document request model, and offline storage</li>
	<li>Experience with automated testing suites, like &nbsp;<strong> Jest or Mocha</strong></li>
</ul>
<h5>Job Type: Full-time</h5>
</MDBAnimation>
</div>
        </div>
    </MDBContainer>
</div>

<div className="career4-detail-form linebg">
    <MDBContainer>
    <MDBAnimation reveal type="fadeInUp">
        <h3>Interested? You know what to do</h3>
        <p>No need to be formal. Just send us your links and we’ll be in touch.</p>
    <MDBRow>
      <MDBCol md="6">
          
        <div className="md-form mb-0">
          <MDBInput type="text" id="name" label="Your name" />
        </div>
      </MDBCol>
      <MDBCol md="6">
        <div className="md-form mb-0">
          <MDBInput
            type="text"
            id="email"
            label="Your email"
          />
        </div>
      </MDBCol>

      <MDBCol md="6">
        <div className="md-form mb-0">
          <MDBInput type="text" id="phone" label="Phone Number" />
        </div>
      </MDBCol>

      <MDBCol md="6">
        <div className="md-form mb-0">
          <MDBInput type="text" id="position" label="Position" />
        </div>
      </MDBCol>

      <MDBCol md="6">
        <div className="md-form mb-0">
          <MDBInput type="text" id="experience" label="Experience" />
        </div>
      </MDBCol>
      <MDBCol md="6">
        <div className="md-form mb-0">
        <MDBInput type="text" id="location" label="Location" />
        </div>
      </MDBCol>
      <MDBCol md="6">
        <div className="md-form mb-0">
        <MDBInput type="file" id="file"  />
    
        </div>
      </MDBCol>
      <MDBCol md="12" className="mt-5">
      <div className="text-center text-md-left">
    <MDBBtn color="danger" size="md">
      Submit
    </MDBBtn>
  </div>
      </MDBCol>
    </MDBRow>
    </MDBAnimation>
    </MDBContainer>
</div>

                 
                 <Footer/>
            </div>
        )
    }
}
