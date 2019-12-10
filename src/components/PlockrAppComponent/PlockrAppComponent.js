import React, { Component } from 'react';
import PlockrProfileComponent from './PlockrProfileComponent';
import axios from 'axios'
import './PlockrAppComponent.css'

class PlockrAppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNumber: false,
            userDetails: {},
            mobileNo: '',
            patientMobileNo : '',
            showLogin: true,
            password: ''
        }
        this.handleNumberSubmit = this.handleNumberSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlelogout = this.handlelogout.bind(this);
    }

    componentDidMount(){
        if(localStorage.getItem('isAuth')){
            this.setState({
                showNumber: true,
                showLogin : false
            })
        }
    }

    handlelogout(e){
        e.preventDefault();
        let token = localStorage.getItem('auth');
        console.log(token, 'token')
        axios.post('https://plunes.co/v4/user/logout', "",  { headers: { "Authorization": `Bearer ${token}` , "Content-Type" : "application/json" } })
        .then((response) => {
            localStorage.removeItem('auth')
            console.log(response, 'response')
        })
        .catch(error => {
            console.log(error, 'error')
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = {
            mobileNumber : this.state.mobileNo,
            password : this.state.password
        }
        axios.post('https://plunes.co/v4/user/login', data)
        .then((res) => {
            if(res.status === 201){
                console.log(res.data)
                localStorage.setItem('isAuth', true)
                localStorage.setItem('auth', res.data.token)
                localStorage.setItem('uploaderUserId' , res.data.user._id)
                this.setState({
                    showLogin : false,
                    showNumber : true
                })
            }
        })
       
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleNumberSubmit(e) {
        e.preventDefault();
        axios.get('http://plunes.co/v4/user?mobileNumber=' + this.state.patientMobileNo)
            .then(res => {
                if (res.status === 201) {
                    console.log(res.data.user, 'user')
                    this.setState({
                        showNumber : false,
                        userDetails: res.data.user
                    })
                }
            })
    }

    render() {

        if (this.state.showLogin) {
            return (
                <div className='container-fluid'>
                    <div className="navbar navbar-expand-lg navbar-light ">
                   <a href="/"> <img className="logo-img-sizeing" src="/logo.png" alt=".." /></a>

                    </div>
                    <div className='row row-align'>
                        <div className='col-sm-4'>
                        
                        </div>
                        <div className='col-sm-4 col-align'>
                            <h1 className="plockr-app-login" >Login here</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <input type="tel" className="form-control-app plockr-app-form" name='mobileNo' placeholder="Email Id" onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control-app plockr-app-form" name='password' placeholder=" Password" onChange={this.handleChange} />
                                </div>
                                <button type="submit" className="btn plockrapp-button">Login</button>
                            </form>
                        </div>
                        <div className='col-sm-4'>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='container-fluid'>
                    {
                        this.state.showNumber ? 
                        <div className="container-fluid">
                            <div className="navbar navbar-expand-lg navbar-light ">
                           <a href="/"> <img className="logo-img-sizeing" src="/logo.png" alt=".." /></a>
                            </div>
                            <form onSubmit={this.handleNumberSubmit}>
                            <div className='row row-align'>
                              <div className='col-sm-4'>
                                </div>
                                <div className="col-sm-4 col-align">
                                <div class="form-group">
                                    <h1 className="plockr-app-login">Enter your mobile number</h1>
                                    <input type="tel" className="form-control-app plockr-app-form" name='patientMobileNo' placeholder="Enter Mobile Number" onChange={this.handleChange} />
                                </div>
                                <button type="submit" className="btn plockrapp-button"> Submit</button>
                                <div className="row">
                                <button type="button" className="btn logout" onClick = {this.handlelogout}>Logout</button>

                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    </div>
                                  
                              </div>
                               
                            </form>
                        </div> : <PlockrProfileComponent user={this.state.userDetails} />
                    }
                </div>
            );
        }



    }
}

export default PlockrAppComponent;