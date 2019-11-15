import React from 'react';
import '../LandingComponent/Landing.css';
import LandingHeader from '../LandingComponent/LandingHeader'
import RegistrationContainer from './RegistrationContainer'
import axios from 'axios';



class RegistrationComponent extends React.Component {
    constructor(props){
        super(props);
        console.log(props.root ,"Registration")
        this.root = props.root
    }
    render() {
        return <div className = 'container-fluid'>
           <LandingHeader root = {this.root}/>
           <RegistrationContainer root = {this.root}/>
        </div>
    }
}
export default RegistrationComponent