import React, { Component } from 'react'
import { decorator } from '@babel/types'

export default class LandingFooter extends Component {
  render() {
    return (
      <div class="footer">
        <div class="container-fluid footer-padding">
          <div class="row">
            <div className="col-sm-1 futtor">
              

              </div>
            <div className="col-sm-2">
            <img className="responsive-logo" style={{ height: '52px', width: '130px' }} src="logo.png" />
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
            
            <div class="col-sm-2 ">
            <h5 className="footerfont">  FOR USERS </h5>
              <ul className="services footerele">
                <li><a href="#">PATHOLOGISTS IN GURGAON</a>  </li>
                <li><a href="#"> PEDIATRICS IN GURGAON</a> </li>
                <li><a href="#">PSYSIOTHERAPHISTS IN GURGAON </a> </li>
                <li><a href="#">RADIOLOGISTS IN GURGAON </a> </li>
                <li><a href="#"> ORTHOPEDICS IN GURGAON</a>  </li>
                <li><a href="#">  DENTIST IN GURGAON</a> </li>
                <li><a href="#">DERMATOLOGIST IN GURGAON </a>   </li>
               
              

              </ul>

              
            </div>
          
           
            <div className="col-sm-2 ">
              {/* <h5 className="footerfont">  FOR USERS </h5> */}
              <ul className="services footerele">
              <li><a href="#"> GYNECOLOGISTS IN GURGAON </a>   </li>
                <li><a href="#">  PSYCHIATISTS IN GURGAON</a></li>
                <li><a href="#">NEUROLOGISTS IN GURGAON </a>  </li>
                <li><a href="#">OPTHAMALOGISTS IN GURGAON</a> </li>

              
               
              </ul>

            </div>
            <div class="col-sm-2 ">
              <h5 class="footerfont">FOR HOSPITALS/CLINICS   </h5>
              <ul class="services footerele">
                <li><a href="#"> REGISTER  </a></li>
                <li><a href="#"> PLOCKR </a></li>

              </ul>

            </div>
            <div class="col-sm-2">
              <h5 class="footerfont">GET IN TOUCH WITH </ h5>
              <ul class="services footerele">
                <li><a href="http://www.google.com">ABOUT US</a> </li>
             
                <li><a href="http://www.google.com">CONTACT US </ a></li>
                <li><a href="">CAREERS</a></li><br></br>
                

              </ul>
            </div>
            <div className="col-sm-1">
              <ul class="services footerele">
              <li class="footerfont footer-margin">REACH US AT </li><br></br>
                <li class="footer-margin2"><a href="http://www.google.com" >info@plunes.com</a><br></br></li>
               
                </ul>
                <h5 className="footerfont policies-text">  OUR POLICIES </h5>
                <ul class="services footerele">
                <li><a href="#"> REGISTER  </a></li>
                <li><a href="#"> PLOCKR </a></li>

              </ul>

              </div>
            
            

          </div>
          <div className="row footer-alignment">
            <div className="col-sm-5"></div>
            <div className="col-sm-2">
            <p className="procedure-text">COMMON PROCEDURES</p><hr width="60%"></hr>
              </div>
              <div className="col-sm-5">
                </div>


            </div>
          <div className="row">
            {/* <div className="col-sm-1 footer2-align">
              </div> */}
            <div className="col-sm-3 responsiv-futtor">
           
            <ul className="services footerele new-footer-ele2">
                <li><a href="#">MEDICALLY TERMINATED PREGNANCY IN GURGAON</a>  </li>
           
                <li><a href="#">VAGINAL RECONSTRUCTION IN GURGAON</a> </li>
                <li><a href="#">JOINT REPLACEMENT IN GURGAON</a>  </li>
                <li><a href="#">PREGNANCY TESTS IN GURGAON</a> </li>
                <li><a href="#">BACK PAIN TREATMENT IN GURGAON </a>   </li>
                <li><a href="#">OVARIAN CYST REMOVAL IN GURGAON </a>   </li>
                <li><a href="#">FERTILITY TREATMENT IN GURGAON </a> </li>
                <li><a href="#">PCOD IN GURGAON </a> </li>
                <li><a href="#"> PCOS IN GURGAON</a>  </li>
                
                <li><a href="#">C-SECTION IN GURGAON </a>   </li>
              </ul>

              </div>
              <div className="col-sm-3">
              <ul className="services footerele"> 
                <li><a href="#">BOTOX TREATMENT IN GURGAON</a>  </li>
                
                <li><a href="#">ACNE TREATMENT IN GURGAON</a> </li>
                <li><a href="#">ANTI AGING TREATMENT IN GURGAON </a>   </li>
              
              <li><a href="#">LASER HAIR TREATMENT IN GURGAON</a> </li>
             
                
             
                <li><a href="#"> SKIN TREATMENT IN GURGAON</a> </li>
              
                <li><a href="#"> HAIR TRANSPLANT IN GURGAON</a>  </li>
                
                <li><a href="#">MAMMOGRAPHY IN GURGAON</a>  </li>
                <li><a href="#">  BARIATRIC SURGERY IN GURGAON</a> </li>
                <li><a href="#">FROZEN SHOULDER IN GURGAON </a>   </li>
                <li><a href="#">KNEE PAIN TREATMENT IN GURGAON</a>   </li>
              </ul>


              </div>
              <div className="col-sm-2">
              <ul className="services footerele new-footer-ele">
              
                
         
                <li><a href="#">DENTAL FILLING IN GURGAON </a> </li>
                <li><a href="#"> DENTAL BRACES IN GURGAON</a>  </li> 
               
                
               
                <li><a href="#">DENTAL IMPLANTS IN GURGAON </a>   </li>
                <li><a href="#">ROOT CANAL TREATMENT IN GURGAON </a>   </li>
                <li><a href="#"> LASIK EYES TREATMENT IN GURGAON</a>  </li>
                <li><a href="#"> GLAUCOMA SURGERY IN GURGAON</a> </li>
                <li><a href="#">CATARACT EYE SURGERY IN GURGAON </a>   </li>
                <li><a href="#">IVF IN GURGAON </a>   </li>
              </ul>


              </div>
              <div className="col-sm-2">
              <ul className="services footerele">
               
                <li><a href="#"> SUGAR TEST IN GURGAON</a> </li>
                <li><a href="#">ULTRASOUND IN GURGAON </a> </li>
                <li><a href="#">HIV AIDS TEST IN GURGAON </a> </li>
                <li><a href="#"> PRP THERAPY IN GURGAON</a>  </li>
              
                <li><a href="#">PATHOLOGISTS IN GURGAON </a>   </li>
                <li><a href="#">LIPID PROFILE  TEST IN GURGAON </a>   </li>
                <li><a href="#">FULL BODY CHECK UP IN GURGAON </a> </li>
                <li><a href="#"> BLOOD PRESSURE TEST IN GURGAON</a> </li>

              </ul>


              </div>
              <div className="col-sm-2">
              <ul className="services footerele MARGIN-FOOTER">
                <li><a href="#">CT SCAN IN GURGAON</a>  </li>
                <li><a href="#"> ECG IN GURGAON</a> </li>
                <li><a href="#">X-RAY IN GURGAON </a> </li>
                <li><a href="#">HEART CHECK UP IN GURGAON </a> </li>
                <li><a href="#">  TMT IN GURGAON</a> </li>
                <li><a href="#">MRI IN GURGAON </a>   </li>
                <li><a href="#">BLOOD TEST IN GURGAON</a> </li>
                <li><a href="#">PET CT SCAN IN GURGAON </a>   </li>
               
               
              

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

