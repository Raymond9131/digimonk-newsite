import React, { Component } from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";
import Typewriter from 'typewriter-effect';
import { MDBContainer, MDBRow, MDBCol, MDBLink, MDBAnimation, MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
MDBIcon, MDBMask, MDBView, MDBCard, MDBCardBody    } from "mdbreact";
import { Link } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Navbar />

<div className="banner">
<MDBContainer className="smoth-banner">
  
 <MDBRow>
     <MDBCol md="12">
     <MDBAnimation  type="fadeInUp">
<div className="banner-title">
<h2><span className="is-display-block">Let’s Turn Your Business Goals Into Reality. </span>
<div className="typedbox">
        <div className="ty"> {/*<span className="with"> </span>*/}
            <Typewriter
                    options={{
                      strings: [
                      
                        "Build Your Dream Project",
                        "Build Your Dream Project",
                      
                      ],
                      autoStart: true,
                      loop: true,
                      typeSpeed: 80,
                    }}
                  />
          </div>

</div>
</h2>
</div>

<div className="toptitle">
        <p>We help clients by bridging the gap between business needs and technology, creating easy-to-use, scalable innovations that makes ideas a reality.</p>
      </div>
      <a href="#" className="HomeHeroLink is-link uk-text-danger"> Sign Up for Free Consultation </a> 
     
</MDBAnimation>
     </MDBCol>
     </MDBRow>   
</MDBContainer>

</div>

<div className="happyclient linebg">
<MDBContainer>

<MDBRow>
<MDBCol md="12">
  <div className="digi-title">
<span className="digi-text-background">32</span>
</div>
</MDBCol>

<MDBCol md="5">
<MDBAnimation reveal type="fadeInLeft">
<div className="sponser">
<span>Our Customers Consider Us to be their Number One Choice</span>

</div>
<div className="digi-pragrap">
A Worldwide Web and Mobile App Development Company.
400+ Project Completed | 1000+ Successful Apps Developed | Ranked #1 on Many B2B Portals | ISO Certified

</div>

<div className="clientbox">
<MDBLink to="#" className="btn btn-red btn-rounded">Sign Up Now</MDBLink>

</div>
</MDBAnimation>
</MDBCol>
<MDBCol md="7">
<MDBAnimation reveal type="fadeInRight">
<div className="client-logo">
<ul>
  <li><div><img src={require('../images/sponsors-logo-01.svg')}/></div></li>
  <li><div><img src={require('../images/sponsors-logo-02.svg')}/></div></li>
  <li><div><img src={require('../images/sponsors-logo-03.svg')}/></div></li>
  <li><div><img src={require('../images/sponsors-logo-04.svg')}/></div></li>
  <li><div><img src={require('../images/sponsors-logo-05.svg')}/></div></li>
  <li><div><img src={require('../images/sponsors-logo-06.svg')}/></div></li>
  <li><div><img src={require('../images/sponsors-logo-10.svg')}/></div></li>

</ul>

</div>
</MDBAnimation>
</MDBCol>

</MDBRow>

</MDBContainer>

</div>

<div className="recentbox">

  <MDBContainer className="is-container">
    <div className="uk-section-primary">
      <a href="#" className="appointment">
      <div className="Overlay">
                                        <div className="is-position-center-left is-position-absolute">
                                            <p>
                                                “Fantastic plugin and very good support!”
                                            </p>
                                            <div>
                                              <p>RomanCode, CodeCanyon User</p>
                                            </div>

                                        </div>
                                        <div className="view-project"><span className="Link is-link">View Project</span></div>
                                        
                                    </div>
    <MDBRow>
      <MDBCol md="6">

 <div className="ProjectHeader">
   <div>
  <h3 className="Name is-h3">Digimonk</h3>
  <p className="Desc is-text-lead">An Enterprise-Level Technologies Appointment Booking Plugin                                                            </p>
              </div>                                          </div>
                                                    

      </MDBCol>
      <MDBCol md="6">
        <div className="enterprice">
          <img src={require('../images/artboard_2-svg.svg')} alt=""/>
        </div>
      </MDBCol>
    </MDBRow>
