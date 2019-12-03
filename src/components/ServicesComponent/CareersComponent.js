
import React, { Component } from 'react';
import '../ServicesComponent/CareersComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import {Helmet} from "react-helmet";

class CareersComponent extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Helmet>
                <meta charSet="utf-8" />
                <link rel="canonical" href="https://www.plunes.com/careers" />
                <title>Plunes Careers | Jobs at Plunes</title>
                <meta name='keywords' content='dream job, we are looking for you, plunes, career'></meta>
                <meta name="description" content="Dream job is not a myth anymore! At Plunes we believe in teaming up innovation with focus & creativity. Apply to jobs at Plunes & let your career flourish.">
                </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        <h1 className="ploker-header">CAREER</h1>
                    </div>
                    <div className='row ploker-align'>
                        <div className='col-md-1'>
                        </div>
                        <div className='col-sm-5'>
                            <img className="career-img" src="careers.png" />
                        </div>
                        <div className='col-sm-4'>
                            <div className='row'>

                                <div className='row'>
                                    <h2 className="we-believe">We believe that Dream Job is not a myth!</h2>
                                    <h3 className="we-believe-in">We believe in creating a world that inspires ease of life!</h3>
                                </div>
                                <div className='row'>
                                    <p className="career-pera">
                                        It isn’t every organization that seeks to change the face of the business world. This takes exceptional technology along with exceptional people. That’s where you come in!<br></br><br></br>
                                        We are seeking talented individuals who thrive on innovation, focus and teaming up. If this rings a bell then we are looking for you!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-1'>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <h1 className="what-we-have">What we have for you</h1>
                    </div>
                    <hr width="10%" color="#01D35A" ></hr>

                    <div className="row career-grid">
                        <div className="col-sm-1  ">
                        </div>
                        <div className="col-sm-2 ">
                            
                            <img className="img-width" src="building_green.png" />
                            <p className="img-font">Full-of-life <br></br>Office</p>
                        </div>
                        <div className="col-sm-2 grid-box-align">
                            
                            
                            <img className="img-width" src="people.png" />

                            <p className="img-font">Working with a <br></br>talented team
                                    </p>
                        </div>
                        <div className="col-sm-2 grid-box-align">
                            <img className="img-width" src="earth.png" />
                            <p className="img-font">The satisfaction<br></br> of building something<br></br> Phenomenal
                                    </p>
                        </div>
                        <div className="col-sm-2 grid-box-align">
                            <img className="img-width" src="largest.png" />
                            <p className="img-font">Largest pool of <br></br>ESOPs reserved for<br></br> employees
                                    </p>
                        </div>
                        <div className="col-sm-3">
                                    </div>

                    </div>
                    <div className="row justify-content-center ">
                        <h1 className="career-header">Our 5-stage Recruitment Process</h1>
                    </div>
                    <hr width="10%" color="#01D35A" ></hr>
                    <div className="row careers-grid2">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-2 col">
                            <img className="img-width2" src="mssg.png" />
                            <p className="img-font">Review
                            </p>
                            <p  className="careers-content">
                            We review all the awesome applications to screen for a variety of criteria.
                            </p>
                        </div>
                        <div className="col-sm-2 col">
                            <img className="img-width2" src="tele.png" />
                            <p className="img-font">Telephonic Interview
                            </p>
                            <p  className="careers-content">
                            We conduct initial introduction so that we can know how amazing you are.
                                
                            </p>
                        </div>
                        <div className="col-sm-2 col">
                            <img className="img-width2" src="notepad.png" />
                            <p className="img-font">Task
                            </p>
                            <p className="careers-content">
                            We give a small but relevant task to judge your technical caliber.
                            </p>
                        </div>
                        <div className="col-sm-2 col">
                            <img className="img-width2" src="f2f_green.png" />
                            <p className="img-font" >F2F Interview
                            </p>
                            <p className="careers-content">
                            You made it through the toughest. Let’s meet for coffee! 
                            </p>
                        </div>
                        <div className="col-sm-2 col ">
                            <img className="img-width2" src="offer.png" />
                            <p className="img-font">Offer
                            </p>
                            <p  className="careers-content">
                            We make the job offer to the selected one who is the best fit for the role.
                            </p>

                        </div>
                        <div className="col-sm-1 col">
                            </div>



                    </div>
                    <div className="row justify-content-center">
                        <h1 className="what-we-have">Current Openings</h1>
                    </div>
                    <hr width="10%" color="#01D35A" ></hr>
                    <div className="container-fluid">
                        <div className="row careers-grid3">
                            <div className="col-sm-3">
                                <div className="box">
                                    <p class="box-text">Software Engineer</p>
                                    <p className="box-content">Gurugram | 3 Years</p>
                                    <button className="btn career-button">View job details</button>
                                    </div>
                                </div> 
                                <div className="col-sm-3">
                                <div className="box">
                                    <p  class="box-text">Brand Manager</p>
                                    <p className="box-content">Gurugram | 5 Years</p>
                                    <button className="btn career-button">View job details</button>
                                </div>
                                </div>
                                <div className="col-sm-3">
                                <div className="box">
                                    <p  class="box-text">Marketing Intern</p>
                                    <p className="box-content">Gurugram | Internship</p>
                                    <button className="btn career-button">View job details</button>

                                    </div>
                                </div>
                                <div className="col-sm-3">
                                <div className="box">
                                    <p  class="box-text">Business Development Intern</p>
                                    <p className="box-content">Gurugram | Internship</p>
                                    <button className="btn career-button">View job details</button>

                                    </div>
                                </div>
                                <div className="row box-align">
                                    </div>
                                <div className="col-sm-3 grid-box-3">
                                <div className="box">
                                    <p  class="box-text">Operation Executive</p>
                                    <p className="box-content">Gurugram | 3 Years</p>
                                    <button className="btn career-button">View job details</button>

                                    </div>
                                

                                    </div>
                            
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-1">
                                </div>
                                <div className="col-sm-10">
                            <p className="if-u">If you don’t find any relevant position here, don’t worry. We are always looking for talent. Send us our resume and we will be happy to review it.</p>
                            </div>
                                <div className="col-sm-1">
                                    </div>


                            </div>
                            <div className="row justify-content-center ">
                        <h1 className="career-header">Submission Form</h1>
                    </div>
                    <hr width="10%" color="#01D35A" ></hr>


                        <div className="container">
                        <form>
                   <table width="100" class="table table-bordered">
                 <thead>
                   <tr>
                      <th >NAME</th>
                          <th >Enter Name</th>
        
                              </tr>
                             </thead>
                         <tbody>
                                   <tr>
                          <td>Phone Number</td>
                        <td><input className="form-control-contactus" name="fullName" placeholder="Mobile Number" onChange={this.handleChange} required/>
                       </td>
        
                   </tr>
                     <tr>
                 <td>Email Id</td>
                  <td> <input className="form-control-contactus" name="fullName" placeholder="Enter Email Id" onChange={this.handleChange} required/>
                </td>
       
                     </tr>
            <tr>
                <td>Attach Resume</td>
          <td>
              <input type="file"/>
            </td>
            
                    </tr>
                </tbody>
                     </table>
                        
                         <button type="submit" className="btn btn-success careers-button ">Submit</button>
                        
                         </form>
                         </div>
                     </div>
                     <div className="row justify-content-center ">
                        <h1 className="career-header">Employment Policy</h1>
                    </div>
                    <hr width="10%" color="#01D35A" ></hr>
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                    <p className="if-u">Plunes's policy is to provide equal employment opportunities to all applicants and employees without regard to race, color, religion, creed, gender, gender identity or expression, age, national origin or ancestry, citizenship, disability, sexual orientation, marital status, pregnancy, veteran status, membership in the uniformed services, genetic information, or any other basis protected by applicable law. Plunes follows all legal and government regulations including those set forth by The Government of India.</p>
                        </div>
                            
                        </div>
                    <div className="row justify-content-center">
                        <h1 className="career-header">Disclaimer</h1>
                        </div>
                    <hr width="10%" color="#01D35A" ></hr>
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-10">
                        <p className="if-u">Our careers site is only for individuals seeking a position with Plunes Technologies Pvt. Ltd. Staffing and recruiting agencies and individuals being represented by an agency are not authorized to use this site or to submit profiles, applications, or resumes, and any such submissions will be considered unsolicited. Plunes does not accept unsolicited resumes or applications from agencies. Please do not forward resumes to our job alias, Plunes employees, or any other company location. Plunes is not responsible for any fees related to unsolicited resumes/applications. 
                        <br></br>
                       
                        Any offer (s) of employment are contingent upon a satisfactory background and criminal records check, which will be conducted in accordance with local legal regulations.</p>
                        
                        </div>
                        <div className="col-sm-1"></div>                        
                        </div>


                
                <LandingFooter />       
            </div>
        );
    }
}
export default CareersComponent;