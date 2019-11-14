import React from 'react';
import '../LandingComponent/Landing.css';
// import LandingHeader from '../LandingComponent/LandingHeader'
// import RegistrationContainer from '../RegistrationComponent/'
import axios from 'axios';
// import Redirect from 'react-dom'
import { Redirect } from 'react-router-dom'
import './RegistrationComponent.css'

class RegistrationComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.root, "Registration")
        this.root = props.root
        this.state = {
            fullName: '',
            emailId: '',
            phoneNumber: '',
            password: '',
            gender: '',
            showLogin: false,
            showGeneralUserForm: true,
            showDoctorForm: false,
            showHospitalForm: false,
            form: ''
        };

        // this.baseUrl = 'https://plunes.co/v3/';
        this.baseUrl = 'http://10.34.18.136:8000/'
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleForm =  this.handleForm.bind(this)
    }

    handleForm(e){
        this.setState({
            form : e.target.value
        })
        switch(this.state.form){
            case 'userForm':
                this.state.showGeneralUserForm = true;
                this.state.showDoctorForm = false;
                this.state.showHospitalForm = false
                break;
            case 'docForm':
                this.state.showDoctorForm = true;
                this.state.showGeneralUserForm = false;
                this.state.showHospitalForm = false
                break;
            case 'hospitalForm':
                this.state.showHospitalForm = true;
                this.state.showDoctorForm = false;
                this.state.showGeneralUserForm = false;
                break;    
        }
    }

    handleChange(e) {
        //console.log(this.state)
        this.setState({ [e.target.name]: e.target.value })
        
    }

    handleSubmit(event) {
        console.log("Anshul")

        event.preventDefault();


        //Api for Registration
        let data = {
            'email': this.state.emailId,
            'mobileNumber': this.state.phoneNumber,
            'password': this.state.password,
            'name': this.state.fullName,
            'address': 'XXXXXXX',
            // 'userType': 'General User',
            // 'dateOfBirth' : Date.now(),
            // 'latitude': this.root.latitude,
            // 'longitude': this.root.longitude,
            // 'qualification': '',
            // 'imageUrl': '',
            // 'user_location': this.root.address,
            // 'experience': '',
            'gender': 'M',
            // 'specialist': '',
            // 'specialistbio': '',
            // 'commondisease': '',
            // 'specialistservices': '',
            // 'symptoms': '',
            // 'referral_code': ''

        }

        // this.props.history.push("/dashboard");
        // console.log(history, "Anshul")

        axios.post(this.baseUrl + 'user/register', data)
            .then(({ data }) => {
                console.log(data);
                if (data.err) {
                    //message.error(data.msg);
                    console.log(data.err)
                }
                else {
                    this.setState({ showLogin: true })
                }
            })
    }



    render() {
        const { showLogin } = this.state

        if (showLogin) {
            return <Redirect to='/login' />
        }

        return (
            <div className="container">
                <div className='row'>
                    <div className='col-md-6'>
                        <img className="signImage" style={{ marginTop: '80px' }} src="signup.png" />
                    </div>
                    <div className='col-md-6'>
                        <div className='col-md-1'>

                        </div>

                        <div className="col-md-6 signupContainer">
                            <div className='row'>
                                <h4 class="signUpText">Sign up</h4>
                            </div>
                            <div class="form-group">
                                <select class="form-control" name='form' onChange = {this.handleForm}>
                                    <option value= 'userForm'>1</option>
                                    <option value= 'docForm'>2</option>
                                    <option value= 'hospitalForm'>3</option>
                                </select>
                            </div>
                            {this.state.showGeneralUserForm ?
                                // <form>
                                //     <div className="form-group">
                                //         <label >Full Name</label>
                                //         <input className="form-control" name="fullName" onChange={this.handleChange} />
                                //     </div>
                                //     <div className="form-group">
                                //         <label >Email</label>
                                //         <input className="form-control" name="emailId" onChange={this.handleChange} />
                                //     </div>
                                //     <div className="form-group">
                                //         <label>Mobile Number</label>
                                //         <input className="form-control" name="phoneNumber" onChange={this.handleChange} />
                                //     </div>
                                //     <div className="form-group">
                                //         <label htmlFor="formGroupExampleInput2"  >Password</label>
                                //         <input type="password" className="form-control" onChange={this.handleChange} name="password" />
                                //     </div>
                                //     <div className="form-group" className='buttonSignUp'>
                                //         <button type="submit" className="btn btn-success btn-lg btn-block">Sign Up</button>
                                //     </div>
                                // </form> 
                                <div>General Form</div>: null
                            }
                            {
                                this.state.showDoctorForm ? 
                                <div>Doctor Sign Up</div> : null

                            }
                            {
                                this.state.showHospitalForm ?
                                <div>Hospital Sign up</div> : null 
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default RegistrationComponent
