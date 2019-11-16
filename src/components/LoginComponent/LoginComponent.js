import React, { Component } from 'react'
import LandingHeader from '../LandingComponent/LandingHeader'
import LoginContainer from '../LoginComponent/LoginContainer'
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
            <div class="container-fluid">
                <LandingHeader root = {this.root}/>
                <LoginContainer root = {this.root} />
            </div>
        )
    }
}


 