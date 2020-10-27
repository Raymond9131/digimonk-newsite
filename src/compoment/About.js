import { MDBCol, MDBContainer, MDBRow, Link, MDBAnimation } from 'mdbreact'
import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";

export default class About extends Component {
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
                              <h1>About</h1>
                              </MDBAnimation> 
                              <MDBAnimation reveal type="fadeInUp">
                              <p>
                              Digimonk is a premier development hub for
planning, building, support and enhancement
of top-notch web applications.</p>
</MDBAnimation>
                              </div>
                          </MDBCol>
                      </MDBRow>
                  </MDBContainer>
              </div>

<div className="about-section-1">
<MDBContainer>
    <MDBRow>
        <MDBCol md="12">
        <MDBAnimation reveal type="fadeInUp">
            <div className="about-digi">
            <h2 class="Title is-h2">
            About Digimonk
        </h2>
        <div className="about-text">
            <h4>Founded in 2014, TMS was built and grown around developing our own web applications that are now used 
                by tens of thousands of businesses and people around the world.</h4>
                <h4>Today we offer application development services to companies that need to scale up their development
                     capabilities while keeping quality, improving productivity and optimizing costs.</h4>
        </div>
            </div>
            </MDBAnimation>
        </MDBCol>
    </MDBRow>
</MDBContainer>

</div>
<div className="three-section is-section linebg">
<MDBContainer>
    <MDBRow className="about-dfex ">
        <MDBCol md="6">
        <MDBAnimation reveal type="fadeInLeft">
        <div className="Content">
                    <p className="Title is-h6 is-color-red">Digimonk Founder</p>
                    <h4 className="LongTitle is-h4">TMS was founded by Gourav Jain Ph.D</h4>
                    <p className="Desc is-text">He has a vast experience with web applications development, and working with growing development teams and global business. This helped setup TMS and our processes in a way that bridges the gap between business needs and programmer’s mindset.</p>
                </div>
                </MDBAnimation>
        </MDBCol>
        <MDBCol md="6">
        <MDBAnimation reveal type="fadeInRight">
            <img src={require('../images/mg_0042.jpg')} alt=""/>
            </MDBAnimation>
        </MDBCol>
    </MDBRow>
</MDBContainer>

</div>

<div className="OurWork is-section">
    <MDBContainer>
        <MDBRow>
<MDBCol md="12">
<MDBAnimation reveal type="fadeInUp">
<section className="OurExpertise">
    
            <div className="OurExpertiseBG">
                <div className="Media has-swipe">
                    <img src={require('../images/our-expertise.jpg')} alt="" />
                    
                </div>
            </div>

            <div className="Content linebg">
            <MDBAnimation reveal type="fadeInUp">
                    <h4>Our Expertise</h4>
               </MDBAnimation>
               
                <div className="Desc is-text">
                <MDBAnimation reveal type="fadeInUp">
                    <p>Working on large-scale applications in a wide variety of business fields, from fintech to marketing automation,
                        helped us acquire broad
                         experience with developing complex solutions that require high level of security, integration with remote APIs and 
                         interaction with large amounts of data.</p>
</MDBAnimation>
<MDBAnimation reveal type="fadeInUp">

<p>We rely on best practices and tools for delivering clean, high quality code, and optimal data processing algorithms.
</p>   
</MDBAnimation>             </div>
            </div>
        </section>
        </MDBAnimation>
</MDBCol>
        </MDBRow>
    </MDBContainer>
</div>

<div className="srrvicesblock linebg">
    <MDBContainer>
        <MDBRow>
        <MDBCol md="12">
        <section className="OurServices">
            <div className="Content linebg">
            <MDBAnimation type="fadeInUp">
                    <h4>Our Services</h4>
                </MDBAnimation>
                <div className="Desc is-text">
                <MDBAnimation reveal type="fadeInUp">
                    <p>Our services are tailored to the needs of fast growing tech and development companies that are looking for software development expertise - either with just coding, or with managing the whole software development and delivery process.</p>

</MDBAnimation>

<MDBAnimation reveal type="fadeInUp">
<p>We use our Full-App-Lifecycle approach to make sure products are deployed on time and built according to your needs.</p>  
</MDBAnimation> 
<p><a href="/services" className="link is-link">Learn More</a></p>        
     </div>
                
            </div>
           
            <div className="OurServicesBG">
                <div className="Media has-swipe">
                    <img src={require('../images/our-services.jpg')} alt=""/>
                
                </div>
            </div>
           
        </section>
        </MDBCol>
        </MDBRow>
    </MDBContainer>
</div>
<div className="Technologies uk-section-primary">
<MDBContainer>
    <MDBRow>
        <MDBCol md="12">
            <div className="tech-box ">
            <MDBAnimation reveal type="fadeInUp">
            <h2>Technologies we use</h2>
            </MDBAnimation>
            <MDBAnimation reveal type="fadeInUp">
            <p className="Desc is-text-lead">We develop web applications using up-to-date technology stack, which includes: PHP, Symfony, Laravel, WordPress, AngularJS, Node.js, React, Vue, Slim, Silex and other tools - we keep 
            learning and evolving together with the industry, adding new tools to our toolbox whenever we can.</p>
            </MDBAnimation>
            </div>
        </MDBCol>

<MDBCol sm="3">
<MDBAnimation reveal type="fadeInUp">
    <div className="tech-logo">
    <img src={require('../images/logo-1-php-1.svg')} alt=""/>
    </div>
    </MDBAnimation>
</MDBCol>
<MDBCol sm="3">
<MDBAnimation reveal type="fadeInDown">
<div className="tech-logo">
    <img src={require('../images/logo-3-laravel.svg')} alt=""/>
    </div>
    </MDBAnimation>
</MDBCol>
<MDBCol sm="3">
<MDBAnimation reveal type="fadeInUp">
<div className="tech-logo">
    <img src={require('../images/logo-5-node.svg')} alt=""/>
    </div>
    </MDBAnimation>
</MDBCol>
<MDBCol sm="3">
<MDBAnimation reveal type="fadeInDown">
<div className="tech-logo">
    <img src={require('../images/logo-6-vue.svg')} alt=""/>
    </div>
    </MDBAnimation>
</MDBCol>
<MDBCol sm="3">
<MDBAnimation reveal type="fadeInUp">
<div className="tech-logo">
    <img src={require('../images/logo-7-react.svg')} alt=""/>
    </div>
    </MDBAnimation>
</MDBCol>
<MDBCol sm="3">
<MDBAnimation reveal type="fadeInDown">
<div className="tech-logo">
    <img src={require('../images/logo-8-jquery.svg')} alt=""/>
    </div>
    </MDBAnimation>
</MDBCol>
<MDBCol sm="2">
<MDBAnimation reveal type="fadeInUp">
<div className="tech-logo">
    <img src={require('../images/logo-10-sql.svg')} alt=""/>
    </div>
    </MDBAnimation>
</MDBCol>

<MDBCol sm="2">
<MDBAnimation reveal type="fadeInDown">
<div className="tech-logo">
    <img src={require('../images/logo-11-html.svg')} alt=""/>
    </div>
    </MDBAnimation>

</MDBCol>
<MDBCol sm="2">
<MDBAnimation reveal type="fadeInUp">
<div className="tech-logo">
    <img src={require('../images/logo-12-css-1.svg')} alt=""/>
    </div>
    </MDBAnimation>
</MDBCol>

    </MDBRow>
</MDBContainer>

</div>
              <Footer/>
            </div>
        )
    }
}
