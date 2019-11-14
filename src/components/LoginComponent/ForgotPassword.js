import React, { Component } from 'react';
import DashboardHeader from '../DashboardComponent/DashboardContainer'

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.root = props.root
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){

    }
    
    render() {
        return (
            <div className='container-fluid'>
                <DashboardHeader root={this.root} />
                <div className='row'>
                    <div className='col-md-3'>

                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            Please enter your Email id or Mobile Number
                        </div>
                        <form>
                            <div className="form-group">
                                <input className="form-control" name="password" onChange={this.handleChange} />
                            </div>
                        </form>
                    </div>
                    <div className='col-md-3'>

                    </div>
                </div>
            </div>
        );
    }
}

export default ForgotPassword;