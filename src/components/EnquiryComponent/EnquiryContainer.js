import React, { Component } from 'react';
import "./EnquiryComponent.css";
import axios from 'axios'
import { Redirect } from 'react-router'


class EnquiryContainer extends Component {
    constructor(props){
        super(props);
        this.root = props.root;
        this.state = {
            searchDoctor: false,
            enquiryInput : '',
            specialities : [
            {
                specialityId : '1',
                speciality : 'Dentist'
            },
            {
                specialityId : '2',
                speciality : 'Dentist2'
            },
            {
                specialityID : '3',
                speciality : 'Dentist3'
            }
            ],
            selectedSpecialityId:''
        }
        this.baseUrl = 'http://10.34.18.136:8000/'
        this.data = [];
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getAllSpecialities = this.getAllSpecialities.bind(this);
    }

    getAllSpecialities(){
       
        return new Promise(async (resolve, reject) => {
            try{

            }catch{

            }
        })
    }

    handleChange(e){
        this.setState({ enquiryInput : e.target.value });
        if (this.state.enquiryInput.length > 1) {
            const { enquiryInput, specialities } = this.state;
            const lowercasedFilter = enquiryInput.toLowerCase();
            const filteredData = specialities.filter(item => {
                let result = false;
                Object.keys(item).forEach(key => {
                    // if (key == 'procedure' || key == 'tag') {
                        let smallData = item[key].toString().toLowerCase();
                        if (smallData.includes(lowercasedFilter)) {
                            result = true;
                        }
                    // }
                });
                return result;
            });
            this.data = filteredData
        }
    }

    handleClick(e){
        let selectedId = e.currentTarget.dataset.value;
        this.setState({
            selectedSpecialityId : selectedId,
            searchDoctor: true
        })
        this.root.selectedEnquiryId = selectedId
    }


    async componentDidMount() {
        console.log(this.root.serviceList, 'anshul')
        // console.log(this.props.root, 'verma')
        await this.getAllSpecialities()
        console.log(1)
    }




    render() {
        const { searchDoctor } = this.state;
        // console.log(this.state.docList, 'doclist')
        if (searchDoctor) {
            return <Redirect to={{
                pathname: "/enquiryResult/",

            }} />;
        }

        return (
            <div className='row'>
                <div className='col-md-2'>
                </div>
                <div className='col-md-7 '>
                   
                    <div className = 'row'>

                    </div>
                    <div className = 'row'>
                        <input className="form-controll" placeholder="Choose Speciality" aria-label="Username" aria-describedby="basic-addon1" onChange = {this.handleChange}/>
                        <div className='row'>
                            <ul>
                                {
                                    this.data.map((item, i) => (
                                        <li key={i} data-value={item.specialityId} onClick={this.handleClick} >
                                            {item.speciality}
                                        </li>
                                    ))
                                    }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-md-3'>
                    <button>Solution Activities</button>
                </div>
            </div>
        )
    }
}

export default EnquiryContainer;