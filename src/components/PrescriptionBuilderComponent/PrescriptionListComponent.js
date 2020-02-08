import React, { Component } from 'react';
import '../PlockrAppComponent/PlockrAppComponent.css';
import axios from 'axios';

class PrescriptionListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            docDetails: {},
            selectedDoctor : {},
            presList : []
        }
        this.getDoctors = this.getDoctors.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.getSentPrescription = this.getSentPrescription.bind(this);
    }

    getSentPrescription() {
        let auth = localStorage.getItem('auth')
        return new Promise(async function (resolve, reject) {
            await axios.get('https://plunes.co/v4/prescription/', { headers: { "Authorization": `Bearer ${auth}` } })
                .then((res) => {
                    // console.log(res.data.prescriptions.businessPrescriptions, 'prescription');
                    let presList = res.data.prescriptions.businessPrescriptions;
                    let listArray = [];
                    if(presList && presList.length > 0){
                        presList.map((p) => {
                          if(p.prescriptionUrl && p.prescriptionUrl.length > 0){
                            listArray.push(p)
                          }
                        })
                    }
                    resolve(listArray)
                })
                .catch((e) => {
                    reject(e)
                })
        })
    }

    async handleEditClick(select) {
        this.props.handleEditTemplate(select)
    }

   async handleClick(select) {
       await this.props.handleCreateTemplate(select);
    }


    getDoctors() {
        let auth = localStorage.getItem('auth')
        return new Promise(async function (resolve, reject) {
            await axios.get('https://plunes.co/v4/user/whoami', { headers: { "Authorization": `Bearer ${auth}` } })
                .then((res) => {
                    resolve(res.data)
                })
                .catch((e) => {
                    reject(e)
                })
        })
    }

    async componentWillReceiveProps(nextProps){
        console.log(nextProps, 'scientist')
        if(nextProps.refreshList){
            let prescriptionList = await this.getSentPrescription()
            this.setState({
                presList : prescriptionList
            })
        }
        if(nextProps){
            let doctors = await this.getDoctors();
            this.setState({
                docDetails: doctors
            })
        }
    }

    async componentDidMount() {
        let doctors = await this.getDoctors();
        this.setState({
            docDetails: doctors
        })
        let prescriptionList = await this.getSentPrescription()
        this.setState({
            presList : prescriptionList        
        })
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                <h5 className="send-prescription">Sent Prescription</h5>
                    <ul className='fileContainer2 row'>
                    {
                        this.state.presList.map((p, index) => (
                            <a href= {p.prescriptionUrl} target = '_blank' key={Math.random().toString()}>
                            <div className="send-box" key={Math.random().toString()}>
                                <li className='headTab' key={Math.random().toString()} >
                                    <img src={p.prescriptionUrl + '.thumbnail.png'} height='112' width='150' onError={(e)=>{e.target.onerror = null; e.target.src="/screenshot.svg"}}></img>
                                <p className="view-plockr-builder">{p.patientName}</p>
                                </li>
                            </div>
                            </a>
                        ))        
                    }
                    </ul>
                </div>
                <div className='row justify-content-center'>
                <h3 className="send-prescription">Doctor's List</h3>
                    {
                        this.state.docDetails.userType === 'Hospital' ? this.state.docDetails.doctors.map((item, index) => (
                           <div className='row docTemplates' key={index}>
                                <div className='col-md-6'>{item.name}</div>
                                <div className='col-md-3' onClick={() => this.handleClick(item)}>
                                    {
                                        Object.entries(item.prescription).length > 1 ? true :
                                        <p className="edit">Create</p>
                                    }
                                </div>
                                <div className='col-md-3' onClick={() => this.handleEditClick(item)} >
                                    <p className="edit">Edit</p>
                                </div>
                            </div>

                        )) :
                            <div className='row docTemplates' >
                                <div className='col-md-6'>{this.state.docDetails.name}</div>
                                <div className='col-md-3' >
                                    {/* {
                                        this.state.docDetails.prescription ?
                                            <div>
                                                {
                                                    this.state.docDetails.prescription.hasOwnProperty['logoUrl'] ? true :
                                                        <p>Create</p>
                                                }
                                            </div> : false

                                    }  */}
                                    </div>
                                <div className='col-md-3' onClick={() => this.handleEditClick(this.state.docDetails)} >
                                    <p>Edit</p>
                                </div>
                            </div>
                            
                    }
                </div>
            </div>
        );
    }
}

export default PrescriptionListComponent;