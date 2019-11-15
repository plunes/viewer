import React, { Component } from 'react';

class UserRegistrationForm extends Component {
    componentDidMount() {
        // this._isMounted = true;
        // window.onpopstate = ()=> {
        //   if(this._isMounted) {
        //     const { hash } = location;
        //     if(hash.indexOf('home')>-1 && this.state.value!==0)
        //       this.setState({value: 0})
        //     if(hash.indexOf('users')>-1 && this.state.value!==1)
        //       this.setState({value: 1})
        //     if(hash.indexOf('data')>-1 && this.state.value!==2)
        //       this.setState({value: 2})
        //   }
        // }
      }
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