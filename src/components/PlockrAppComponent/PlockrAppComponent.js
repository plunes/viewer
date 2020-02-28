import React, { Component } from 'react';
import ContainerComponent from './ContainerComponent'
import axios from 'axios'
import './PlockrAppComponent.css'
import PlockrProfileEditComponent from './PlockrProfileEditComponent'
import PlockrHeaderComponent from './PlockrHeaderComponent'
import MyComponent from './MyComponent';
import Downloader from 'js-file-downloader';


class PlockrAppComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showNumber: false,
            userDetails: {},
            mobileNo: '',
            patientMobileNo: '',
            showLogin: true,
            password: '',
            specialities: [],
            fileType: '',
            fileUrl: '',
            reportDet: {},
            showFile : false,
            failed: false

        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.handleDownload = this.handleDownload.bind(this);
    }


    async handleDownload() {
        const res = await axios.get('https://plunes.co/v4/installer/' + localStorage.getItem('uploaderUserId'));
        if (res.status === 201) {
                new Downloader({
                    url: res.data.downloadUrl
                })
                .then(function () {
                    // Called when download ended
                })
                .catch(function (error) {
                    // Called when an error occurred
                });
        }
    }

    handleSelection(select) {
        //console.log(select, 'select')
        this.setState({
            reportDet: select,
            showFile: true
        })
    }

    componentWillMount(){
    }

    async componentDidMount() {
        if (localStorage.getItem('isAuth')) {
            this.setState({
                showNumber: true,
                showLogin: false
            })
        }
        await axios.get('https://plunes.co/v4/catalogue')
            .then((res) => {
                if (res.status == 201) {
                    let catalogue = res.data;
                    let specArray = [];
                    catalogue.forEach((c) => {
                        let speciality = {
                            id: c._id,
                            name: c.speciality
                        }
                        specArray.push(speciality)
                    })
                    localStorage.setItem('specialities', JSON.stringify(specArray))
                    this.setState({
                        specialities: specArray
                    })
                }
            })
    }

    handleLogout(select){
        this.setState({
            showLogin : select,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = {
            mobileNumber: this.state.mobileNo,
            password: this.state.password
        }
        axios.post('https://plunes.co/v4/user/login', data)
            .then((res) => {
                console.log(res.status)
                if (res.status === 201) {
                    //console.log(res.status)
                    localStorage.setItem('isAuth', true)
                    localStorage.setItem('auth', res.data.token)
                    localStorage.setItem('uploaderUserId', res.data.user._id)
                    this.setState({
                        showLogin: false,
                        showNumber: true
                    })
                }
            })
            .catch((e)=> {
                    this.setState({
                        failed : true,
                        mobileNo : '',
                        password : ''
                    })
            })
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value.trim()
        })
    }

   
    render() {
            return (<div>
                <div className='container-fluid'>
                    <div className='row'>
                    <PlockrHeaderComponent />
                        <div className='col-md-8 viewFile'>
                        {
                                this.state.showFile ?
                                    <div>
                                        <div className='pdfContainer'>
                                            <MyComponent className='viewFile' key={Math.random().toString()} data={this.state.reportDet} />
                                        </div>
                                        <div className='row'>
                                            <PlockrProfileEditComponent key={Math.random().toString()} data={this.state.reportDet} />
                                        </div>
                                    </div>
                                    : <div className='row'>
                                        <div className="col-sm-2"></div>
                                        <div className="dummy">
                                            <img className="dummy-img" src="/dummy.svg" />
                                        </div>
                                        <PlockrProfileEditComponent key={Math.random().toString()} data={this.state.reportDet} />
                                    </div>
                            }
                        </div>
                        <div className='col-md-4'>
                            <ContainerComponent handleSelection={this.handleSelection} />
                        </div>
                    </div>
                </div></div>
            );
        }
    
}

export default PlockrAppComponent;