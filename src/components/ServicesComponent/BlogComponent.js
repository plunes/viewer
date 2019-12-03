
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
                <link rel="canonical" href="https://www.plunes.com/blog" />
                <title>The Plunes Blog</title>
                <meta name='keywords' content='healthy suggestions, dental complications, key benefits, teeth whitening, complete guide, root canal treatment'></meta>
                <meta name="description" content="Welcome to the Plunes Blog! We seek to educate our readers about the benefits of our unique product & give an informative approach to their treatments.">
                </meta>
                </Helmet>
                <div>
                    <LandingHeader />
                </div>

                <div className='container-fluid'>

                    <div className="container-fluid">
                        <img className="blog-front-img" src="blog2.png" />
                    </div>
                    <div className='row justify-content-center'>

                        <h1 className="blog-header">BLOG</h1>
                    </div>
                    <div className="row">
                        {/* <div className="col-sm-1">
                            
                        </div> */}
                        <div className="col-sm-4">
                        <div class="card card-blog" >
                                <img src="/blog5.png" class="card-img-top blog-img" />
                                <div class="card-body">
                                    <h3 class="card-title">Dental Complications with Healthy Suggestions</h3>
                                    <p class="card-text">Dental problems are very common these days also can't be ignored. Almost everyone at some stage of life would face dental problems in different forms</p>
                                    <a href="/dentalcomplications" class="btn btn-primary blog-button">View more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                        <div class="card card-blog" >
                                <img src="/blog3.png" class="card-img-top blog-img" />
                                <div class="card-body">
                                    <h3 class="card-title">Key Benefits of: Teeth Whitening</h3>
                                    <p class="card-text">Are you conscious about your teeth before you can laugh freely? Though you are flossing twice a day but no improvement with your yellow teeth?</p>
                                    <a href="/teethwhitening" class="btn btn-primary blog-button">View more</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                        <div class="card card-blog" >
                                <img src="/blog1.png" class="card-img-top blog-img " />
                                <div class="card-body">
                                    <h3 class="card-title">Your Complete Guide: Root Canal Treatment</h3>
                                    <p class="card-text">Despite of how scary it feels to undergo Root Canal Treatment, it is ensured that the procedure helps to remove the infected tissue or canal successfully and gives you much relief from the teeth pain</p>
                                    <a  href="/rootcanal" class="btn btn-primary blog-button">View more</a>
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