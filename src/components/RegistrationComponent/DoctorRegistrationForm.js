import React, { Component } from 'react';

class DoctorRegistrationForm extends Component {
    render() {
        return (
            <div>
                <input type="radio" name="gender" value="male"/> Male
                 <input type="radio" name="gender" value="female"/> Female

                 <form>
                      <div className="form-group">
                        
                          <input className="form-control" name="fullName" placeholder="Hospital Name" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        
                          <input className="form-control address-input" name="fullName" placeholder="Address" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        
                          <input className="form-control" name="fullName" placeholder="Mobile Number" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        
                          <input className="form-control address-input" name="fullName" placeholder="About Hospital" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        
                          <input className="form-control" name="fullName" placeholder="Registration No" onChange={this.handleChange} required/>
                    </div>
                    <div><p className=" hospital-text">Add specialization<br></br><a href="#">Add Specialization & Service </a></p>

                    </div>
                    <div className="form-group" className='buttonSignUp'>
                        <button type="submit" className="btn btn-success btn-lg btn-block">Add</button>
                    </div>
                    
                </form>

            </div>
        );
    }
}

export default DoctorRegistrationForm;