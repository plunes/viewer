import React from 'react';
import '../LandingComponent/Landing.css';
import LandingHeader from '../LandingComponent/LandingHeader'
import RegistrationHospitalContainer from './RegistrationHospitalContainer'



class RegistrationHospitalComponent extends React.Component {
    constructor(props){
        super(props);
        this.root = props.root;        


    }
    render() {
        return <div className = 'container'>
           <LandingHeader root = {this.root} />
           <RegistrationHospitalContainer root = {this.root}/>
        </div>
    }
}
export default RegistrationHospitalComponent;