import React from 'react';
import './Landing.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import RegistrationContainer from '../RegistrationComponent/RegistrationComponent'
import axios from 'axios';
import { Redirect } from 'react-router'


class LandingContainer extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props.root, "Landing Container");
        // console.log(props)
        this.root = props.root;
        this.state = {
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
        console.log(this.state.selectedData);

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
                console.log(data)
                if (data.err) {
                    console.log(data.err)
                }
                else {
                    // console.log(data, 'list of procedures');
                    //Copy from NoSQLBooster for MongoDB free edition. This message does not appear if you are using a registered version.

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
                    <h1 class="h11">Find the best offer on Diagnostic Tests <br></br> & Medical Procedures. </h1>
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
                <hr width="70%"></hr>
                <div> <h3 class="header"> Avail upto 50% of on Medical
              procedures,<br></br> diagnostics & appointments.
               </h3></div>
                <div className="container-fluid">
                    <div className="row" >
                        <div className=" col-sm-4">
                            <div class="item">
                                <div class="card" >
                                    <img className="card-item-top" src="Dentist.png" alt="..." />
                                    <div class="card-body ">
                                        <h5 class="card-title ">Dentist</h5>
                                        <p class="card-text">Root canal Treatment (TCT)<br></br>Teeth whitening<br></br>Scaling & Polishing Dental Filling..</p>
                                        <a href="#" class="btn btn-primary button-view">view more</a>
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
                                        <p class="card-text">Spinal Fusion Surgery<br></br>Arthoplasty<br></br>Bone Grafting ...</p>
                                        <a href="#" class="btn btn-primary button-view">view more</a>
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
                                        <p class="card-text">Botox Treatment<br></br>Skin Booster & Treatments <br></br>Dermaroller..</p>
                                        <a href="#" class="btn btn-primary button-view">view more</a>
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
                                        <p class="card-text">Cervical Amputation <br></br>Bartholins Cyst<br></br>Scaling & Laser Ablation..</p>
                                        <a href="#" class="btn btn-primary button-view">view more</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-4">
                            <div class="item" >
                                <div class="card ">
                                    <img className="card-item-top" src="VETERINARY.png" alt="..." />
                                    <div class="card-body ">
                                        <h5 class="card-title ">Psychiatrists</h5>
                                        <p class="card-text">Conduct Disorder<br></br>Autism Assessment & Stress Management...</p>
                                        <a href="#" class="btn btn-primary button-view">view more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div class="item" >
                                <div class="card ">
                                    <img className="card-item-top" src="PLASTIC-SURGEON.png" alt="..." />
                                    <div class="card-body ">
                                        <h5 class="card-title ">Psychiatrists</h5>
                                        <p class="card-text">Conduct Disorder<br></br>Autism Assessment & Stress Management...</p>
                                        <a href="#" class="btn btn-primary button-view">view more</a>
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
                                        <h5 class="card-title ">Dentist</h5>
                                        <p class="card-text">Root canal Treatment (TCT)<br></br>Teeth whitening<br></br>Scaling & Polishing Dental Filling..</p>
                                        <a href="#" class="btn btn-primary button-view">view more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div class="item">
                                <div class="card">
                                    <img className="card-item-top" src="Pathology.png" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title ">Orthopedics</h5>
                                        <p class="card-text">Spinal Fusion Surgery<br></br>Arthoplasty<br></br>Bone Grafting ...</p>
                                        <a href="#" class="btn btn-primary button-view">view more</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-4">
                            <div class="item">
                                <div class="card ">
                                    <img className="card-item-top" src="OPHTHAMOLOGIST.png" alt="..." />
                                    <div class="card-body ">
                                        <h5 class="card-title ">Dermatologists</h5>
                                        <p class="card-text">Botox Treatment<br></br>Skin Booster & Treatments <br></br>Dermaroller..</p>
                                        <a href="#" class="btn btn-primary button-view">view more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" >
                        <div className=" col-sm-4">
                            <div class="item">
                                <div class="card" >
                                    <img className="card-item-top" src="Neurologist.png" alt="..." />
                                    <div class="card-body ">
                                        <h5 class="card-title ">Dentist</h5>
                                        <p class="card-text">Root canal Treatment (TCT)<br></br>Teeth whitening<br></br>Scaling & Polishing Dental Filling..</p>
                                        <a href="#" class="btn btn-primary button-view">view more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div class="item">
                                <div class="card">
                                    <img className="card-item-top" src="PEDIATRICIAN.png" alt="..." />
                                    <div class="card-body ">
                                        <h5 class="card-title ">Orthopedics</h5>
                                        <p class="card-text">Spinal Fusion Surgery<br></br>Arthoplasty<br></br>Bone Grafting ...</p>
                                        <a href="#" class="btn btn-primary button-view">view more</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-4">
                            <div class="item">
                                <div class="card">
                                    <img className="card-item-top" src="Allergist.png" alt="..." />
                                    <div class="card-body ">
                                        <h5 class="card-title ">Dermatologists</h5>
                                        <p class="card-text">Botox Treatment<br></br>Skin Booster & Treatments <br></br>Dermaroller..</p>
                                        <a href="#" class="btn btn-primary button-view">view more</a>
                                    </div>
                                </div>
                            </div>
                            
                                            </div>
                                            <hr width="70%"></hr>
                                            <div className="container">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <img className="download-app-pic" src="Category.png"/>
                                            <img className="download-app-pic2" src="mobail.png"/>

                                        </div>
                                            <div className="col-sm-6">
                                                <p> Download Plunes App Now!  </p>
                                                <p>Book Procedures, Medical Tests & Appointments</p>
                                                <p>Get the link to download link</p>
                                                <input type="tel" placeholder="Enter your Number" name="usrtel"></input>
                                                <img className="download-logo" src="app-store.png"/>
                                            <img className="download-logo" src="Play-store.png"/>

                                     </div>
                                </div>
                        </div>
 

                        <hr width="70%"></hr>
                        

                    </div>

                                </div>

                </div>
                
            </div>
            

    
        </Router>
    }
}

export default LandingContainer
