import React from 'react';
import '../LandingComponent/Landing.css';
import LandingHeader from '../LandingComponent/LandingHeader'
// import RegistrationHospitalContainer from './RegistrationContainer'



class RegistrationHospitalContainer extends React.Component {
    render() {
        return <div className = 'container'>
            <div class="row signUpContainer" >
                <div class="col-sm">

                </div>
                <div class="col-sm-6 signUp">
                    <div className='row' style={{ paddingLeft: '200px' }}>
                        <h1>Sign Up</h1>
                    </div>
                    <form className='form'>
                        <div class="form-group">
                            <label for="formGroupExampleInput">Hospital / Lab Name</label>
                            <input type="text" class="form-control" id="formGroupExampleInput" />
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Address</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" />
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">PIN code</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" />
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Full Name</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" />
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Email</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" />
                        </div>
                        <div class="form-group">
                            <label for="formGroupExampleInput2">Password</label>
                            <input type="text" class="form-control" id="formGroupExampleInput2" />
                        </div>
                        <div class="form-group" className = 'buttonSignUp'>
                            <button type="button" class="btn btn-success btn-lg btn-block">Sign Up</button>
                        </div>
                    </form>
                    <div className = 'row' className = 'backButton'>
                        <p> <i class="arrow left"></i></p>
                        <a href='/' style= {{color:'grey'}}>Back</a>
                    </div>
                </div>
                <div class="col-sm">

                </div>
            </div>
        </div>
    }
}
export default RegistrationHospitalContainer;