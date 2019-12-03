import React, { Component } from 'react'
import { decorator } from '@babel/types'
export default class LandingFooter extends Component {
  render() {
    return (

      <div class="footer">
        <div class="container-fluid footer-padding">
          <div className="container-fluid">
          <div class="row ">
            <div className="col-sm-1 futtor">
              </div>
            <div className="col-sm-2 ">
              <div>
              <a href="/" >
          
          <img className="responsive-logo" style={{ height: '52px', width: '130px' }} src="logo.png" />
          </a>
              </div>
        
               <ul style={{ paddingInlineStart: '0' }}>
                <div class="ftr3 footerfont">FOLLOW US AT </div>
                <li style={{ display: 'inline-block' }}>
                  <span style={{ fontSize: '11px' }}>
                    <a href="https://in.linkedin.com/company/plunes-com"><img class="ftr" src="linkedin.png" /><br /></a></span>
                </li>
                <li style={{ display: 'inline-block' }}>
                  <span style={{ fontSize: '11px' }}>
                    <a href="https://instagram.com/plunes_utility_network?igshid=17ov9733181re"><img class="ftr1" src="Instagram.png" /><br /></a></span>
                </li>
                <li style={{ display: 'inline-block' }}>
                  <span style={{ fontSize: '11px' }}>
                    <a href="https://m.facebook.com/plunes076/"><img class="ftr2" src="Facebook.png" /><br /></a></span>
                </li>
              </ul> 
              </div>
            <div class="col-sm-2 ">
            <h5 className="footerfont">  FOR USERS </h5>
              <ul className="services footerele">
               
                <li><a href="/pediatrics"> PEDIATRICIANS IN GURGAON</a> </li>
                <li><a href="/physiotherapy">PHYSIOTHERAPHISTS IN GURGAON </a> </li>
                <li><a href="/radiology">RADIOLOGISTS IN GURGAON </a> </li>
                <li><a href="/orthopedics"> ORTHOPEDICIANS IN GURGAON</a>  </li>
                <li><a href="/dentist">  DENTISTS IN GURGAON</a> </li>
                <li><a href="/dermatology">DERMATOLOGISTS IN GURGAON </a>   </li>
              </ul>
            </div>
            <div className="col-sm-2 ">
              {/* <h5 className="footerfont">  FOR USERS </h5> */}
              <ul className="services footerele footer-col-align"> 
              <li><a href="/gynae"> GYNAECOLOGISTS IN GURGAON </a>   </li>
                <li><a href="/psychiatry">  PSYCHIATRISTS IN GURGAON</a></li>
                <li><a href="/neurology">NEUROLOGISTS IN GURGAON </a>  </li>
                <li><a href="/ophthalmology">OPHTHALMOLOGISTS IN GURGAON</a> </li>
              </ul>
            </div>
            <div class="col-sm-2 ">
              <h5 class="footerfont">FOR HOSPITALS/CLINICS   </h5>
              <ul class="services footerele">
                <li><a href="/register"> REGISTER  </a></li>
                <li><a href="/plockr"> PLOCKR </a></li>
              </ul>
            </div>
            <div class="col-sm-2">
              <h5 class="footerfont">GET IN TOUCH WITH </ h5>
              <ul class="services footerele">
                <li><a href="/aboutus">ABOUT US</a> </li>
                <li><a href="/contactus">CONTACT US </ a></li>
                <li><a href="/careers">CAREERS</a></li>
                <li><a href="/blog">BLOG </ a></li>
              </ul>
            </div>
            <div className="col-sm-1 footer-row-align">
              <ul class="services footerele">
              <li class="footerfont footer-margin">REACH US AT </li><br></br>
                <li class="footer-margin2"><a href="/contactus" >info@plunes.com</a><br></br></li>
                </ul>
                <h5 className="footerfont policies-text">  OUR POLICIES </h5>
                <ul class="services footerele">
                <li><a href="/termsofuse"> TERMS OF USE   </a></li>
                <li><a href="/privacy">PRIVACY POLICY </a></li>
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
            </div>
          <div className="row">
            {/* <div className="col-sm-1 footer2-align">
              </div> */}
            <div className="col-sm-3 responsiv-futtor">
            <ul className="services footerele new-footer-ele2">
                <li><a href="/gynae">MEDICALLY TERMINATED PREGNANCY IN GURGAON</a>  </li>
                <li><a href="/gynae">VAGINAL RECONSTRUCTION IN GURGAON</a> </li>
                <li><a href="/orthopedics">JOINT REPLACEMENT IN GURGAON</a>  </li>
                <li><a href="/gynae">PREGNANCY TESTS IN GURGAON</a> </li>
                <li><a href="/orthopedics">BACK PAIN TREATMENT IN GURGAON </a>   </li>
                <li><a href="/gynae">OVARIAN CYST REMOVAL IN GURGAON </a>   </li>
                <li><a href="/gynae">FERTILITY TREATMENT IN GURGAON </a> </li>
                <li><a href="/gynae">P.C.O.D IN GURGAON </a> </li>
                <li><a href="/gynae"> P.C.O.S IN GURGAON</a>  </li>
                <li><a href="/gynae">C-SECTION IN GURGAON </a>   </li>
              </ul>
              </div>
              <div className="col-sm-3">
              <ul className="services footerele">
                <li><a href="/dermatology">BOTOX TREATMENT IN GURGAON</a>  </li>
                <li><a href="/dermatology">ACNE TREATMENT IN GURGAON</a> </li>
                <li><a href="/dermatology">ANTI AGING TREATMENT IN GURGAON </a>   </li>
                <li><a href="/dermatology">LASER HAIR TREATMENT IN GURGAON</a> </li>
                <li><a href="/dermatology"> SKIN TREATMENT IN GURGAON</a> </li>
                <li><a href="/dermatology"> HAIR TRANSPLANT IN GURGAON</a>  </li>
                <li><a href="/gynae">MAMMOGRAPHY IN GURGAON</a>  </li>
                <li><a href="/gynae">  BARIATRIC SURGERY IN GURGAON</a> </li>
                <li><a href="/orthopedics">FROZEN SHOULDER IN GURGAON </a>   </li>
                <li><a href="/orthopedics">KNEE PAIN TREATMENT IN GURGAON</a>   </li>
              </ul>
              </div>
              <div className="col-sm-2">
              <ul className="services footerele new-footer-ele">
                <li><a href="/dentist">DENTAL FILLING IN GURGAON </a> </li>
                <li><a href="/dentist"> DENTAL BRACES IN GURGAON</a>  </li>
                <li><a href="/dentist">DENTAL IMPLANTS IN GURGAON </a>   </li>
                <li><a href="/dentist">ROOT CANAL TREATMENT IN GURGAON </a>   </li>
                <li><a href="/ophthalmology"> LASIK EYES TREATMENT IN GURGAON</a>  </li>
                <li><a href="/ophthalmology"> GLAUCOMA SURGERY IN GURGAON</a> </li>
                <li><a href="/ophthalmology">CATARACT EYE SURGERY IN GURGAON </a>   </li>
                <li><a href="/ivf">IVF IN GURGAON </a>   </li>
              </ul>
              </div>
              <div className="col-sm-2">
              <ul className="services footerele">
                <li><a href="/pathology"> SUGAR TEST IN GURGAON</a> </li>
                <li><a href="/pathology">ULTRASOUND IN GURGAON </a> </li>
                <li><a href="/pathology">HIV AIDS TEST IN GURGAON </a> </li>
                <li><a href="/dermatology"> PRP THERAPY IN GURGAON</a>  </li>
                <li><a href="/pathology">PATHOLOGISTS IN GURGAON </a>   </li>
                <li><a href="/pathology">LIPID PROFILE  TEST IN GURGAON </a>   </li>
                <li><a href="/pathology">FULL BODY CHECK UP IN GURGAON </a> </li>
                <li><a href="/pathology"> BLOOD PRESSURE TEST IN GURGAON</a> </li>
              </ul>
              </div>
              <div className="col-sm-2">
              <ul className="services footerele MARGIN-FOOTER">
                <li><a href="/radiology">CT SCAN IN GURGAON</a>  </li>
                <li><a href="/radiology"> ECG IN GURGAON</a> </li>
                <li><a href="/radiology">X-RAY IN GURGAON </a> </li>
                <li><a href="/radiology">HEART CHECK UP IN GURGAON </a> </li>
                <li><a href="/radiology">  TMT IN GURGAON</a> </li>
                <li><a href="/radiology">MRI IN GURGAON </a>   </li>
                <li><a href="/pathology">BLOOD TEST IN GURGAON</a> </li>
                <li><a href="/radiology">PET CT SCAN IN GURGAON </a>   </li>
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