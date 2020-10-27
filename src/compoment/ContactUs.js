import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn, MDBIcon, MDBAnimation  } from 'mdbreact'
import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class ContactUs extends Component {
    render() {
        return (
            <div>
                 <Navbar/>
               <div className="contactus linebg">
                   <MDBContainer>
                       <MDBRow>
                        <MDBCol md="12">
                        <MDBAnimation type="fadeInUp">
                        <h1 className="main-heading text-black">Interested?<br/>Let's Get In Touch</h1>
                        </MDBAnimation>
                        </MDBCol>
                       </MDBRow>


                       <MDBRow>

<MDBCol md="6" className="mt-5 mb-5">
<MDBAnimation reveal type="fadeInUp">
  <form>
    <MDBRow>
      <MDBCol md="6">
          
        <div className="md-form mb-0">
          <MDBInput type="text" id="contact-name" label="Your name" />
        </div>
      </MDBCol>
      <MDBCol md="6">
        <div className="md-form mb-0">
          <MDBInput
            type="text"
            id="contact-email"
            label="Your email"
          />
        </div>
      </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol md="6">
        <div className="md-form mb-0">
          <MDBInput type="text" id="contact-subject" label="Phone Number" />
        </div>
      </MDBCol>
      <MDBCol md="6">
        <div className="md-form mb-0">
          <MDBInput type="text" id="contact-subject" label="Subject" />
        </div>
      </MDBCol>
    </MDBRow>
    <MDBRow>
      <MDBCol md="12">
        <div className="md-form mb-0">
          <MDBInput style={{resize:'none'}}
            type="textarea"
            id="contact-message"
            label="Your message"
          />
        </div>
      </MDBCol>
    </MDBRow>
  </form>
  <div className="text-center text-md-left">
    <MDBBtn color="danger" size="lg">
      Submit
    </MDBBtn>
  </div>
  </MDBAnimation>
</MDBCol>
<MDBCol md="6" className="mt-5 mb-5">
<MDBAnimation reveal type="fadeInUp">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.9886587360575!2d78.15639789986986!3d26.262031488239657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976b771a042c3ab%3A0xef13ad0f47394b38!2sDigiMonk%20Technologies!5e0!3m2!1sen!2sin!4v1603437675889!5m2!1sen!2sin" width="100%" height="350" frameBorder="0" style={{border:'0'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
</MDBAnimation>
</MDBCol>
</MDBRow>
<MDBAnimation reveal type="fadeInUp">  

                       <MDBRow className="text-center pt-md-5 pb-md-5 address-text" >
                          
            <MDBCol md="4">
              <MDBBtn tag="a" size="lg"  color="danger" className="accent-1 mb-5">
                <MDBIcon size="3x" icon="map-marked-alt"/>
              </MDBBtn>
              <h3>Gwalior</h3>
              <p>Software Technology Parks Of India, Gwalior, Madhya Pradesh,474005 India</p>
              <p><a href="tel:+91 77228-45500">+91 77228-45500</a></p>
              <p><a href="mailto:info@digimonk.in">info@digimonk.in</a></p>
             
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a"  color="danger" size="lg" className="accent-1 mb-5">
                <MDBIcon size="3x" icon="map-marked-alt" />
              </MDBBtn>
              <h3>Australia</h3>
              <p>9 / 2A Federal Rd, Seven
HillsNSW - 2147,Australia</p>
              <p><a href="tel:+61 423 515 482">+61 423 515 482</a></p>
              
             
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a"  color="danger" size="lg" className="accent-1 mb-5">
                <MDBIcon size="3x" icon="map-marked-alt" />
              </MDBBtn>
              <h3>Canada</h3>
              <p>115 aylesbury dr.brampton (ontario),Canada</p>
              <p><a href="tel:+1 902 293 2011">+1 902 293 2011</a></p>
             
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
