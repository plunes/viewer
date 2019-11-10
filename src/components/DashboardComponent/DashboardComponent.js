import React from 'react';
import '../LandingComponent/Landing.css';
import DashboardHeader from '../DashboardComponent/DashboardHeader'
import DashboardContainer from '../DashboardComponent/DashboardContainer'

class DashboardComponent extends React.Component {
    constructor(props){
        super(props);
        this.root = props.root;
    
    }
    

    render() {
        // const { latitude, longitude } = this.state

        return <div className = 'container'>
                <DashboardHeader root = {this.root}/>
                <DashboardContainer root = {this.root}/>
        </div>
    }
}
export default DashboardComponent