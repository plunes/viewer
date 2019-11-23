import React, { Component } from 'react'
import '../ServicesComponent/dentist.css'
export default class DentistComponent extends Component {
    render() {
        return (
            <div>
                <div className='container-fluid'>
                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <a class="navbar-brand" href="#"><img style={{ height: '52px', width: '130px', marginLeft: '55px' }} src="logo.png" /></a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav2 nav-item active">
                                    <div className="nav333">
                                        <a className="nav33  nav-link _app " href="#">
                                            <h6 className="nn "><span><img className="ios" src="iOS.png"
                                            />
                                                <img className="android" src="Android.png" /> <span>Download App</span></span>
                                            </h6>
                                        </a>
                                    </div>
                                </li>
                                <li className="nav-item nav2">
                                    <a className="nav-link nav3" href="/login">Login</a>
                                </li>
                                <li className="nav-item nav2">
                                    <a className="nav-link nav3" href="/signup">Signup</a>
                                </li>

                            </ul>

                        </div>
                    </nav>
                </div><br></br>
                <div className="row">
                    <div className="col-sm-1"></div>

                    <div className="col-sm-11">
                        <ul class="breadcrumb">
                            <li><a href="/">Home</a></li>
                            <li className="header-font2" ><a className="breadcrumb-text" href="#">Dentistry</a></li>

                        </ul>
                    </div>

                </div>


                <div className="row">
                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-11 header2-text">
                        <div className="row">
                            <div className="col-sm-2">
                                <img className="dentist-image" src="/Dentist.png" />
                            </div>
                            <div className="col-sm-9">

                                <h3 className="header-font">Dentistry</h3>
                                <p className="peragraph-text">Dentistry, also known as Dental and Oral Medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral cavity.
  </p>

                                <p className="peragraph-text">Dentists are trained to diagnose, treat and prevent oral diseases; promote oral health. </p>
                            </div>
                        </div>
                    </div>



                </div>

                <hr width="80%"></hr>
                <div className="row">
                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-10 header-size">
                        <br></br><br></br>
                        <h3 className="header-font">Why Plunes? </h3>
                        <p className="peragraph-text">
                            We help you find the best price solutions to all your medical concerns with just one click. Our AI will help you search instant solutions for all your dentistry procedures & treatments in Delhi NCR.</p>
                        <p className="peragraph-text"> Search for the desired dental treatments such as hot sensitivity, cold sensitivity, oral checkup, dental implants, gum swelling, tooth ache, tooth pain, composite veneers, porcelain veneers, zirconia porcelain veneers, dental porcelain laminates, teeth bonding treatment, dental bonding or any other dentistry treatments & our AI will negotiate in real-time with top dentists & clinics nearest to you to get the best price in real time. </p>
                        <p className="peragraph-text">  Avail upto 50% discount instantly at dental clinics & hospitals in Delhi NCR through PLUNES!
                            </p>
                    </div>
                    <div className="col-sm-1"></div>
                </div><br></br><br></br>
                <hr width="80%"></hr>
                <div className="row">
                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-11">
                        <br></br>
                        <h3 className="header-font align-text">Procedure</h3>
                    </div>

                </div>
                <div className="row">

                    <div className="col-sm-1">
                    </div>
                    <div className="col-sm-3">
                        <p className="header-font">1.Dental Fillings</p>
                        <p className="peragraph-text">It is a procedure to treat cavities and missing tooth that will remove the decayed portion and then "fill" the area where the decayed material was removed.  </p>
                        <br></br><br></br>
                        <p className="header-font">4.Porcelain / Ceramic Fillings :</p>
                        <p className="peragraph-text">
                            Ceramic fillings are made of porcelain and are tooth-colored, so they look natural.
                                    </p><br></br><br></br>
                        <p className="header-font">7.Root Canal Treatment </p>
                        <p className="peragraph-text">It is a treatment sequence for the infected pulp of a tooth which results in the elimination of infection and the protection of the decontaminated tooth from future microbial attacks.</p>
                    </div>
                    <div className="col-sm-3">
                        <p className="header-font">2. Amalgam Fillings:</p>
                        <p className="peragraph-text">
                            The fillings in case of amalgam treatment are made up of silver and mercury making the implants very strong and durable.
                                        </p>
                        <br></br><br></br>
                        <p className="header-font">5.Gold Fillings:</p>
                        <p className="peragraph-text">
                            A small amount of gold that a dentist puts in a hole in a tooth to prevent further decay.
                                        </p><br></br><br></br>
                        <p className="header-font">8.Wisdom Teeth Removal / Impaction </p>
                        <p className="peragraph-text">
                            The treatment involves removal of wisdom teeth. It can also reduce inflammation of the gums associated with wisdom teeth development.</p>
                    </div>





                    <div className="col-sm-3">
                        <p className="header-font">3.Composite Fillings:</p>
                        <p className="peragraph-text">It is made from a mixture of plastic and fine glass particles and matches the color of the tooth.</p>
                        <br></br><br></br><br></br>
                        <p className="header-font">6.Glass Ionomer:</p>
                        <p className="peragraph-text">It is made from acrylic and fluoroaluminosilicate, a component of glass. </p>
                        <br></br><br></br>
                        <p className="header-font">9.Braces & Aligners :</p>
                        <p className="peragraph-text">They are appliances which are used to align or straighten the teeth to guide the teeth for better & corrected position.
 </p>
                    </div>
                    <div className="col-sm-1">
                    </div>

                </div>
                <div className="row">
                    <div className="col-sm-4 ">
                    </div>
                    <div className="col-sm-4 button-align">
                        {/* <a href="#" class="btn btn-primary button-view">view more</a> */}
                        {/* <a class="btn  button-view " data-toggle="collapse" href="#dentist" role="button" aria-expanded="false" aria-controls="collapseExample">
                            view more </a> */}

                    </div>
                    <div className="col-sm-4">

                    </div>
                </div>

                <div>


                    <div className="row" >
                        <div className="col-sm-1"></div>
                        <div className="col-sm-3">
                            <p className="header-font">10. Metal Conventional Braces:
                                </p>
                            <p className="peragraph-text">

                                The treatment involves removal of wisdom teeth with the involvement of stainless steel for the better alignment.

  </p>
                            <br></br><br></br><br></br>
                            <p className="header-font">13. Lingual Braces:</p>
                            <p className="peragraph-text">
                                They are heavy metal braces which are placed behind the teeth. It can be made even of silver or gold. The individual Bracket is customized using CAD-CAM / 3D designing.
 </p>
                            <br></br><br></br>
                            <p className="header-font">16. Endosteal Implants:</p>
                            <p className="peragraph-text">These are the most common type of implant and are surgically placed directly into the jaw-bone, they are also called root-form implants. These are typically shaped like small screws, cylinders or plates.

 </p>                       <br></br>  <br></br>
                            <p className="header-font">19. Porcelain Dentures:
                                </p>
                            <p className="peragraph-text">
                                Porcelain dentures are made up of porcelain look more natural and match easily with the remaining teeth.

  </p>
                            <br></br><br></br>
                            <p className="header-font">22. Metal Crown:</p>
                            <p className="peragraph-text">Metal crowns generally make use of gold alloys or base metal alloys like that of chromium or nickel. </p>
                            <br></br><br></br>
                            <p className="header-font">25. Porcelain Fused to Zirconia:</p>
                            <p className="peragraph-text">They are formed by porcelain being combined with zirconium oxide. The zirconia base has a white shade and is layered with porcelain to match final restoration.

 </p><br></br><br></br>
                            <p className="header-font">28. Cantilever Bridges:
                                </p>
                            <p className="peragraph-text">

                                It is used when there are adjacent teeth on only one side of the missing tooth or teeth.
  </p>
                            <br></br><br></br><br></br>
                            <p className="header-font">31. Smile Makeover:</p>
                            <p className="peragraph-text">It is a process of improving the appearance of a smile through various procedures which are cosmetic or surgical.
</p>
                            <br></br><br></br>
                            <p className="header-font">34. Flap Surgery:</p>
                            <p className="peragraph-text">In this, incision is made on the gums to remove the tartar. Sometimes the irregular surface of the bone is smoothened so that there are no areas for bacteria which cause this disease can hide. This method is used to remove the gap between gums and tooth.

 </p>
                        </div>
                        <div className="col-sm-3">
                            <p className="header-font">11. Metal Self Ligating Braces:
                                </p>
                            <p className="peragraph-text">
                                Self-ligating brackets are defined as "dental brace, which generally utilizes permanently installed, movable component to entrap the arch-wire".
  </p>
                            <br></br><br></br><br></br>
                            <p className="header-font">14. Aligners:</p>
                            <p className="peragraph-text">It is medical grade plastic trays that do not require any braces or wire. They are totally invisible and also hide existing gaps.
</p>
                            <br></br><br></br><br></br>
                            <p className="header-font">17. Sub-periosteal Implant:</p>

                            <p className="peragraph-text">
                                These are made out of a metal framework. This metal frame is attached under your gum tissue but above your jawbone. Protruding from the metal frame of the .
  </p>
                            <br></br><br></br><br></br>
                            <p className="header-font">20. Acrylic Resin Dentures:</p>
                            <p className="peragraph-text">It is made of acrylic. It is light in weight and easy to adjust. It fits properly and makes the jaw movement smoother.
 </p>
                            <br></br>
                            <p className="header-font">23. Zirconia Crown:</p>
                            <p className="peragraph-text">They are made up of zirconium oxide or zirconia. Zirconia is a white powdered metal which has the ability to be radiopaque in the X-rays.


 </p><br></br>
                            <p className="header-font">26. Ceramic Crown:
                                </p>
                            <p className="peragraph-text">
                                It is a crown that is made entirely out of a ceramic material such as porcelain. Porcelain is a type of ceramic that contains a type of clay called kaolin.

  </p>
                            <br></br><br></br>
                            <p className="header-font">29. Maryland Bonded Bridges:</p>
                            <p className="peragraph-text">It is also k/a resin-bonded bridge. They are made of porcelain, porcelain fused to metal, or plastic teeth and gums supported by a metal or porcelain framework.
</p>
                            <br></br><br></br>
                            <p className="header-font">32. Veneers:</p>
                            <p className="peragraph-text">They are thin tooth colored custom made shells that are fixed on the labial surface of teeth to change their color, shape, and size. These improve the appearance of front teeth.

 </p><br></br>
                            <p className="header-font">35. Bone Graft:</p>
                            <p className="peragraph-text">
                                This method is used to regenerate the bone. The dentist use fragments of synthetic bone donated bone or your own bone which is used to replace the bone destroyed due to gum disease
                                .
 </p>


                        </div>
                        <div className="col-sm-3">
                            <p className="header-font">12. Ceramic Conventional Braces:
                                </p>
                            <p className="peragraph-text">
                                These braces are made of transparent ceramic. The wires can also be transparent to make the braces less noticeable.


  </p>
                            <br></br><br></br><br></br>
                            <p className="header-font">15. Dental Implants:</p>
                            <p className="peragraph-text">It is a titanium post (like a tooth root) that is surgically positioned into the jawbone beneath the gum line that allows dentist to mount replacement teeth or bridge into that area.
 </p>
                            <br></br><br></br>
                            <p className="header-font">18. Dentures:</p>
                            <p className="peragraph-text">Dentures are custom-made replacements for missing teeth and can be taken out and put back into your mouth.

 </p><br></br><br></br><br></br>
                            <p className="header-font">21. Crown:
                                </p>
                            <p className="peragraph-text">


                                It is a tooth-shaped cover placed over a tooth that is badly damaged or decayed. Also known as cap.


  </p>
                            <br></br><br></br>
                            <p className="header-font">24. Porcelain Fused Metal (PFM):</p>
                            <p className="peragraph-text">
                                They can be referred to as full-cast crowns which has porcelain fused on most or all parts of the tooth. They are a hybrid between porcelain and metal crowns
. </p>
<br></br>
                            <p className="header-font">27. Traditional Bridges:</p>
                            <p className="peragraph-text">It involves creating a crown for the tooth or implant on either side of the missing tooth, with a pontic in between.
 </p><br></br><br></br>
                            <p className="header-font">30. Teeth Whitening:
                                </p>
                            <p className="peragraph-text">
                                It is a process of removing stains from the tooth surface and restoring the natural color of the teeth.

  </p>
                            <br></br><br></br><br></br>
                            <p className="header-font">33. Composite Bonding:</p>
                            <p className="peragraph-text">Permanently attaching a tooth-colored material (composite) onto the tooth is called composite bonding.
  </p>
                            <br></br><br></br>
                            <p className="header-font">36. Soft Tissue Graft:</p>
                            <p className="peragraph-text">This method is used if the gums are receded. Gums are taken from the roof of the mouth and is stitched to the area of gum recession.

 </p>

                        </div>
                        <div className="col-sm-2">
                        </div>
                    </div>


                    <div>







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



                    </div>


                </div>



            </div>

        )
    }

}
