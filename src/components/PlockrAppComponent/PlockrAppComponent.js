import React, { Component } from 'react';
import PlockrProfileComponent from './PlockrProfileComponent';
import axios from 'axios'

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
        // console.log('anshul')
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
            localStorage.removeItem('auth');
            localStorage.removeItem('isAuth');
            localStorage.removeItem('uploaderUserId');
            this.setState({
                showNumber: false,
                showLogin : true
            })
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
                    <div className='row'>
                        <div className='col-md-3'>
                        </div>
                        <div className='col-md-6'>
                            <h1>Login Form</h1>
                            <form onSubmit={this.handleSubmit}>
                                <div class="form-group">
                                    <label>Enter your Mobile Number</label>
                                    <input type="tel" className="form-control" name='mobileNo' placeholder="Enter your Number" onChange={this.handleChange} />
                                </div>
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" className="form-control" name='password' placeholder="Enter Password" onChange={this.handleChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                        <div className='col-md-3'>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='container'>
                    {
                        this.state.showNumber ? <div class="jumbotron">
                            <form onSubmit={this.handleNumberSubmit}>
                                <div class="form-group">
                                    <label>Enter your mobile number</label>
                                    <input type="tel" className="form-control" name='patientMobileNo' placeholder="Enter Mobile Number" onChange={this.handleChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <button type="button" className="btn btn-primary" onClick = {this.handlelogout}>Logout</button>
                            </form>
                        </div> : <PlockrProfileComponent user={this.state.userDetails} />
                    }
                </div>
            );
        }



    }
}

export default PlockrAppComponent;