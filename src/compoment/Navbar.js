import React, { Component } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/mmenu-js/dist/mmenu.js';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.js';


import { Link } from 'react-router-dom';
import { MDBContainer } from "mdbreact";

class NavbarPage extends Component {




render() {
  return (
    
    <div>
       
<nav className="navbar navbar-expand-lg navbar navbar-light bg-light">
<MDBContainer>
<a href="#menu" className="menubar"><i className="fas fa-bars"></i></a>
{/*<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>*/}
            <a className="navbar-brand" href="/"><img src={require('../images/footer-logo.png')} alt=""/></a>
            
            <div className="collapse navbar-collapse destop" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link">About Us</Link>
                  </li>
                  
                    <li className="nav-item dropdown has-mega-menu" style={{position: 'static'}}>
                        <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Services</a>

                        <div className="dropdown-menu bg-menu" style={{width:'100%'}}>
                            <div className="px-0 container">
                                <div className="row" style={{width:'100%'}}>
                                
                                    <div className="col-md-3">
                                      <div className="consulting-menu">
                                        <h4>Mobile Application Development</h4>
                                        <ul className="colum-menu">
                                          <li><Link to="/android-application">Android Application</Link></li>
                                          <li><Link to="/">IOS Application</Link></li>
                                          <li><Link to="/">React Native</Link></li>
                                          <li><Link to="/">Smart TV Application</Link></li>
                                          

                                          
                                         </ul>
                                        </div>
                                    </div>
                                    <div className="col-md-3">
                                    <div className="consulting-menu">
                                        <h4>UI/UX</h4>
                                        <ul className="colum-menu">
                                          
                                          <li><Link to="/">Web and Mobile</Link></li>
                                          <li><Link to="/">UI Wireframing</Link></li>
                                          <li><Link to="/">Prototype</Link></li>
                                          

                                          
                                         </ul>
                                        </div>
                                    </div>
                                  <div className="col-md-3">
                                  <div className="consulting-menu">
                                        <h4>Business &amp; Technical Consulting</h4>
                                        <ul className="colum-menu">
                                          <li><Link to="/">Ideation &amp; Requirement</Link></li>
                                          <li><Link to="/">Cloud &amp; Web Strategy</Link></li>
                                          <li><Link to="/">Product Launch Strategy</Link></li>
                                         
                                          

                                          
                                         </ul>
                                        </div>
                                    </div>


                                    


                                    <div className="col-md-3">
                                  <div className="consulting-menu">
                                        <h4>Testing Quality Assurance</h4>
                                        <ul className="colum-menu">
                                          <li><Link to="/">Performance Testing</Link></li>
                                          <li><Link to="/">Automation Testing</Link></li>
                                          <li><Link to="/">Security Audit</Link></li>
                                          <li><Link to="/">Web &amp; App Testing</Link></li>
                                         
                                          

                                          
                                         </ul>
                                        </div>
                                    </div>


                                    <div className="col-md-3">
                                  <div className="consulting-menu">
                                        <h4>Digital Marketing</h4>
                                        <ul className="colum-menu">
                                          <li><Link to="/">SEO (Google/Yahoo/Bing)</Link></li>
                                          <li><Link to="/">Lead Generation</Link></li>
                                          <li><Link to="/">Brand Promotions</Link></li>
                                          <li><Link to="/">Marketing Strategy</Link></li>
                                          <li><Link to="/">Google Ads</Link></li>
                                          

                                          
                                         </ul>
                                        </div>
                                    </div>



                                    <div className="col-md-3">
                                  <div className="consulting-menu">
                                        <h4>API Integration</h4>
                                        <ul className="colum-menu">
                                          <li><Link to="/">Payment Gateway API</Link></li>
                                          <li><Link to="/">Googles API</Link></li>
                                          <li><Link to="/">Authenticaton API</Link></li>
                                          <li><Link to="/">Shipping API</Link></li>
                                          <li><Link to="/">Social-Networking API</Link></li>
                                          <li><Link to="/">Business Listing API</Link></li>
                                          

                                          
                                         </ul>
                                        </div>
                                    </div>


                                    <div className="col-md-3">
                                  <div className="consulting-menu">
                                        <h4>BPO</h4>
                                        <ul className="colum-menu">
                                          <li><Link to="/">Voice Process</Link></li>
                                          <li><Link to="/">Non Voice Process</Link></li>
                                          <li><Link to="/">Tech Support</Link></li>
                                          
                                          

                                          
                                         </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                  <div className="consulting-menu">
                                        <h4>Cloud Services</h4>
                                        <ul className="colum-menu">
                                          <li><Link to="/">Google Cloud</Link></li>
                                          <li><Link to="/">Aws Cloud</Link></li>
                                          <li><Link to="/">Microsoft Azure</Link></li>
                                          <li><Link to="/">IBM Clouds</Link></li>
                                          

                                          
                                         </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                  <div className="consulting-menu">
                                        <h4>Custom Application</h4>
                                        <ul className="colum-menu">
                                          <li><Link to="/">Kiosk Based Application</Link></li>
                                          <li><Link to="/">AIntegration &amp; Migration Services</Link></li>
                                          
                                          

                                          
                                         </ul>
                                        </div>
                                    </div>

                                    <div className="col-md-3">
                                  <div className="consulting-menu">
                                        <h4>Hire Developers</h4>
                                        <ul className="colum-menu">
                                          <li><Link to="/">Offshore Dedicated Developer</Link></li>
                                          <li><Link to="/">Onsite Resourcing</Link></li>
                                          
                                          

                                          
                                         </ul>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                    <a href="/Portfolio" className="nav-link">Portfolio</a>
                  </li>
                  <li className="nav-item">
                    <Link to="/Blog" className="nav-link">Blog</Link>
                  </li>
                  
                  <li className="nav-item">
                    <Link to="/Gallery" className="nav-link">Gallery</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Review" className="nav-link">Review</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/ContactUs" className="nav-link">Contact Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/Paynow" className="nav-link">Pay Now</Link>
                  </li>
                </ul>
            </div>
            
            </MDBContainer>
        </nav>

       
                
        <nav id="menu">
      
                
               
                
           
                <div id="panel-menu">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li>
                        <a>Company</a>
                            <ul>
                                <li><a href="/about">About Company</a></li>
                                
                                <li><a href="/">Meet the Team</a></li>
                                        <li><a href="/">Sales</a></li>
                                        <li><a href="/">Testimonials</a></li>
                            </ul>
                        </li>


                        <li><a>Services</a>
                    <ul>
                        
                        <li><a>Mobile Application Developmment</a>
                            <ul>
                                <li><a href="#">Android Application</a></li>
                                <li><a href="#">IOS Application</a></li>
                                <li><a href="#">React Native</a></li>
                                <li><a href="#">Smart TV Application</a></li>
                            </ul>
                        </li>

                        <li><a>UI/UX</a>
                            <ul>
                                <li><a href="#">Web and Mobile</a></li>
                                <li><a href="#">UI Wireframing</a></li>
                                <li><a href="#">Prototype</a></li>
                                
                            </ul>
                        </li>

                        <li><a>Business & Technical Consulting</a>
                            <ul>
                                <li><a href="#">Ideation & Requirement</a></li>
                                <li><a href="#">Cloud & Web Strategy</a></li>
                                <li><a href="#">Product Launch Strategy</a></li>
                                
                            </ul>
                        </li>

                        <li><a>Testing Quality Assurance</a>
                            <ul>
                                <li><a href="#">Performance Testing</a></li>
                                <li><a href="#">Automation Testing</a></li>
                                <li><a href="#">Security Audit</a></li>
                                <li><a href="#">Web & App Testing</a></li>
                                
                            </ul>
                        </li>

                        <li><a>Custom Application</a>
                            <ul>
                                <li><a href="#">Kiosk Based Application</a></li>
                                <li><a href="#">Integration & Migration Services</a></li>
                                
                                
                            </ul>
                        </li>

                        <li><a>Hire Developers</a>
                            <ul>
                                <li><a href="#">Offshore Dedicated Developer</a></li>
                                <li><a href="#">Onsite Resourcing</a></li>
                                
                                
                            </ul>
                        </li>

                        <li><a>BPO</a>
                            <ul>
                                <li><a href="#">Voice Process</a></li>
                                <li><a href="#">Non Voice Process</a></li>
                                <li><a href="#">Tech Support</a></li>
                                
                            </ul>
                        </li>

                        <li><a>Cloud Services</a>
                            <ul>
                                <li><a href="#">Google Cloud</a></li>
                                <li><a href="#">Aws Cloud</a></li>
                                <li><a href="#">Microsoft Azure</a></li>
                                <li><a href="#">IBM Clouds</a></li>
                                
                            </ul>
                        </li>

                        <li><a>Digital Marketing</a>
                            <ul>
                                <li><a href="#">SEO (Google/Bing)</a></li>
                                <li><a href="#">Lead Generation</a></li>
                                <li><a href="#">Brand Promotions</a></li>
                                <li><a href="#">Marketing Strategy</a></li>
                                <li><a href="#">Google Ads</a></li>
                                
                            </ul>
                        </li>

                        <li><a>API Integration</a>
                            <ul>
                                <li><a href="#">Payment Gateway API</a></li>
                                <li><a href="#">Googles API</a></li>
                                <li><a href="#">Authenticaton API</a></li>
                                <li><a href="#">Shipping API</a></li>
                                <li><a href="#">Social-Networking API</a></li>
                                <li><a href="#">Business Listing API</a></li>
                                
                            </ul>
                        </li>


                    </ul>
                </li>

                        <li><a href="/">Portfolio</a></li>
                        <li><a href="/">Gallery</a></li>
                        <li><a href="/">Review</a></li>
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="/">Pay Now</a></li>

                        
                        
                    </ul>
                </div>

              

                
            </nav>

    </div>
    );
  }
}

export default NavbarPage;