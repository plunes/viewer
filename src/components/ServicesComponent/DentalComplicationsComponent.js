
import React, { Component } from 'react';
import '../ServicesComponent/DentalComplicationsComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import {Helmet} from "react-helmet";

class DentalComplicationsComponent extends Component {
    render() {
        return (
            <div className='container-fluid'>
                 <Helmet>
                <meta charSet="utf-8" />
                <link rel="canonical" href="https://www.plunes.com/plockr" />
                <title>India's first cross-functional Integrated platform for EMRs </title>
                <meta name='keywords' content='plockr, EMR, electronic medical records, cloud solution'></meta>
                <meta name="description" content="EMRs stands for Electronic Medical Records. Get the doctor’s remarks & medical reports delivered directly in your PLOCKR ID, for a seamless experience.">
                </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                <div className="container-fluid">
                    
               



               </div>
                <LandingFooter />
            </div>
        );
    }
}
export default DentalComplicationsComponent;