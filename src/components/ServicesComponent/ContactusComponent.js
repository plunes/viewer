import React, { Component } from 'react';
import '../ServicesComponent/ContactusComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";

class ContactusComponent extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <link rel="canonical" href="https://www.plunes.com/contact" />
                    <title>Contact Us - Plunes</title>
                    <meta name='keywords' content='contact us, email id, you can ask us, phone number, comment, get in touch'></meta>
                    <meta name="description" content="Got any suggestions or have queries regarding our product? Need support or any other service? Just let us know and we will get right back to you!">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>

                <div className='container-fluid'>
                    <div className='row justify-content-center'>

                        <h1 className="ploker-header">CONTACT US</h1>
                    </div>
                    <div className="section">
                        <div className="row contact-us justify-content-center">
                            
                            <div class="card" style={{ width: '18rem' }}>
                                <img className="contact-img" src="/inbox.png" />
                                <div className="card-body font">
                                    <h5 class="card-title">Email</h5>
                                    <p class="card-text">info@plunes.com</p>

                                </div>
                            </div>
                           

                        </div>
                    </div>
                    <div className="section">
                        <form>
                            <div className='row justify-content-center'>
                                <h1 className="contact-header">Get In Touch</h1>
                            </div>
                            <hr width="10%" color="#01D35A" ></hr>
                            <div className="row">
                                <div className = 'col-sm-3'></div>
                                <div className = 'col-sm-6'>
                                    <div className = 'row'>
                                        <div className = 'col'>
                                        <input className="contact-us-form" name="firstname" placeholder="Name" />
                                        </div>
                                        <div className = 'col'>
                                        <input className="contact-us-form" name="firstname" placeholder="Email ID" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className = 'col'>
                                        <textarea placeholder="Message" className="contact-textarea"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className = 'col-sm-3'></div>
                               
                            </div>
                           
                            <div className="row">
                                <div className="col-sm-4">
                                </div>
                                <div className="col-sm-4">
                                    <button className="contactus-button">Submit</button>
                                </div>
                                <div className="col-sm-4">
                                </div>
                            </div>
                        </form>
                    </div>


                </div>
                <LandingFooter />
            </div>
        );
    }
}
export default ContactusComponent;