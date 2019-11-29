import React, { Component } from 'react';
import '../ServicesComponent/AboutusComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
class AboutusComponent extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div>
                    <LandingHeader />
                </div>

                <div className='container-fluid'>
                    <div className='row justify-content-center'>

                        <h1 className="ploker-header">ABOUT US</h1>
                    </div>

                    <div className="row about-us">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-5">
                            <img className="col" style={{ width: '600px' }} src="doctor.png" />


                        </div>
                        <div className="col-sm-5">
                            <p className="plunes-is">Plunes is building India's first utility network, which helps you find instant solutions to your all healthcare problems. We are an AI powered utility network, which helps you find curated, validated & cost effective solutions to your all healthcare problems. Our technology enables every individuals to have their own doctor anywhere anytime as well as have the experience of solving the problems of clients in real time.
                                    </p>


                        </div>
                        <div className="col-sm-1">
                        </div>


                    </div>
                    <br></br>   <br></br>
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-10">
                            <p className="our-i">
                                Our AI is very advanced and acts as an assistant to everyone on the platform. It assist users in curating professionals and price, on the other hand, it acts as an assistant for professionals as well. Plunes is the one stop solution for Diagnostic, Consultation and Procedures.
                                             </p>
                        </div>
                        <div className='col-sm-1'>
                        </div>

                    </div>


                </div>
                <LandingFooter />
            </div>
        );
    }
}
export default AboutusComponent;