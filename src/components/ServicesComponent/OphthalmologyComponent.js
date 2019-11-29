import React, { Component } from 'react'
import '../ServicesComponent/dentist.css'
import LandingFooter from '../LandingComponent/LandingFooter'
import LandingHeader from '../LandingComponent/LandingHeader'
import {Helmet} from "react-helmet";

export default class OphthalmologyComponent extends Component {
render() {
return (
<div>
<Helmet>
    <meta charSet="utf-8" />
        <link rel="canonical" href="/ophthalmology" />
        <title>A Complete Guide To Ophthalmology: All You Need To Know</title>
        <meta name='keywords' content='eye hospital in gurgaon, eye specialist in gurgaon, eye clinic in gurgaon, ophthalmologist in gurgaon, cataract surgery in gurgaon, lasik eye surgery in gurgaon, lasik surgery in gurgaon'></meta>
    <meta name="description" content="Search for the desired procedure such as cataract eye surgery, corneal repair, prosthetic eye surgery etc & avail upto 50% discount. ">
    </meta>
</Helmet>
<LandingHeader />
<br></br>
<div className="row">
<div className="col-sm-1"></div>

<div className="col-sm-11">
<ul class="breadcrumb">
<li><a href="/">Home</a></li>
<li className="header-font2" ><a className="breadcrumb-text" href="#">Ophthalmology</a></li>

</ul>
</div>

</div>


<div className="row">
<div className="col-sm-1">
</div>
<div className="col-sm-11 header2-text">
<div className="row">
<div className="col-sm-2">
<img className="dentist-image" src="/OPHTHAMOLOGIST.png" />
</div>
<div className="col-sm-9 view-more-align">
<h3 className="header-font">Ophthalmology</h3>
<p className="peragraph-text">Ophthalmology is a branch of medicine and surgery which deals with the diagnosis and treatment of eye disorders.
</p>
<p className="peragraph-text">An ophthalmologist is a medical or osteopathic doctor who specializes in eye and vision care. Ophthalmologists differ from optometrists and opticians in their levels of training and in what they can diagnose and treat.
</p>
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
We help you find the best price solutions to all your medical concerns with just one click. Our AI will help you search instant solutions for all your ophthalmology treatments & procedures in Delhi NCR. </p>
<p className="peragraph-text"> Search for the desired procedure such as cataract eye surgery, corneal repair, prosthetic eye surgery or any other ophthalmology treatments & our AI will negotiate in real-time with top ophthalmologists & clinics nearest to you to get the best price in real time.  </p>
<p className="peragraph-text"> Avail upto 50% discount instantly at ophthalmology clinics in Delhi NCR through Plunes! 
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

<div className="container-fluid">
    <div className="row">
        <div className="col-sm-1">
            </div>
            <div className="col-sm-3">
            <p className="header-font">1. Ophthalmology Consultation:
</p>
<p className="peragraph-text">Before undergoing any eye surgery or treatment, the patient attends an ophthalmology consultation. <br></br>
The ophthalmologist will discuss any of the patients concerns and will examine the eyes.

</p>
            </div>
            <div className="col-sm-3">
            <p className="header-font">2. Cataract Eye Surgery:</p>
<p className="peragraph-text">
Cataract surgery is a procedure to remove the lens of an eye and in most cases, replace it with an artificial lens.
</p>
            </div>
            <div className="col-sm-3">
            <p className="header-font">3. Chemotherapy:</p>
<p className="peragraph-text">Chemotherapy uses drugs to kill tumor cells. Chemotherapy drugs can be taken orally in pill form or injected into a vein (intravenously). The chemotherapy drug used most often to treat brain tumors is temozolomide (Temodar), which is taken as a pill.

</p>
            </div>
            <div className="col-sm-2">
            </div>
            
        </div>
        <div className="row">
        <div className="col-sm-1">
            </div>
            <div className="col-sm-3">
            <p className="header-font">4. Prosthetic Eye:</p>
<p className="peragraph-text">
An ocular prosthesis, artificial eye or glass eye is a type of prosthesis that replaces short sightedness 
</p>
            </div>
            <div className="col-sm-3">
            <p className="header-font">5. Micro Incision Surgery:</p>
<p className="peragraph-text">
It is a procedure to remove the lens of an eye and in most cases, replace it with an artificial lens
</p>
            </div>
            <div className="col-sm-3">
            <p className="header-font">6. Laser Treatment:</p>
<p className="peragraph-text">
Laser interstitial thermal therapy (LITT) is a less invasive surgery that uses a laser to pinpoint and destroy a small portion of brain tissue.
</p>

            </div>
            <div className="col-sm-2">
            </div>
            
        </div>
        <div className="row">
        <div className="col-sm-1">
            </div>
            <div className="col-sm-3">
            <p className="header-font">7. Orbital Tumor Removal: </p>
<p className="peragraph-text">This procedure includes the process of removing tumors around the eye that may compromise your vision or eyesight. 
</p>
            </div>
            <div className="col-sm-3">
            <p className="header-font">8. EyePCL Treatment:</p>
<p className="peragraph-text">
Implantable Phakic contact Lens (EyePCL) is like a soft contact lens, single piece posterior chamber phakic iol, which can be inserted into the eye through sub 2.8mm incision to correct vision of the eye.  
</p>
            </div>
            <div className="col-sm-3">
            </div>
            <div className="col-sm-2">
            </div>
            
        </div>
        
        
</div>


<div>
<div>
<LandingFooter />
</div>
</div>

</div>
)
}
}