</a>
    </div>
  </MDBContainer>
</div>

<div className="tech">
<MDBContainer>
  <MDBRow>
    <MDBCol md="12" className="text-center">
    <MDBAnimation reveal type="fadeInUp">
<h1>Explore OurTechnologies - Artificial Intelligence ,Internet of Things 
,Intelligent Apps , Cloud Computing and so on.
</h1>
</MDBAnimation>

<div className="recentproject">
<h2>TYNELZ- Social Network for Gamers  ,  Ecommerce Grocery App.</h2>
<Link to="#" className="is-link">View more projects</Link>

</div>

    </MDBCol>


  </MDBRow>
</MDBContainer>

</div>



<div className="recentbox ">

  <MDBContainer className="is-container">
    <div className="uk-section-primary" style={{background:'rgb(146 13 15 / 66%)'}}>
      <a href="#" className="appointment">
      <div className="Overlay" style={{background:'rgb(146 13 15 / 91%)'}}>
                                        <div className="is-position-center-left is-position-absolute">
                                            <p>
                                            “We worked with Digimonk to develop a highly technical, innovative and challenging application. Unlike most development firms they knew it was essential to provide us options so we could weigh our budget, time, and usability standpoint.”
                                            </p>
                                            <div>
                                             
                                            </div>

                                        </div>
                                        <div className="view-project"><span className="Link is-link">View Project</span></div>
                                        
                                    </div>
    <MDBRow>
      <MDBCol md="6">

 <div className="ProjectHeader">
   <div>
  <h3 className="Name is-h3">Digimonk</h3>
  <p className="Desc is-text-lead">VirtualPostMail scans your US Postal Mail so you can read them online anytime & anywhere.                                                          </p>
              </div>                                          </div>
                                                    

      </MDBCol>
      <MDBCol md="6">
        <div className="enterprice homedr">
          <img src={require('../images/img-header-homepage.svg')} alt=""/>
        </div>
      </MDBCol>
    </MDBRow>
</a>
    </div>
  </MDBContainer>
</div>

<div className="ready linebg">
<MDBAnimation reveal type="fadeInUp">
<MDBContainer>
  <MDBRow>
    <MDBCol md="4">
    <div className="sponser">
<span>Work With Us </span>

</div>
    </MDBCol>
    <MDBCol md="8">
<p>We rapidly transform our self-motivated ideas and concept into new products and applications along with improving application performance, thus reducing the complexities
   of business operations and accelerating the business output or efficiency of our clients.</p>

    </MDBCol>
  </MDBRow>
</MDBContainer>
</MDBAnimation>
</div>

<div className="mobile-app-section linebg">

  <MDBContainer>
    <MDBRow>

      <MDBCol md="4">
      <MDBAnimation reveal type="fadeInLeft">
        <div className="mobile-img">
          <img src={require('../images/mobile.png')} alt=""/>
        </div>
        </MDBAnimation>
        </MDBCol>
      <MDBCol md="8">
        <div className="mobile-text">
        <MDBAnimation reveal type="fadeInLeft">
          <h2>Where innovation Meets excellence</h2>
          <p>We rapidly transform our self-motivated ideas and concept into new products and applications along with improving application performance, thus reducing 
            the complexities of business operations and accelerating the business output or efficiency of our clients.</p>
             </MDBAnimation>

             <ul>
               <li>
               <MDBAnimation reveal type="fadeInUp">
                 <h3>32</h3>
                 <div className="mobile-fring">
                 EMPLOYEES
                 </div>
                 </MDBAnimation>
               </li>
               <li>
               <MDBAnimation reveal type="fadeInDown">
                 <h3>$28M</h3>
                 <div className="mobile-fring">
                 INVESTED
                 </div>
                 </MDBAnimation>
               </li>

               <li>
               <MDBAnimation reveal type="fadeInUp">
                 <h3>82%</h3>
                 <div className="mobile-fring">
                 SUCCESS RATE
                 </div>
                 </MDBAnimation>
               </li>
             </ul>
        </div>
      </MDBCol>
    </MDBRow>
  </MDBContainer>


