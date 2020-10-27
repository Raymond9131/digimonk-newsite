import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBInput, MDBBtn, MDBIcon, MDBAnimation  } from 'mdbreact'
import Navbar from "./Navbar";
import Footer from "./Footer";
export default class Paynow extends Component {
    render() {
        return (
            <div>
               <Navbar/>
               <div className="contactus linebg">
                   <MDBContainer>
                       <MDBRow>
                        <MDBCol md="12">
                        <MDBAnimation type="fadeInUp">
                        <h1 className="main-heading text-black text-center">Pay Now</h1>
                        </MDBAnimation>
                        </MDBCol>
                       </MDBRow>


                       <MDBRow>

<MDBCol md="6" className="mt-5 mb-5 offset-md-3">
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
