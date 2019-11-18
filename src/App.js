import React from 'react';
import axios from 'axios'
import './App.css';
import LandingPage from './components/LandingComponent/LandingPage';
import { Route, Switch } from 'react-router-dom';
import RegistrationComponent from './components/RegistrationComponent/RegistrationComponent';
import DashboardComponent from './components/DashboardComponent/DashboardComponent'
import SolutionResultComponent from './components/SolutionSearchComponent/SolutionResultComponent'
import ConfirmBookingComponent from './components/ConfirmBooking/ConfirmBookingComponent'
import Post from './components/ReduxComponent/Post'
import EnquiryComponent from './components/EnquiryComponent/EnquiryComponent'
import EnquiryResultComponent from './components/EnquiryComponent/EnquiryResultComponent'
// import ProfileComponent from './components/ProfileComponent/ProfileComponent'

// import PreviousEnquiryComponent from './components/EnquiryComponent/PreviousEnquiryComponent'
import LoginComponent from './components/LoginComponent/LoginComponent'
import ForgotPasswordComponent from './components/LoginComponent/ForgotPassword'

import ProfileComponent from './components/ProfileComponent/ProfileComponent'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.root  = {
      isAuth: false,
      doctorList: [],
      docDetail:{},
      baseUrl: 'http://13.233.151.26:8000/',
      serviceList: []
    }
    // console.log(this.props , 'Anshul')
    //   this is the application object which contains all the info related to render and the logic
    //   this object shud be passed to each component , so that component can have the data to render
    //   while adding the keys/ objects/ payload , you shud consider the path 
    //  path here is the key vales
    //  
    /**
     *  ex root = {
     *         Dashboard: {
     *          Userprofiles : [] //  array of user profiles data
     * }    } 
     * 
     * so the userProfile component have a path =  [root,Dashboard,userProfiles].
     * this path approach may help you in abstraction maybe , but a clarifity on where to find a component data in root object
     * 
     */
  }

  async  componentDidMount(){
    const res = await fetch('http://13.233.151.26:8000/catalogue')
    const catalogue = await res.json()
    
   await catalogue.forEach((item) => {
      // console.log(item);
      let speciality = {
        specialityId : item._id,
        speciality: item.speciality
      }
      this.root.serviceList.push(speciality)
      // console.log('anshul123')
    })
    // console.log('anshul000')

    // this.setState({something})
    // if(localStorage.getItem('token')){
    //     this.root.isAuth = true
    // }else{
    //     this.root.isAuth = true
    // }
  }
  


  render() {
    const App = () => (
      <div className = 'container-fluid'>
        <Switch>
          <Route exact path='/' component={() => (<LandingPage root={this.root} />)} />
          <Route exact path='/signup' component={() => (<RegistrationComponent root={this.root} />)} />
          <Route exact path='/login' component={() => (<LoginComponent root={this.root} />)} />
          <Route exact path='/forgot_password' component={() => (<ForgotPasswordComponent root={this.root} />)} />
          <Route exact path='/dashboard' component={() => (<DashboardComponent root={this.root} />)} />
          <Route exact path='/solutionResult' component={() => (<SolutionResultComponent root={this.root} />)} />
          <Route exact path='/confirmBooking' component={() => (<ConfirmBookingComponent root={this.root}  />)} />
          <Route exact path='/enquiry' component={() => (<EnquiryComponent root={this.root} />)} />
          <Route exact path='/enquiryresult' component={() => (<EnquiryResultComponent root={this.root} />)} />
          <Route exact path='/profile' component={() => (<ProfileComponent root={this.root} />)} />
        </Switch>
      </div>
    )
    return (
      <Switch>
        <App />
      </Switch>
    )
  }
}