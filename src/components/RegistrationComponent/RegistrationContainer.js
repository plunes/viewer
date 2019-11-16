import React from 'react';
import '../LandingComponent/Landing.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import UserRegistrationForm from "../RegistrationComponent/UserRegistrationForm";
import DoctorRegistrationForm from "../RegistrationComponent/DoctorRegistrationForm";
import HospitalRegistrationForm from '../RegistrationComponent/HospitalRegistrationForm'

import './RegistrationComponent.css'

class RegistrationComponent extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props.root, "Registration")
        this.root = props.root
        this.state = {
            userType:'',
            showLogin: false,
            showGeneralUserForm: true,
            showDoctorForm: false,
            showHospitalForm: false,
        };
        this.baseUrl = 'http://10.34.18.136:8000/'
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        let selectedValue = e.target.value;
        switch(selectedValue){
            case 'userForm':
                this.setState({
                    showGeneralUserForm : true,
                    showDoctorForm : false,
                    showHospitalForm : false,
                    userType: 'User'
                })
                break;
            case 'docForm':
                    this.setState({
                        showGeneralUserForm : false,
                        showDoctorForm : true,
                        showHospitalForm : false,
                        userType: 'Doctor'
                    })
                break;
            case 'hospitalForm':
                    this.setState({
                        showGeneralUserForm : false,
                        showDoctorForm : false,
                        showHospitalForm : true,
                        userType: 'Hospital'
                    })
                break;    
        }
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
                                <select class="form-control" onChange = {this.handleChange}>
                                    <option value= 'userForm'>General User</option>
                                    <option value= 'docForm'>Doctors</option>
                                    <option value= 'hospitalForm'>Hospitals</option>
                                </select>
                            </div>
                            {
                                this.state.showGeneralUserForm ?
                                <UserRegistrationForm userType = {this.state.userType} /> : null
                            }
                            {
                                this.state.showDoctorForm ? 
                                <DoctorRegistrationForm userType = {this.state.userType} /> : null
                            }
                            {
                                this.state.showHospitalForm ?
                                <HospitalRegistrationForm userType = {this.state.userType}/> : null 
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default RegistrationComponent
