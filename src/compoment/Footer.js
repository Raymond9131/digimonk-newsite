import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBView, MDBIcon, MDBMask } from "mdbreact";
import { Link } from 'react-router-dom';

export default class Footer extends Component {
    render() {
        return (

            <div>



<div className="appdeveloment">
<MDBContainer fluid>

<MDBRow className="no-gutters">
  <MDBCol md="6">
  <MDBView hover zoom className="zooming bg-left">
              <img
                src={require('../images/left-cta-bg.jpg') } alt=""
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
              <div  className="web befo">
        
        <Link to="/">
<div className="looking">
<h3>Artifitial intelligence Technologies</h3>
<p>Android App Development, React Native App Development, iOS App Development..</p>
<span className="Link is-link is-link1 ">Contact Us</span>
</div>
</Link>
      </div>
              </MDBMask>
            </MDBView>
  </MDBCol>

  <MDBCol md="6">
  <MDBView hover zoom className="zooming bg-right">
              <img
                src={require('../images/services-cta-1.jpg') } alt=""
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
              <div  className="web">
        
        <Link to="/">
<div className="looking">
<h3>Machine learning Technologies</h3>
<p>Android App Development, React Native App Development, iOS App Development..</p>
<span className="Link is-link is-link2">Contact Us</span>
</div>
</Link>
      </div>
              </MDBMask>
            </MDBView>
  </MDBCol>

</MDBRow>

</MDBContainer>
  
</div>


               <MDBFooter className="uk-section-secondary pt-5" color="white">
      <MDBContainer className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
              <div className="footer-bg">
           <img src={require('../images/footer-logo.png')} alt=""/>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
           
           <div className="socails-icon pb-5 pt-3">
            <Link to="/" className="btn-fb waves-effect waves-light"><MDBIcon fab icon="facebook-f" /></Link>
            <Link to="/" className="btn-tw waves-effect waves-light"><MDBIcon fab icon="twitter" /></Link>
            <Link to="/" className="btn-li waves-effect waves-light"><MDBIcon fab icon="linkedin-in" /></Link>
            <Link to="/" className="btn-ins waves-effect waves-light"><MDBIcon fab icon="instagram" /></Link>

           </div>
    
            </div>
          </MDBCol>
          <MDBCol md="3">
              <div className="quicklink">
            <h3 className="title">Who We Are</h3>
            <ul>
              <li className="list-unstyled">
                <a href="#">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">About Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Services</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Portfolio</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Gallery</a>
              </li>
              <li className="list-unstyled">
                <a href="/career">Carrer</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contact Us</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Pay Now</a>
              </li>

            </ul>
            </div>
          </MDBCol>

          <MDBCol md="5">
              <div className="quicklink">
            <h3 className="title">What We Do</h3>
            <ul>
              <li className="list-unstyled">
                <a href="#">Website Development</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Android/IOS Development</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">DevOps Development</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Digital Marketing/SEO</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">UI Design</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Graphic Designing</a>
              </li>
              

            </ul>
            </div>
          </MDBCol>

        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://digimonk.in/"> Digimonk Technologies</a>
        </MDBContainer>
      </div>
    </MDBFooter>
            </div>
        )
    }
}
