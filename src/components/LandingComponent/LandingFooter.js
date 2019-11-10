import React, { Component } from 'react'

export default class LandingFooter extends Component {
    render() {
        return (
            <div className='container landingFooter'>
                <div className='row '>
                    <div className='col'>
                        <div className='row'>
                            <img src='./logo.png' alt='no image' height='60px' width='150px'  />
                        </div>
                        <div className='row' style={{ marginTop: '30px' }}>
                            <h6 className = 'headingFooter'>FOLLOW US AT</h6>
                        </div>
                        <div className='row'>
                            <span className = 'icon'>
                                <img src = './Facebook.png' height = '35px' width = '35px'>
                                </img>
                            </span>
                            <span className = 'icon'>
                                <img src = './Linkedin.png' height = '35px' width = '35px'>
                                </img>
                            </span>
                            <span className ='icon'>
                            <img src = './Instagram.png' height = '35px' width = '35px'>
                                </img>
                            </span>
                        </div>
                    </div>
                    <div className='col'>
                        <h6 className = 'headingFooter'>SERVICES</h6>
                        <a href='http://plunes.com/solutions.html' style={{ color: 'grey', fontSize : '14px' }}>SOLUTIONS<br></br></a>
                        <a href='./' style={{ color: 'grey', fontSize : '14px' }}>DIAGNOSTICS<br></br></a>
                        <a href='./' style={{ color: 'grey', fontSize : '14px' }}>PROCEDURES<br></br></a>
                        <a href='http://plunes.com/plocker.html' style={{ color: 'grey', fontSize : '14px' }}>PLOCKR<br></br></a>
                        <a href='http://plunes.com/earn.html' style={{ color: 'grey', fontSize : '14px' }}>EARN<br></br></a>
                    </div>
                    <div className='col'>
                        <div className='row'>
                            <div className = 'col'>
                                <h6 className = 'headingFooter'>GET IN TOUCH WITH</h6>
                                <a href='http://plunes.com/about.html' style={{ color: 'grey', fontSize : '14px' }}>ABOUT US<br></br></a>
                                <a href='./' style={{ color: 'grey', fontSize : '14px' }}>CONTACT US<br></br></a>
                            </div>
                        </div>
                        <div className='row' style = {{marginTop: '20px'}}>
                            <div className = 'col'>
                                <h6 className = 'headingFooter' style = {{marginBottom:'0px'}}>REACH US AT</h6>
                                <a href='./' style={{ color: 'grey', fontSize : '14px' }}>info@plunes.com<br></br></a>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <a href = 'http://plunes.com/careers.html' className = 'headingFooter' ><h6 >CAREERS</h6></a>
                        <h6 className = 'headingFooter' style = {{marginTop : '30px'}}>AVAILABLE ON</h6>
                        <a href="https://play.google.com/store/apps/details?id=com.plunes&hl=en"><img src= './Play-Store.png' alt = '../' height = '57px' width = '50px'></img></a>
                        

                       <a href="https://apps.apple.com/us/app/plunes/id1463747553?ls=1"> <img src= './Apple.png' alt = '../' height = '57px' width = '50px' style = {{marginLeft : '20px'}} ></img></a>
                    </div>
                </div>
                <footer style = {{marginTop : '30px' , marginBottom: '30px'}}>
                    <p style = {{fontSize: '14px', color:'grey'}}>© 2019 Plunes <span><b>&#183;</b></span> All rights reserved <span><b>&#183;</b></span> Terms of use <span><b>&#183;</b></span> Privacy Policy</p>
                </footer>

            </div>
        )
    }
}
