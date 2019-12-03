
import React, { Component } from 'react';
import '../ServicesComponent/PrivacypolicyComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import {Helmet} from "react-helmet";

class PrivacypolicyComponent extends Component {
    render() {
        return (
            <div className='container-fluid'>
                 <Helmet>
                <meta charSet="utf-8" />
                <link rel="canonical" href="https://www.plunes.com/policy" />
                <title>Terms & Conditions | Plunes</title>
                <meta name='keywords' content='policy, confidentiality, personal information, data, terms of use, privacy policy'></meta>
                <meta name="description" content="Plunes shall post such content subject to following Terms and Conditions.">
                </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                    
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        
                        <h1 className="ploker-header">PRIVACY POLICY</h1>
                    </div>
                    <div className="row">
                        <div className="col-sm-1">
                        </div>
                        <div className="col-sm-10">
                            <p className="terms-of">
                            Thank you for visiting Plunes M/s. Plunes Technologies Private Limited (“us”, “we”, “Company” or “Plunes” is the author and publisher of the internet resource Plunes : Utility Network (“Online Platform” or “Website”) on the World Wide Web as well as the software and applications provided by Plunes Technologies Pvt. Ltd. including but not limited to the software and applications on the Website.
                            <br></br><br></br>
                             We provide assistance to users or individuals enrolled the Online Platform (“User/s”) in appointments, online consultations, curates medical professionals and prices for medical procedures and diagnostic tests through the medical and legal professionals partnering with us on the Online Platform (“Professionals”). For the purposes of this policy, “user(s)” or “you” refers to the Professionals and Users, as the case maybe. 
                             <br></br><br></br>
                             We respect the privacy of everyone who visits this Website. The confidentiality and protection of your personal information is important to us. This Privacy Policy tells you how we process and use personal information shared by you either directly with Plunes or through the Professionals. Please read this Privacy Policy before using the Website or submitting any sensitive personal information or data. 
                             <br></br><br></br>
                             All rights are reserved by the Company. The content, code and applications contained on this Website, under the domain www.plunes.com are copyright protected. Website visitors may not reproduce, copy, or redistribute content or code in any form without prior written permission from the Company except for purely personal an non-commercial uses as per the Terms of Use displayed on the Website.
                             <br></br><br></br>
                              By submitting data to us through this Website or through a Professional or upon signing up on Plunes’s, you are accepting this Privacy Policy.
                                <br></br>
                                Notwithstanding the Users’ registration as private services, by sharing the contact details on the Online Platform you are authorizing Plunes, its representatives, its business partners, Professionals and their representatives, to get in touch with the you for giving you the solution for the consultation or appointment requested by you on the Online Platform from the Professionals.
                            </p>
                            <br></br><br></br>
                            <h1 className="collection">Collection of Information
                            </h1>
                            <p className="terms-of">
                            Plunes, its officers, employees and agents (if appointed), through the Online Platform, are required to collect certain information (which may include sensitive personal informationfrom the User(s) and the Professional(s) to provide the services and assist the Users and the Professionals. In this regard, you agree and accept that you have complete authority and have obtained all consents from the data owner with regard to sharing the required data of the data owner with Plunes and Professionals, as the case maybe.

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
export default PrivacypolicyComponent;