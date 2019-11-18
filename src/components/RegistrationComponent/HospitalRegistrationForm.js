import React, { Component } from 'react';

class HospitalRegistrationForm extends Component {
    render() {
        return (
            <div>
               

                 <form>
                 <input type="radio" name="gender" value="male"/> Male
                 <input type="radio" name="gender" value="female"/> Female
                 
                      <div className="form-group">
                        
                          <input className="form-control2" name="fullName" placeholder="Hospital Name" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        
                          <textarea className="form-control2 " rows="3" name="fullName" placeholder="Address" onChange={this.handleChange} required></textarea>
                    </div>
                    <div className="form-group">
                        
                          <input className="form-control2" name="fullName" placeholder="Mobile Number" onChange={this.handleChange} required/>
                    </div>
                    <div className="form-group">
                        
                          <textarea className="form-control2 " rows="3" name="fullName" placeholder="About Hospital" onChange={this.handleChange} required></textarea>
                    </div>
                    <div className="form-group">
                        
                          <input className="form-control2" name="fullName" placeholder="Registration No" onChange={this.handleChange} required/>
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

export default HospitalRegistrationForm;