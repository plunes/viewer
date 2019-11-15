import React, { Component } from 'react';
import { link } from 'fs';
import { tsUndefinedKeyword } from '@babel/types';

class UserRegistrationForm extends Component {
    componentDidMount() {
        this._isMounted = true;
        window.onpopstate = ()=> {
        //   if(this._isMounted) {
        //     const { hash } = location;
        //     if(hash.indexOf('home')>-1 && this.state.value!==0)
        //       this.setState({value: 0})
        //     if(hash.indexOf('users')>-1 && this.state.value!==1)
        //       this.setState({value: 1})
        //     if(hash.indexOf('data')>-1 && this.state.value!==2)
        //       this.setState({value: 2})
        //   }
        }
      }
    render() {
        return (
            <div >

                 <input type="radio" name="gender" value="male"/> Male
                 <input type="radio" name="gender" value="female"/> Female



                <form>
                    

                    
                    <div className="form-group">
                        
                        
                        <input className="form-control" name="fullName" placeholder="Name" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        
                        <input className="form-control" name="emailId" placeholder="Mobile Number" onChange={this.handleChange}  required/>
                    </div>
                    <div className="form-group">
                        
                        <input className="form-control" name="phoneNumber" placeholder="Email id" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
            
                        <input type="password" className="form-control" placeholder="Date of birth" onChange={this.handleChange} name="password" required />
                    </div>
                    <div className="form-group"><span>
            <img src="eye.png"/>
            <input type="password" className="form-control" placeholder="Password" onChange={this.handleChange} name="password" required/></span>
        </div>  
        <div className="form-group">
            
            <input type="password" className="form-control form-text-location" placeholder="Location" onChange={this.handleChange} name="password" required/>
        </div>
        <div className="form-group">
            
            <input type="password" className="form-control " placeholder="Enter Referal Code (Optional)" onChange={this.handleChange} name="password" required/>
        </div>
                    
                    <div className="form-group" className='buttonSignUp'>
                        <button type="submit" className="btn btn-success btn-lg btn-block">Sign Up</button>
                    </div>
                </form>
                <div>
                   <p className="last-text">By registering, you agree to our<br></br><a href="#" >Terms of Service </a> </p>

                    </div>
            </div>
        );
    }
}

export default UserRegistrationForm;