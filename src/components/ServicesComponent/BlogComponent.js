
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
                    <link rel="canonical" href="https://www.plunes.com/blog" />
                    <title>Blogs | Plunes India's First Utility Network</title>
                    <meta name='keywords' content='healthy suggestions, dental complications, key benefits, teeth whitening, complete guide, root canal treatment, plunes blog, blogs, blogging'></meta>
                    <meta name="description" content="Check out the blogs to know more about Plunes India's first utility network.">
                    </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>
                <div className='container-fluid blog-margin'>
                    <div className="container-fluid">
                        <img className="blog-front-img" src="/blog2.png" alt=".." />
                    </div>
                    <div className='row justify-content-center'>
                        <h1 className="blog-header">BLOGS</h1>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card card-blog" >
                                <img src="/blog8.png" className="card-img-top blog-img" alt=".." />
                                <div className="card-body">
                                    <h3 className="card-title">Introductory Blog</h3><br></br>
                                    <p className="card-text">What is the first question that pops on your mind when you try to book a medical procedure? “Well, let’s Google It” Sounds familiar? </p>
                                    <br></br>
                                    <a href="/an-era-of-a-new-healthcare" className="btn btn-primary blog-button" title='Introductory Blog'>View more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card card-blog" >
                                <img src="/blog3.png" className="card-img-top blog-img" alt=".." />
                                <div className="card-body">
                                    <h3 className="card-title">A Complete Guide To Teeth Whitening</h3>
                                    <p className="card-text">Are you conscious about your teeth before you can laugh freely? Though you are flossing twice a day but no improvement with your yellow teeth?</p>
                                    <br></br>
                                    <a href="/teeth-whitening-complete-guide" className="btn btn-primary blog-button" title='A Complete Guide To Teeth Whitening'>View more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card card-blog" >
                                <img src="/blog1.png" className="card-img-top blog-img " alt=".." />
                                <div className="card-body">
                                    <h3 className="card-title">Touch-up Your Dental Health with Root Canal Treatment</h3>
                                    <p className="card-text">Despite of how scary it feels to undergo Root Canal Treatment, it is ensured that the procedure helps to remove the infected tissue or canal successfully and gives you much relief from the teeth pain...</p>
                                    <a href="/dental-care-root-canal-treatment" className="btn btn-primary blog-button" title='Root canal treatment'>View more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card card-blog" >
                                <img src="/blog5.png" className="card-img-top blog-img" alt=".." />
                                <div className="card-body">
                                    <h3 className="card-title">Healthy Suggestions to Avoid Dental Complications</h3>
                                    <p className="card-text">Dental problems are very common these days and can't be ignored. Almost everyone at some stage of life would face dental problems in different forms...</p>
                                    <br></br>
                                    <a href="/dental-complications-and-healthy-suggestions" className="btn btn-primary blog-button" title='Dental Complication & Healthy Suggestions'>View more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card card-blog" >
                                <img src="/blog6.png" className="card-img-top blog-img" alt=".." />
                                <div className="card-body">
                                    <h3 className="card-title">Seeking Mental Health?: Quick Counselling </h3>
                                    <p className="card-text">Mental health is often neglected and hidden for reasons like fear of rejection from society or lack of understanding...</p>
                                    <br></br>
                                    <a href="/mental-health-quick-counselling" className="btn btn-primary blog-button" title='Seeking Mental Health?: Quick Counselling'>View more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card card-blog" >
                                <img src="/blog7.png" className="card-img-top blog-img " alt=".." />
                                <div className="card-body">
                                    <h3 className="card-title">Save your Tooth with Best Dentist In Gurgaon</h3>
                                    <p className="card-text">Any pain or dirt in the tooth can simply affect your smile and overall well-being. For all your dental and oral health you need to consult a dentist...</p>
                                    <br></br>
                                    <a href="/save-your-tooth-best-dentist" className="btn btn-primary blog-button" title='Save your Tooth with Best Dentist In Gurgaon'>View more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <LandingFooter />
            </div>
        );
    }
}
export default BlogComponent;