import React from 'react';
import './Landing.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import RegistrationContainer from '../RegistrationComponent/RegistrationComponent'
import axios from 'axios';
import { Redirect } from 'react-router'


class LandingContainer extends React.Component {
    constructor(props) {
        super(props);
      
        this.root = props.root;
        this.state = {
            mobileNo : '',
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
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onSearchQuery = this.onSearchQuery.bind(this);
        this.settingBid = this.settingBid.bind(this);
        this.viewAllBid = this.viewAllBid.bind(this);
        this.sendToSignUpPage = this.sendToSignUpPage.bind(this);
        this.sendAppLink = this.sendAppLink.bind(this)

    }
    async sendAppLink(e){
        e.preventDefault()
        let response = await axios.get( "http://13.233.151.26:8000/notification/applink/" + this.state.mobileNo )
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
                    mobileNo : '',
                    countryCode : ''
                })
            
            }
        })
    }

    sendToSignUpPage() {
        this.setState({
            showSignup: true
        })
    }


    async viewAllBid(id) {
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZGI5MmYyZDVlYTYzYTIzMjMwMWFjMTgiLCJpYXQiOjE1NzI1MjE2OTJ9.vracwZa90DFsPC0tPWrwn_Z8uElqUYnfpy8HKD79le8'
        let response = await axios.get(this.baseUrl + 'bidding/view_bids/' + id, { headers: { "Authorization": `Bearer ${token}` } })
            .then(({ data }) => {
                // console.log(data);
                if (data.err) {
                    console.log(data.err)
                } else {
                    console.log(data)
                    return data
                }
            })
        // console.log(response)
        return response;

    }

    async  viewBidsProcedures(bidId) {
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZGI5MmYyZDVlYTYzYTIzMjMwMWFjMTgiLCJpYXQiOjE1NzI1MjE2OTJ9.vracwZa90DFsPC0tPWrwn_Z8uElqUYnfpy8HKD79le8'
        let response = await axios.get(this.baseUrl + 'bidding/view_bids_of_procedure/' + bidId, { headers: { "Authorization": `Bearer ${token}` } })
            .then(({ data }) => {
                // console.log(data);
                if (data.err) {
                    console.log(data.err)
                } else {
                    // console.log(data)
                    return data
                }
            })
        // console.log(response)
        return response;
    }

    async settingBid(proceduresArray) {
        console.log(proceduresArray);
        let proceduresString = proceduresArray.join();
        console.log(proceduresString);
        let body = {
            "Userid": '5db92f2d5ea63a232301ac18',
            "Username": "Demo user",
            "Location": "90b, Delhi - Jaipur Expy, Sector 18, Gurugram, Haryana 122008, India",
            "Diagnostics": 'Amalgam Fillings,Composite Fillings',
            "Long": "77.0749492",
            "Lat": "28.4851501",
            "Concern": "",
            "Images": "",
            "Quantity": "1,1"
        }
        let response = await axios.post(this.baseUrl + 'bidding/setting_bid', body)
            .then(({ data }) => {
                // console.log(data);
                if (data.err) {
                    //message.error(data.msg);
                    console.log(data.err)
                }
                else {
                    // console.log('anshul')
                    // console.log(data)
                    return data
                }
            })
        return response;
    }


    async handleSubmit(e) {
        e.preventDefault();
        let settingBid = await this.settingBid(this.state.selectedData);
        let userId = '5db92f2d5ea63a232301ac18';
        let viewBids = await this.viewAllBid(userId)
        let bidId = viewBids.user[0]._id
        let viewBidsOfProcedures = await this.viewBidsProcedures(bidId);
        let listOfDoc = viewBidsOfProcedures.user.data;
        //    console.log(listOfDoc);
        this.root.doctorList = listOfDoc
        this.setState({
            docList: listOfDoc
        })
        this.setState({
            searchInput: true
        })
    }



    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    async componentDidMount() {


        return await axios.get(this.baseUrl + 'bidding/list_of_procedures')
            .then(({ data }) => {
                // console.log(data)
                if (data.err) {
                    console.log(data.err)
                }
                else {
                    this.setState({ proceduresList: data.user })
                }
            })
    }

    handleClick(e) {
        let selectedValue = e.currentTarget.dataset.value;
        // console.log(selectedValue);
        this.selectedProcedures.push(selectedValue);
        // console.log(this.selectedProcedures);
        this.setState({
            selectedData: this.selectedProcedures,
            showDropdown: false,
            showDiv: false,
            showSelectedProcedures: true
        })
        this.showForm = true;

        // console.log(this.context);
    }
    onSearchQuery(e) {
        // console.log('anshul')
        // console.log(e.target.value);
        this.setState({ filter: e.target.value });

        if (this.state.filter.length > 0) {
            const { filter, proceduresList } = this.state;
            const lowercasedFilter = filter.toLowerCase();
            const filteredData = proceduresList.filter(item => {
                let result = false;
                Object.keys(item).forEach(key => {
                    if (key == 'procedure' || key == 'tag') {
                        let smallData = item[key].toString().toLowerCase();
                        if (smallData.includes(lowercasedFilter)) {
                            result = true;
                        }
                    }
                });
                return result;
            });
            this.data = filteredData
            this.setState({
                showDropdown: true,
                showDiv: true
            })
        }

    }

    render() {
        // const { isAuth } = this.root;
        const { showSignup } = this.state
        if (showSignup) {
            return <Redirect to='/signup' />;
        }

        return <Router>
            <div class="container-fluid">
                <div class="text-center">
                    <h1 class="h11">Search for the best price solutions near you </h1>
                    <form action="">
                        <div class="autocomplete">
                            <input class="form-control" type="text" name="search" placeholder="Name the procedure or test here .." autoComplete="off" id="mytInput" onChange={this.onSearchQuery} />
                            {this.state.showDiv ? <div className='row' >
                                <ul style={{ listStyleType: 'none' }} className='searchDropdown'>
                                    {
                                        this.state.showDropdown ?
                                            this.data.map(item => (
                                                <li key='' data-value={item.procedure} className='row procedureListClass' onClick={this.handleClick} >
                                                    {item.procedure}
                                                </li>
                                            )) : null
                                    }
                                </ul>
                            </div> : null

                            }
                            {
                                this.state.showSelectedProcedures ? <div className='row selectedProceduresList'>
                                    <ul style={{ listStyleType: 'none' }} >
                                        {
                                            this.showForm ? <form onSubmit={this.handleSubmit}>
                                                {
                                                    this.state.selectedData.map(item =>
                                                        (
                                                            <li key='' className='row procedureListClass'>{item}</li>
                                                        ))
                                                }

                                            </form> : null
                                        }
                                    </ul>
                                </div> : null
                            }
                            {
                                this.showForm ?
                                    <button type='button' className='btn btn-success proceedButton' onClick={this.sendToSignUpPage}> Proceed </button>
                                    : null
                            }
                        </div>
                    </form>

                </div>
            

            <div> 
                
                <div>
                <hr width="70%"></hr>
                     <h3 class="header"> Avail upto 50% off on Medical
              procedures,<br></br> diagnostics & appointments.
               </h3></div>
                <div className="container-fluid download-area ">
                    <div className="container-fluid middle-container">
                    <div className="row" >
                        <div className=" col-sm-4">
                            <div class="item">
                                <div class="card" >
                                    <img className="card-item-top" src="Dentist.png" alt="..." />
                                    <div class="card-body ">
                                        <h5 class="card-title ">Dentistry</h5>
                                        <p class="card-text">Tooth Removal, Tooth whitening<br></br>Root Canal Treatment<br></br>Dental Implant, Braces</p>
                                        <a href="/dentist" class="btn btn-primary button-view">view more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div class="item">
                                <div class="card">
                                    <img className="card-item-top" src="Orthopedics.png" alt="..." />
                                    <div class="card-body ">
                                        <h5 class="card-title ">Orthopedics</h5>
                                        <p class="card-text">Joint Replacement<br></br>Fracture<br></br>Arthroplasty</p>
                                        <a href="/Orthopedics" class="btn btn-primary button-view">view more</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-4">
                            <div class="item">
                                <div class="card ">
                                    <img className="card-item-top" src="Dermatologist.png" alt="..." />
                                    <div class="card-body ">
                                        <h5 class="card-title ">Dermatologists</h5>
                                        <p class="card-text">Dermatology Consultation<br></br>Lazer Hair Reduction <br></br>Botox Treatment</p>
                                        <a href="/dermatology" class="btn btn-primary button-view">view more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-4">
                            <div class="item">
                                <div class="card">
                                    <img className="card-item-top" src="Gynaecologist.png" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title ">Gynaecologist</h5>
                                        <p class="card-text">Gynaecologist Consultation <br></br>Cesarean/C-section<br></br>Ovarian Cyst Removal</p>
                                        <a href="/Gynae" class="btn btn-primary button-view">view more</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div class="item" >
                                <div class="card ">
                                    <img className="card-item-top" src="PSYCHIATRISTS.png" alt="..." />
                                    <div class="card-body ">
                                        <h5 class="card-title ">Psychiatrists</h5>
                                        <p class="card-text">Psychologist Consultation<br></br>Autism Assessment <br></br> Counseling</p>
                                        <a href="/Psychiatry" class="btn btn-primary button-view">view more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div class="item">
                                <div class="card">
                                    <img className="card-item-top" src="RADIOLOGIST.png" alt="..." />
                                    <div class="card-body ">
                                        <h5 class="card-title ">Radiology</h5>
                                        <p class="card-text">MRI, CT Scan, X-ray<br></br>Ultrasound <br></br>Doppler Test</p>
                                        <a href="/radiology" class="btn btn-primary button-view">view more</a>
                                    </div>
                                </div>
                                
                            </div>
                            
                            </div>
                       
                    </div>
                    <div className="row" >
                        <div className=" col-sm-4">
                            <div class="item">
                                <div class="card" >
                                    <img className="card-item-top" src="Physiotherapy.png" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title ">Physiotherapy</h5>
                                        <p class="card-text">Physiotherapy Consultation <br></br>Back Pain/knee Pain <br></br>Frozen Shoulder</p>
                                        <a href="Physiotherapy" class="btn btn-primary button-view">view more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div class="item">
                                <div class="card">
                                    <img className="card-item-top" src="Pathology.png" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title ">Pathology</h5>
                                        <p class="card-text">Complete Blood Test<br></br>LIPID Profile<br></br>HIV Test</p>
                                        <a href="/Pathology" class="btn btn-primary button-view">view more</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-4">
                            <div class="item">
                                <div class="card ">
                                    <img className="card-item-top" src="OPHTHAMOLOGIST.png" alt="..." />
                                    <div class="card-body ">
                                        <h5 class="card-title ">Ophthamologist</h5>
                                        <p class="card-text">Ophthamology Consultation<br></br>Cataract Surgery <br></br>Glaucoma Surgery</p>
                                        <a href="/ophthalmology" class="btn btn-primary button-view">view more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div className="row" >
                        <div className=" col-sm-4">
                            <div class="item">
                                <div class="card" >
                                    <img className="card-item-top" src="Neonatologist.png" alt="..." />
                                    <div class="card-body ">
                                        <h5 class="card-title ">Neurologist</h5>
                                        <p class="card-text">Neurology Consultation <br></br>Chemotherapy <br></br>Brain Tumor Surgery</p>
                                        <a href="/neurology" class="btn btn-primary button-view">view more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div class="item">
                                <div class="card">
                                    <img className="card-item-top" src="PEDIATRICIAN.png" alt="..." />
                                    <div class="card-body ">
                                        <h5 class="card-title ">Pediatrician</h5>
                                        <p class="card-text">Padiatric Consultation <br></br>Vaccination <br></br>Heart Murmur</p>
                                        <a href="/Pediatrics" class="btn btn-primary button-view">view more</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                       
                                            </div></div>
                                            <hr width="70%"></hr>
                                           
                                            <div className="container download-area">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <img className="download-app-pic" src="Category.png"/>
                                            <img className="download-app-pic2" src="mobail.png"/>

                                        </div>
                                            <div className="col-sm-6">
                                                <p className="download-text"> Download Plunes App Now!  </p>
                                                <p className="download-text2">Book Procedures, Medical Tests & Appointments</p>
                                                <p className="download-text3">Get the link to download app</p>
                                                <div className="download-link-app">
                                                <form onSubmit = {this.sendAppLink}>
                                                <span><input id="UserMobile" value = {this.state.countryCode} onChange = {this.handleChange} name='countryCode' className="number-text2" maxLength="3" data-fv-numeric="true" data-fv-numeric-message="Please enter your numbers" data-fv-phone-country11="IN" required="required" data-fv-notempty-message="This field cannot be left blank." placeholder="+91 "  data-fv-field="data[User][mobile]"></input></span>
                                               <span> <input id="UserMobile" value = {this.state.mobileNo} className="number-text" maxLength="10" data-fv-numeric="true" data-fv-numeric-message="Please enter your numbers" data-fv-phone-country11="IN" required="required" data-fv-notempty-message="This field cannot be left blank." placeholder="Mobile No "  name = 'mobileNo' onChange = {this.handleChange}></input></span>
                                                <button type='submit' class="btn btn-primary button-view button-align">Get App Link</button>
                                                </form>
                                                </div>
                                              <span> <a href="https://apps.apple.com/us/app/plunes/id1463747553"> <img className="download-logo" src="app-store.png"/></a></span>
                                           <span><a href="https://play.google.com/store/apps/details?id=com.plunes&hl=en_IN"> <img className="download-logo2" src="Play-store.png"/></a></span>

                                     </div>
                                </div>
                        </div>
                                </div>

                </div>
                
            </div>
            

    
        </Router>
    }
}

export default LandingContainer
