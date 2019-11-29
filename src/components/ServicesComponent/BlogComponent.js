
import React, { Component } from 'react';
import '../ServicesComponent/BlogComponent.css'
import LandingHeader from '../LandingComponent/LandingHeader'
import LandingFooter from '../LandingComponent/LandingFooter'
import { Helmet } from "react-helmet";

class BlogComponent extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <Helmet>
                    <meta charSet="utf-8" />
                    <link rel="canonical" href="/plockr" />
                    <title>India's first cross-functional Integrated platform for EMRs </title>
                    <meta name='keywords' content='plockr, EMR, electronic medical records, cloud solution'></meta>
                    <meta name="description" content="EMRs stands for Electronic Medical Records. Get the doctor’s remarks & medical reports delivered directly in your PLOCKR ID, for a seamless experience.">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>

                <div className='container-fluid'>

                    <div className="container-fluid">
                        <img style={{ width: '100%' }} src="blog2.png" />
                    </div>
                    <div className='row justify-content-center'>

                        <h1 className="ploker-header">BLOG</h1>
                    </div>
                    <div className="row">
                        {/* <div className="col-sm-1">
                            
                        </div> */}
                        <div className="col-sm-4">
                        <div class="card card-blog" >
                                <img src="/blog5.png" class="card-img-top" />
                                <div class="card-body">
                                    <h3 class="card-title">Dental Complications with Healthy Suggestions</h3>
                                    <p class="card-text">Space for text, space for text, space for text, space for text, space for text, space for text, space for text</p>
                                    <a href="#" class="btn btn-primary blog-button">View more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                        <div class="card card-blog" >
                                <img src="/blog3.png" class="card-img-top" />
                                <div class="card-body">
                                    <h3 class="card-title">Key Benefits of: Teeth Whitening</h3>
                                    <p class="card-text">Space for text, space for text, space for text, space for text, space for text, space for text, space for text</p>
                                    <a href="#" class="btn btn-primary blog-button">View more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                        <div class="card card-blog" >
                                <img src="/blog1.png" class="card-img-top" />
                                <div class="card-body">
                                    <h3 class="card-title">Your Complete Guide: Root Canal Treatment</h3>
                                    <p class="card-text">Space for text, space for text, space for text, space for text, space for text, space for text, space for text</p>
                                    <a  href="#" class="btn btn-primary blog-button">View more</a>
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-sm-1">
                        </div> */}


                    </div>

                </div>
                <LandingFooter />
            </div>
        );
    }
}
export default BlogComponent;