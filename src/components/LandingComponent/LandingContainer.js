import React from 'react';
import './Landing.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';
import { Redirect } from 'react-router'
import { Helmet } from "react-helmet";
class LandingContainer extends React.Component {
    constructor(props) {
        super(props);
        this.root = props.root;
        this.state = {
            mobileNo: '',
            countryCode: '',
            filter: '',
            emailid: '',
            password: '',
            proceduresList: [],
            selectedData: [],
            docList: [],
            showDropdown: false,
            showDiv: false,
            showSelectedProcedures: false,
            showSignup: false
            // redirect: true
        };
        this.baseUrl = 'https://plunes.co/v3/'
        this.data = [];
        this.selectedProcedures = [];
        this.showForm = false;
        this.handleChange = this.handleChange.bind(this);
        this.sendAppLink = this.sendAppLink.bind(this)
    }
    async sendAppLink(e) {
        e.preventDefault()
        let response = await axios.get("https://plunes.co/v4/notification/applink/" + this.state.mobileNo)
            .then(({ data }) => {
                // console.log(data);
                if (data.err) {
                    //message.error(data.msg);
                    console.log(data.err)
                }
                else {
                    console.log(data)
                    // console.log('anshul')
                    // console.log(data)
                    this.setState({
                        mobileNo: '',
                    })

                }
            })
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        // const { isAuth } = this.root;
        const { showSignup } = this.state
        if (showSignup) {
            return <Redirect to='/sign-up/' />;
        }
        return <Router>
            <div className="container-fluid">
                <Helmet>
                    <link rel="canonical" href="https://www.plunes.com" />
                    <title>India's First Utility Network - Plunes</title>
                    <meta name="description"
                        content="Looking for Hospitals/Doctors Near you? Check out India's First Uitility Network, Book an appointment, with free Consultation.  Download the Free app Plunes." />
                    <meta name="keywords" content="India's first utility network, utility network, plunes, book an appointment, download app, hospitals near you, doctors near you, book instantly, free consultation, dental clinic in gurgaon, orthodontist in gurgaon, gynecologist in gurgaon, gynecology clinic gurgaon, psychologist in gurgaon, psychotherapist in gurgaon, hair transplant clinic in gurgaon, radiologist in gurgaon, ivf in gurgaon, ayurvedic clinic in gurgaon, child specialist in gurgaon, pediatrician in gurgaon, pathology in gurgaon, biopsy test in gurgaon, orthopedics doctor in gurgaon, ent specialist in gurgaon, ent surgeon in gurgaon, eye hospital in gurgaon, ophthalmologist in gurgaon, dermatologist in gurgaon, best neurologist in gurgaon, neuro hospital in gurgaon">
                    </meta>
                </Helmet>
                <h1 className="h15">Welcome To India's First Utility Network</h1>
                <h2 className="header2">Experience our unique AI & avail upto 50% off on all your Medical Procedures, Diagnostics & Appointments</h2>
                <div className="container-fluid ">
                    <div className="main-content">
                        <div className="owl-carousel owl-theme" id="owl-demo">
                            <div className="item">
                                <a href="/dermatology" title='Dermatology Procedures'>
                                    <div className="card" >
                                        <img className=" card-align" src="/Dermat.png" alt=".." />
                                        <div className="card-body ">
                                            <h2 className="card-title2 ">Dermatology Procedures</h2>
                                            <p className="card-text2">Dermatology Consultation <br></br> Laser Hair Reduction <br></br> Botox Treatment</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="/gynae" title='Gynecology Procedures'>
                                    <div className="card" >
                                        <img className="card-align" src="/Gyneco.png" alt=".." />
                                        <div className="card-body ">
                                            <h2 className="card-title2">Gynecology Procedures</h2>
                                            <p className="card-text2">Gynecologist Consultation<br></br>Cesarean / C-section <br></br>Ovarian Cyst Removal</p>
                                        </div>
                                    </div></a>
                            </div>
                            <div className="item">
                                <a href="/radiology" title='Radiology Diagnosis'>
                                    <div className="card" >
                                        <img className="card-align" src="/Radio.png" alt=".." />
                                        <div className="card-body ">
                                            <h2 className="card-title2 ">Radiology Diagnosis</h2>
                                            <p className="card-text2">MRI, CT Scan, X-ray<br></br> Ultrasound <br></br>Doppler Test</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="/dentist" title='Dentistry Procedures'>
                                    <div className="card" >
                                        <img className="card-align" src="/dent.png" alt=".." />
                                        <div className="card-body ">
                                            <h2 className="card-title2 ">Dentistry Procedures</h2>
                                            <p className="card-text2">Tooth Removal, Tooth Whitening<br></br>Root Canal Treatment<br></br>Dental Implant, Braces</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="item">
                                <a href="/pathology" title='Pathology Tests'>
                                    <div className="card" >
                                        <img className=" card-align" src="/pathology.png" alt=".." />
                                        <div className="card-body ">
                                            <h2 className="card-title2 ">Pathology Tests</h2>
                                            <p className="card-text2">Complete Blood Count Test<br></br>LIPID Profile<br></br>HIV Test</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='item'>
                                <a href="/orthopedics" title='Orthopedic Procedures'>
                                    <div className="card" >
                                        <img className=" card-align" src="/orthopedics.png" alt=".." />
                                        <div className="card-body ">
                                            <h2 className="card-title2 ">Orthopedic Procedures</h2>
                                            <p className="card-text2">Joint Replacement<br></br>Fracture<br></br>Arthroplasty</p>
                                        </div>
                                    </div>
                                </a>
                           </div>
                                <div className='item'>
                                <a href="/ent" title='ENT Procedures'>
                                    <div className="card" >
                                        <img className=" card-align" src="/ent.png" alt=".." />
                                        <div className="card-body ">
                                            <h2 className="card-title2 ">ENT Procedures</h2>
                                            <p className="card-text2">Ear Drum Repair<br></br>Tonsillectomy<br></br>Sinusitis Treatment</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className='item'>
                                <a href="/ayurveda" title='Ayurveda Procedures'>
                                    <div className="card" >
                                        <img className=" card-align" src="/ayurveda.png" alt=".." />
                                        <div className="card-body ">
                                            <h2 className="card-title2 ">Ayurveda Procedures</h2>
                                            <p className="card-text2">Dhara Treatment<br></br>Panchkarma Treatment<br></br>Ayurvedic Massage</p>
                                        </div>
                                    </div>
                                </a>
                            
                             </div>
                        </div>
                        <div className="owl-theme">
                            <div className="owl-controls">
                                <div className="custom-nav owl-nav"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr width="70%"></hr>
                <div className="container download-area">
                    <h1 className="h11">Book instantly from top doctors/hospitals near you</h1>
                    <div className="row">
                        <div className="col-sm-6 ">
                            <img className="download-app-pic" src="/Category.png" alt=".." />
                            <img className="download-app-pic2" src="/mobail.png" alt=".." />
                        </div>
                        <div className="col-sm-6">
                            <p className="download-text"> Download Plunes App Now! </p>
                            <p className="download-text2">Book Medical Procedures, Appointments & Tests </p>
                            <p className="download-text3">Get link to download the app</p>
                            <div className="download-link-app">
                                <form onSubmit={this.sendAppLink}>
                                    <span><input disabled value={this.state.countryCode ? this.state.countryCode : '+91'} onChange={this.handleChange} name='countryCode' className="number-text2" maxLength="3" data-fv-numeric="true" data-fv-numeric-message="Please enter your numbers" data-fv-phone-country11="IN" required="required" data-fv-notempty-message="This field cannot be left blank." placeholder="+91" data-fv-field="data[User][mobile]"></input></span>
                                    <span><input id="UserMobile" value={this.state.mobileNo} className="number-text" maxLength="10" data-fv-numeric="true" data-fv-numeric-message="Please enter your numbers" data-fv-phone-country11="IN" required="required" data-fv-notempty-message="This field cannot be left blank." placeholder="Mobile No " name='mobileNo' onChange={this.handleChange}></input></span>
                                    <button type='submit' className="btn btn-primary button-view button-align">Get App Link</button>
                                </form>
                            </div>
                            <span> <a href="https://apps.apple.com/us/app/plunes/id1463747553/" title="app store"> <img className="download-logo" src="/app-store.png" alt=".." /></a></span>
                            <span><a href="https://play.google.com/store/apps/details?id=com.plunes&hl=en_IN/" title="play store"> <img className="download-logo2" src="/Play-store.png" alt=".." /></a></span>
                        </div>
                    </div>
                </div><br></br>
                <hr width="70%"></hr>
                <div className='container-fluid why-plunes'>
                    <h1 className="header"> Why Plunes?</h1>
                    <div className='row'>
                        <div className='col-sm-1 why-plunes'></div>
                        <div className='col-sm-6'>
                            <ul className="why-plunes-align">
                                <li><img className="why-plunes-img" src='/payment-refundable.png' alt=".."></img><span className="pencil">100% Refundable Payment </span></li>
                                <li><img className="why-plunes-img" src='/availability.png' alt=".."></img><span className="pencil">Preferred Timing as Per Your Availability</span></li>
                                <li><img className="why-plunes-img" src='/free-telephonic.png' alt=".."></img><span className="pencil">Free Telephonic Consultations</span></li>
                            </ul>
                        </div>
                        <div className='col-sm-4'>
                            <ul className="pencil-ul why-plunes-align">
                                <li><img className="why-plunes-img" src='/first_consultation.png' alt=".."></img><span className="pencil">First Consultation Free</span></li>
                                <li><img className="why-plunes-img" src='/partial-payments.png' alt=".."></img><span className="pencil">Make Partial Payments</span></li>
                            </ul>
                        </div>
                        <div className='col-sm-1'></div>
                    </div> 
                </div>
                <div>
                    <hr width="70%"></hr>
                </div>
                <div>
                    <div>
                        <p className="header2"></p>
                    </div>
                    <div className="container-fluid download-area">
                        <div className="container-fluid middle-container">
                            <div className="row" >
                                <div className=" col-sm-4">
                                    <div className="item bootstrap-card">
                                        <div className="card">
                                            <img className="card-item-top" src="/physiotherapy.png" alt=".." />
                                            <div class="card-body">
                                                <h3 className="card-title ">Physiotherapy</h3>
                                                <p className="card-text">Physiotherapy Consultation <br></br>Back Pain/Knee Pain <br></br>Frozen Shoulder</p>
                                                <a href="/physiotherapy" className="btn btn-primary button-view" title='Physiotherapy Consultation'>view more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="item bootstrap-card" >
                                        <div className="card ">
                                            <img className="card-item-top" src="/PSYCHIATRISTS.png" alt=".." />
                                            <div className="card-body ">
                                                <h3 className="card-title ">Psychiatry</h3>
                                                <p className="card-text">Psychiatric Consultation<br></br>Autism Assessment <br></br> Counseling</p>
                                                <a href="/psychiatry" className="btn btn-primary button-view" title='Psychiatric Consultation'>view more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="item bootstrap-card">
                                        <div className="card ">
                                            <img className="card-item-top" src="/OPHTHAMOLOGIST.png" alt=".." />
                                            <div className="card-body ">
                                                <h3 className="card-title">Ophthalmology</h3>
                                                <p className="card-text">Ophthalmology Consultation<br></br>Cataract Surgery <br></br>Glaucoma Surgery</p>
                                                <a href="/ophthalmology" className="btn btn-primary button-view" title='Ophthalmology Consultation'>view more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row" >
                                <div className=" col-sm-4">
                                    <div className="item bootstrap-card">
                                        <div className="card">
                                            <img className="card-item-top" src="/Neurologist.png" alt=".." />
                                            <div className="card-body">
                                                <h3 className="card-title">Neurology</h3>
                                                <p className="card-text">Neurology Consultation <br></br>Chemotherapy <br></br>Brain Tumor Surgery</p>
                                                <a href="/neurology" className="btn btn-primary button-view" title='Neurology Consultation'>view more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="item bootstrap-card">
                                        <div className="card">
                                            <img className="card-item-top" src="/PEDIATRICIAN.png" alt=".." />
                                            <div className="card-body">
                                                <h3 className="card-title">Pediatry</h3>
                                                <p className="card-text">Pediatric Consultation <br></br>Vaccination <br></br>Heart Murmur Treatment</p>
                                                <a href="/pediatrics" className="btn btn-primary button-view" title='Pediatric Consultation'>view more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="item bootstrap-card">
                                        <div className="card">
                                            <img className="card-item-top" src="/ivf.png" alt=".." />
                                            <div className="card-body ">
                                                <h3 className="card-title ">IVF</h3>
                                                <p className="card-text">Laparoscopic IVF <br></br>Ovarian Reserve Assessment<br></br>Semen Analysis</p>
                                                <a href="/ivf" className="btn btn-primary button-view" title='Laparoscopic IVF'>view more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h2 className="h13">Long gone are the days of waiting in the queue!</h2>
                            <div className="row">
                                <h3 className="header2">Save Time, Save Money!</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Router >
    }
}
export default LandingContainer
