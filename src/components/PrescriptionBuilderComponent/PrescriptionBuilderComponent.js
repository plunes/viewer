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