</div>

<div className="testmononial-section test-primary">
<MDBAnimation reveal type="fadeInUp">
<MDBContainer>
      <section className='text-center my-5'>
        <h2 className='h1-responsive font-weight-bold my-5'>What Our Happy Customer Are Saying </h2>

        <MDBCarousel
         activeItem={1}
         length={3}
         showControls={true}
         showIndicators={false}
        
         slide
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId='1'>
              <div>
                <div className='mx-auto mb-4'>
                  <img
                    src='https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg'
                    className='rounded-circle img-fluid'
                    alt=''
                  />
                </div>
                <p>
                  <MDBIcon icon='quote-left' /> Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Quod eos id officiis hic tenetur
                  quae quaerat ad velit ab. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Dolore cum accusamus eveniet
                  molestias voluptatum inventore laboriosam labore sit,
                  aspernatur praesentium iste impedit quidem dolor veniam.
                </p>
                <h4 className='font-weight-bold'>Anna Deynah</h4>
                <h6 className='font-weight-bold my-3'>Founder at ET Company</h6>
               
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='2'>
              <div>
                <div className='mx-auto mb-4'>
                  <img
                    src='https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg'
                    className='rounded-circle img-fluid'
                    alt=''
                  />
                </div>
                <p>
                  <MDBIcon icon='quote-left' /> Nemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore.
                </p>
                <h4 className='font-weight-bold'>Maria Kate</h4>
                <h6 className='font-weight-bold my-3'>
                  Photographer at Studio LA
                </h6>
                
              </div>
            </MDBCarouselItem>
            <MDBCarouselItem itemId='3'>
              <div>
                <div className='mx-auto mb-4'>
                  <img
                    src='https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg'
                    className='rounded-circle img-fluid'
                    alt=''
                  />
                </div>
                <p>
                  <MDBIcon icon='quote-left' /> Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum. Sed ut perspiciatis unde omnis iste natus error
                  sit voluptatem accusantium doloremque laudantium.
                </p>
                <h4 className='font-weight-bold'>John Doe</h4>
                <h6 className='font-weight-bold my-3'>
                  Front-end Developer in NY
                </h6>
                
              </div>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </section>
    </MDBContainer>
    </MDBAnimation>

</div>


<div className="blog-section">
<MDBContainer>
<MDBCard className="my-5">
      <MDBCardBody className="text-center">
      <MDBAnimation reveal type="fadeInUp">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
        Blog  
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </p>
        </MDBAnimation>
        <MDBRow>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBAnimation reveal type="fadeInUp">
            <MDBView hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
          
            <h4 className="font-weight-bold mb-3">
              <strong>Title of the news</strong>
            </h4>
            <p>
              by <a href="#!" className="font-weight-bold">Billy Forester</a>,
              15/07/2018
            </p>
            <p className="dark-grey-text">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus
              voluptas.
            </p>
         </MDBAnimation>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBAnimation reveal type="fadeInDown">
            <MDBView hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
            
            <h4 className="font-weight-bold mb-3">
              <strong>Title of the news</strong>
            </h4>
            <p>
              by <a href="#!" className="font-weight-bold">Billy Forester</a>,
              13/07/2018
            </p>
            <p className="dark-grey-text">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis voluptatum deleniti atque corrupti quos dolores.
            </p>
            </MDBAnimation>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBAnimation reveal type="fadeInUp">
            <MDBView hover className="rounded z-depth-2 mb-4" waves>
              <img
                className="img-fluid"
                src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg"
                alt=""
              />
              <MDBMask overlay="white-slight" />
            </MDBView>
           
            <h4 className="font-weight-bold mb-3">
              <strong>Title of the news</strong>
            </h4>
            <p>
              by <a href="#!" className="font-weight-bold">Billy Forester</a>,
              11/07/2018
            </p>
            <p className="dark-grey-text">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione.
            </p>
           </MDBAnimation>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>

</MDBContainer>

</div>


<Footer/>
            </div>


        )
    }
}
