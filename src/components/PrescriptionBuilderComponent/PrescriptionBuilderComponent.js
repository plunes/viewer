import React, { Component } from 'react';
import './PrescriptionBuilderComponent.css';
import axios from 'axios';
import CreateBuilderComponent from '../PrescriptionBuilderComponent/CreateBuilderComponent'
import PrescriptionListComponent from '../PrescriptionBuilderComponent/PrescriptionListComponent'
import { Link } from 'react-router-dom'
import PrescriptionHeaderComponent from '../PrescriptionBuilderComponent/PrescriptionHeaderComponent';
import PrescriptionDashboardComponent from './PrescriptionDashboardComponent';
import { Redirect } from 'react-router'



class PrescriptionBuilderComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showLogin: true,
            showDoc: false,
            mobileNo: '',
            password: '',
            failed: false,
            generatePrescription: true,
            savedPrescription: false,
            patientPrescription: false,
            docDetails: {},
            forDoctor: false,
            docUserDetails: {}
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlelogout = this.handlelogout.bind(this);
        this.handleSelection = this.handleSelection.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(doc) {
        console.log(doc, 'doc');
    }

    handleSelection(select) {
        this.setState({
            // reportDet: select,
            // showFile: true
        })
    }


    handlelogout(e) {
        e.preventDefault();
        let token = localStorage.getItem('docAuth');
        axios.post('https://plunes.co/v4/user/logout', "", { headers: { "Authorization": `Bearer ${token}`, "Content-Type": "application/json" } })
            .then((response) => {
                localStorage.removeItem('docAuth')
                localStorage.removeItem('docDetails')
                this.setState({
                    showNumber: false,
                    showLogin: true
                })
            })
            .catch(error => {
                console.log(error, 'error')
            })
    }

    getDocDetails() {
        return new Promise(function (resolve, reject) {
            let doc = JSON.parse(localStorage.getItem('docDetails'))
            resolve(doc)
        })
    }

    async componentDidMount() {
        if (localStorage.getItem('docAuth')) {
            this.setState({
                showLogin: false
            })
        }
        let doc = await this.getDocDetails();
        if (doc.userType == 'Hospital') {
            this.setState({
                docDetails: doc,
                showDoc: true
            });
        } else {
            this.setState({
                forDoctor: true,
            })
        }

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value.trim()
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
                // console.log(res.status)
                if (res.status === 201) {
                    localStorage.setItem('isAuth', true)
                    localStorage.setItem('docAuth', res.data.token)
                    localStorage.setItem('docDetails', JSON.stringify(res.data.user))
                    this.setState({
                        showLogin: false,
                    })
                }
            })
            .catch((e) => {
                this.setState({
                    failed: true,
                    mobileNo: '',
                    password: ''
                })
            })
    }
    

    render() {
        const { forDoctor } = this.state
        if (forDoctor) {
            return <Redirect to={{
                pathname: '/prescription-dashboard',
            }}
            />
        }

        return (
            <div>
            <div className='container-fluid'>
                <div className='row'>
                <PrescriptionHeaderComponent />

                    <div className='col-md-2'>
                    </div>
                    <div className='col-md-8'>
                        <h3 className='text-center'>Choose the Doctor</h3>
                        <ul className='doclist'>
                            {
                                this.state.docDetails.doctors ? this.state.docDetails.doctors.map((doc, index) => (
                                    <li key={index}>
                                        <Link key={index} to={{
                                            pathname: '/prescription-dashboard',
                                            state: {
                                                docDetails: doc,
                                            }
                                        }}>{doc.name}
                                        </Link>
                                    </li>
                                ))
                                    : <div>No doc available</div>
                            }
                        </ul>
                    </div>
                    <div className='col-md-2'>
                    </div>
                </div>
            </div></div>
        );
    }
}

export default PrescriptionBuilderComponent;