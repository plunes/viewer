import React, { Component } from 'react'
import LandingHeader from '../LandingComponent/LandingHeader'
import axios from 'axios'
import { Redirect } from 'react-router'


export default class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.root = props.root
        this.state = {
            emailId: '',
            password: '',
            phone_number: '',
            redirect: false

        }
        // this.baseUrl = 'https://plunes.co/v3/';
        this.baseUrl = 'http://10.34.18.136:8000/'

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        // console.log(e.target.name)

        this.setState({ [e.target.name]: e.target.value })
        // console.log(this.state)
    }

    handleSubmit(event) {
        event.preventDefault();
        // console.log("ANshul");
        let data;
        if (this.state.emailId.includes('@')) {
            data = {
                'email': this.state.emailId,
                'password': this.state.password,
                "device_id": ""
            }
        } else {
            data = {
                'mobileNumber': this.state.emailId,
                'password': this.state.password,
                // "device_id": ""
            }
        }
        console.log(data, 'data');

        axios.post(this.baseUrl + 'user/login', data)
            .then(({ data }) => {
                if (data.err) {
                    console.log(data.err)
                }
                else {
                    console.log(data);
                    localStorage.setItem('token', data.user.token);
                    let token = localStorage.getItem('token');
                    this.root.access_token = data.token;
                    this.setState({
                        redirect: true
                    })
                }
            })
    }

    render() {
        // const { isAuth } = this.root;
        // console.log(isAuth);
        const { redirect } = this.state
        if (redirect) {
            console.log('anshul');
            return <Redirect to={{
                pathname: '/dashboard',
            }} />;
        }
        return (
            <div className='container'>
                <LandingHeader root={this.root} />
                <div className='row'>
                    <div className='col-md-4'></div>
                    <div className='col-md-4' className='login' style={{ marginTop: '100px' }}>
                        <form onSubmit={this.handleSubmit}>
                            <div className='row' style={{ paddingLeft: '150px' }}>
                                <h1>Login</h1>
                            </div>
                            <div className="form-group">
                                <label >Email</label>
                                <input type="text" className="form-control" name="emailId" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput2"  >Password</label>
                                <input type="password" className="form-control" onChange={this.handleChange} name="password" />
                            </div>
                            {/* <div className='row'>
                                    <input type="text" className="loginInput" placeholder="Password" name='password' onChange={this.handleChange} />
                                </div> */}
                            <div className='row rowButton'>
                                <div className='col-md-6 '>
                                    <button type="submit" className="btn btn-success loginButton">Login</button>
                                </div>
                                <div className='col-md-6 '>
                                    <button type="submit" className="btn btn-light loginButton"><a href = '/signup' style={{color: 'black'}}>Sign up</a></button>
                                </div>
                            </div>
                        </form>

                    </div>

                    <div className='col-md-4'></div>
                </div>
            </div>
        )
    }
}
