import React, { Component } from 'react';
import './LoginComponent.css'

class LoginContainer extends Component {


    render() {
        return (
            <div class="container">
            <div class="row">
                <div class="col-xl-6"><div>
                  <img className="loginImage" style={{marginTop: '80px'}} src="login.png" />
                    </div>
                </div>
                <div class="col-xl-6">
                  <div className = 'row'>
                    <div className = 'col-md-1'>

                    </div>
                    <div className = 'col-md-6'>
                    <h4 class="login-text">Login</h4>
                     <form action="">
                      <div  class=" form-group">
                        <input class="form-control inputLogin"   name="email" placeholder="Email id" id="myInput" />
                      </div>
                      <div  class="form-group">
                        <input class="form-control inputLogin"   name="password" placeholder="Password" id="myInput" />
                          <button class="button-login">Login</button>
                      </div>
                    </form>
                    <a href="/signup" ><h6 className="forgotPassword" >Forgot Password?</h6></a>
                    <h6 className="signupClass" >Don't have an account?<a href="#" >Signup</a> </h6>
                  </div>
                </div>
            </div>
        </div>
        </div>
        );
    }
}

export default LoginContainer;