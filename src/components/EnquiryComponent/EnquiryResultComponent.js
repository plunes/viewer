import React, { Component } from 'react';
import axios from 'axios'
import ProfileEnquiryComponent from '../ProfileComponent/ProfileEnquiryComponent'

class EnquiryResultComponent extends Component {
    constructor(props){
        super(props);
        this.root = props.root
        this.state = {
            selectedId: ''
        }
        this.docList = [{
            'name': 'Dr. Anshul Verma',
            'id': '1'
        }];
        // this.getAllDoctors = this.getAllDoctors.bind(this);
    }
    
    // async getAllDoctors(id){
    //     // let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ZGI5MmYyZDVlYTYzYTIzMjMwMWFjMTgiLCJpYXQiOjE1NzI2MTYzNDN9.GmQ7IVX9EJWFDndjdHBVEIKMndynAnKT4qGvFjGKOvY'
    //     let response =  await axios.get(this.baseUrl + 'bidding/view_bids_of_procedure/' + bidId, { headers: {"Authorization" : `Bearer ${token}`} })
    //     .then(({data}) => {
    //         // console.log(data);
    //         if(data.err){
    //             console.log(data.err)
    //         }else{
    //             // console.log(data)
    //             return data
    //         }
    //     })
    //     // console.log(response)
    //     return response;    
    // }

    async componentDidMount(){
        let selectedId = this.root.selectedEnquiryId
        // let getAllDoc = await this.getAllDoctors(selectedId);
        // this.docList = getAllDoc;
    }

    render() {
        console.log(this.root, 'enquiry result container')
        return (
            <div className = 'container'>
                <div className = 'profileComponent'>
                {
                    this.docList.map((pdata) => {
                        console.log(pdata)
                        return <ProfileEnquiryComponent key = {pdata.id} data={pdata}  root = {this.root} />
                    })
                }
            </div>
            </div>
        );
    }
}

export default EnquiryResultComponent;