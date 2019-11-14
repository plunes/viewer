import React, { Component } from 'react'
import { decorator } from '@babel/types'

export default class LandingFooter extends Component {
    render() {
        return (
  <div class="footer">
  <div class="container">
    <div class="row">
      <div class="col-sm-3 col">
        <img style={{height: '52px', width:'130px'}}  src="logo.png" />
        <ul style={{paddingInlineStart: '0'}}>

          <div class="ftr3 footerfont">FOLLOW US AT </div>
          <li style={{display: 'inline-block'}}>
            <span style={{fontSize:'11px'}}>

              <a href="#"><img class="ftr" src="linkedin.png" /><br /></a></span>
          </li>
          <li style={{display: 'inline-block'}}>
            <span style={{fontSize:'11px'}}>
              <a href="#"><img class="ftr1" src="instagram.png" /><br /></a></span>
          </li>
          <li style={{display: 'inline-block'}}>
            <span style={{fontSize:'11px'}}>
              <a href="#"><img class="ftr2" src="facebook.png" /><br /></a></span>
          </li>
        </ul>
      </div>

      <div class="col-sm-3 col ">
        <h5 class="footerfont">SERVICES</ h5>
            <ul class="services footerele ">
              <li><a href="http://www.google.com">SOLUTIONS </a> </li><br></br>
              <li><a href="http://www.google.com">DIAGNOSTIC </a> </li><br></br>
              <li><a href="http://www.google.com">PROCEDURE</a> </li><br></br>
              <li><a href="http://www.google.com"> PLOCKR</a> </li><br></br>
              <li><a href="http://www.google.com">EARN </a> </li><br></br>
              <li> </li><br></br>

            </ul>
      </div>
      <div class="col-sm-3 col">
        <h5 class="footerfont">GET IN TOUCH WITH </ h5>
            <ul class="services footerele">
              <li><a href="http://www.google.com">ABOUT US</a> </li><br></br>
              <li><a href="http://www.google.com">CONTATC US </ a></li><br></br>
              <li class="footerfont footer-margin">REACH US AT </li><br></br>
              <li class="footer-margin2"><a href="http://www.google.com" />info@plunes.com<br></br></li>
            </ul>
      </div>
      <div class="col-sm-3 col">
        <h5 class="footerfont">CAREERS</h5>
            <ul class="services"><br></br>
              <li class="footerfont">AVAILAVEL ON</li><br></br>
              <li>
                <ul style={{paddingInlineStart: '0'}}>
                  <li style={{display: 'inline-block'}}>
                    <span style={{fontSize:'11px'}}>
                    <a href="#"><img className="footer-pic2" src="play.png" /></a></span>
                  </li>
               <li style={{display: 'inline-block'}}>
                <span style={{fontSize:'11px'}}>
                    <div class="footer-pic">
                    <a href="#"><img  src="apple.png" /></a></div></span>
                  </li>
                </ul>
              </li>
            </ul>
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

 