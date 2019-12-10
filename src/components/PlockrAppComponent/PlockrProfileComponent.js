import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router'


class PlockrProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.user.name ? this.props.user.name : '',
            email: this.props.user.email ? this.props.user.email : '',
            userId : localStorage.getItem('uploaderUserId'),
            patientMobileNumber : this.props.user.mobileNumber,
            problemAreaDiagnosis : '',
            reasonDiagnosis : '',
            consumptionDiet : '',
            avoidDiet : '',
            precautions : '',
            medicines : '',
            remarks : '',
            file : null,
            showLogin : false,
            imgUrl: this.props.user.imageUrl ? this.props.user.imageUrl : 'https://profile-image-plunes.s3.amazonaws.com/profilephotos/default_img.png'
        }
        // console.log(this.props.user, 'props')
        this.handleLogout =  this.handleLogout.bind(this)
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLogout(e){
        e.preventDefault();
        let token = localStorage.getItem('auth');
        console.log(token, 'token')
        axios.post('https://plunes.co/v4/user/logout', "",  { headers: { "Authorization": `Bearer ${token}` , "Content-Type" : "application/json" } })
        .then((response) => {
            localStorage.removeItem('auth');
            localStorage.removeItem('isAuth');
            localStorage.removeItem('uploaderUserId');
            this.setState({
                showLogin : true
            })
        })
        .catch(error => {
            console.log(error, 'error')
        })
    }

    handleSubmit(e){
        e.preventDefault();
        const data = new FormData();
        data.append('file', this.state.file)
        axios.post("https://plunes.co/v4/upload", data, { 
            // multipart/form-data
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        })
        .then(res => { // then print response status
        // console.log(res.data, 'filename')
            if(res.status === 200){
                //console.log(this.state.fullname)
                let body = {
                    userId : this.state.userId,
                    self: false,
                    patientMobileNumber :  this.state.patientMobileNumber,
                    problemAreaDiagnosis : this.state.problemAreaDiagnosis,
                    reasonDiagnosis : this.state.reasonDiagnosis,
                    consumptionDiet :  this.state.consumptionDiet,
                    avoidDiet : this.state.avoidDiet,
                    precautions : this.state.precautions,
                    medicines : this.state.medicines,
                    remarks : this.state.remarks,
                    reportUrl : "https://plunes.co/v4/" + res.data.path
                }
                console.log(body, 'body')
                let token = localStorage.getItem('auth')
                console.log(token, 'token')
                axios.post('https://plunes.co/v4/report', body,  { headers: { "Authorization": `Bearer ${token}` , "Content-Type" : "application/json" } })
                .then(res => {
                    console.log(res.status)
                })
            }
        })
    }

    handleChange(e){
        if(e.target.name === 'file'){
            this.setState({
                file : e.target.files[0]
            })
        }else{
            console.log(e.target.value, 'value')
            this.setState({
                [e.target.name] : e.target.value
            })
        }
        
    }

    render() {

        const { showLogin } = this.state;
        // console.log(this.state.docList, 'doclist')
        console.log(showLogin)
        if (showLogin) {
            return <Redirect to={{
                pathname: "/plockrapp",
            }} />;
        }else{
            return (
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-sm-3'>
                        </div>
                        <div className='col-sm-6'>
                            <div className='row'>
                                <div className='col-sm-2'>
                                    <img src={this.state.imgUrl} height='100px' width='100px' />
                                </div>
                                <div className='col-sm-10'>
                                    <h4>PatientID</h4>
                                    <h4>{this.state.name}</h4>
                                    <p>{this.state.email}</p>
                                </div>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Problem Area (Diagnosis)</label>
                                    <textarea className="form-control" rows="5" name='problemAreaDiagnosis' onChange= {this.handleChange} ></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Reason (Diagnosis)</label>
                                    <textarea className="form-control" rows="5" name='reasonDiagnosis' onChange= {this.handleChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Consumption (Diet)</label>
                                    <textarea className="form-control" rows="5" name='consumptionDiet' onChange= {this.handleChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Avoid (Diet)</label>
                                    <textarea className="form-control" rows="5" name='avoidDiet' onChange= {this.handleChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Precautions</label>
                                    <textarea className="form-control" rows="5" name='precautions' onChange= {this.handleChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Medicine</label>
                                    <textarea className="form-control" rows="5" name='medicines' onChange= {this.handleChange}></textarea>
                                </div>
                                <div className="form-group">
                                    <label>Remarks</label>
                                    <textarea className="form-control" rows="5" name='remarks' onChange= {this.handleChange}></textarea>
                                </div>
                                <div className='form-group'>
                                    <input type="file" name='file' onChange={this.handleChange} title="Choose a video please" id='fileinput' required />
                                    <label className="lable">(.doc, .docx, .pdf, .jpeg only)</label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <a href= '/plockrapp'>Cancel</a>
                                {/* <button type="button" class="btn btn-primary-outline" onClick = {this.handleLogout}>Back</button> */}
                            </form>
                        </div>
                        <div className='col-sm-3'>
                        </div>
                    </div>
                </div>
            );
        }

    
    }
}

export default PlockrProfileComponent;