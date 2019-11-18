import React, { Component } from 'react'
import { decorator } from '@babel/types'

export default class LandingFooter extends Component {
  render() {
    return (
      <div class="footer">
        <div class="container-fluid footer-padding">
          <div class="row">
            <div className="col-sm-2">

              </div>
            
            <div class="col-sm-2 ">
              <img style={{ height: '52px', width: '130px' }} src="logo.png" />
              <ul style={{ paddingInlineStart: '0' }}>

                <div class="ftr3 footerfont">FOLLOW US AT </div>
                <li style={{ display: 'inline-block' }}>
                  <span style={{ fontSize: '11px' }}>

                    <a href="#"><img class="ftr" src="linkedin.png" /><br /></a></span>
                </li>
                <li style={{ display: 'inline-block' }}>
                  <span style={{ fontSize: '11px' }}>
                    <a href="#"><img class="ftr1" src="Instagram.png" /><br /></a></span>
                </li>
                <li style={{ display: 'inline-block' }}>
                  <span style={{ fontSize: '11px' }}>
                    <a href="#"><img class="ftr2" src="Facebook.png" /><br /></a></span>
                </li>
              </ul>
            </div>
          
           
            <div className="col-sm-2">
              <h5 className="footerfont">  FOR USERS </h5>
              <ul className="services footerele">
                <li><a href="#">SEARCH FOR PATHOLOGY</a>  </li>
                <li><a href="#">SEARCH FOR PEDIATRICS </a> </li>
                <li><a href="#">SEARCH FOR PSYSIOTHERAPHY </a> </li>
                <li><a href="#">SEARCH FOR RADIOLOGY </a> </li>
                <li><a href="#">SEARCH FOR ORTHOPEDICS</a>  </li>
                <li><a href="#"> SEARCH FOR DENTIST </a> </li>
                <li><a href="#">SEARCH FOR DERMATOLOGY </a>   </li>
                <li><a href="#">SEARCH FOR GYNECOLOGY </a>   </li>
                <li><a href="#"> SEARCH FOR PSYCHIATRY </a></li>
                <li><a href="#">SEARCH FOR NEUROLOGY </a>  </li>
                <li><a href="#">SEARCH FOR  OPTHAMALOGY</a> </li>

              </ul>

            </div>
            <div class="col-sm-2 ">
              <h5 class="footerfont">FOR HOSPITALS/CLINICS   </h5>
              <ul class="services footerele">
                <li><a href="#"> REGISTER  </a></li>
                <li><a href="#"> PLOKR </a></li>

              </ul>

            </div>
            <div class="col-sm-2">
              <h5 class="footerfont">GET IN TOUCH WITH </ h5>
              <ul class="services footerele">
                <li><a href="http://www.google.com">ABOUT US</a> </li>
             
                <li><a href="http://www.google.com">CONTACT US </ a></li>
                <li><a href="">CAREERS</a></li><br></br>
                <li class="footerfont footer-margin">REACH US AT </li><br></br>
                <li class="footer-margin2"><a href="http://www.google.com" >info@plunes.com</a><br></br></li>

              </ul>
            </div>
            <div className="col-sm-1">
              </div>
            
            

          </div>
          <div class="">
            <div class="row align-items-center _brdr_bt">
              <p class="col-lg-12 col-sm-12 footer-text m-0 text-center footerlast ">
                © 2019 Plunes · All rights reserved · Terms of use · Privacy Policy
       </p>
            </div>
          </div>
        </div>

      </div>

    )
  }
}

