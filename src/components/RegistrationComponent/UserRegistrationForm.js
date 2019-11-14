import React, { Component } from 'react';

class UserRegistrationForm extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <form>
                    <div className="form-group">
                        <label >Full Name</label>
                        <input className="form-control" name="fullName" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input className="form-control" name="emailId" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Mobile Number</label>
                        <input className="form-control" name="phoneNumber" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2"  >Password</label>
                        <input type="password" className="form-control" onChange={this.handleChange} name="password" />
                    </div>
                    <div className="form-group" className='buttonSignUp'>
                        <button type="submit" className="btn btn-success btn-lg btn-block">Sign Up</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UserRegistrationForm;