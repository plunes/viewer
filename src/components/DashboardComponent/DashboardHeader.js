import React from 'react';
import './Dashboard.css'
class DashboardHeader extends React.Component {
    constructor(props) {
        super(props);
        this.root = props.root;
    }

    render() {
        return <div className='row'>
            <div className='col-sm-2 logo'>
                <img src='./logo.png' />

            </div>
            <div className='col-sm-2'>
            </div>
            <div className='col-sm-5' >
                <div className='row'>
                    <span className='headerDetail'>What is Plunes?</span>
                    <span className='headerDetail'>Blog</span>
                    <button type="button" className="btn btn-success downloadButton">Download App</button>
                </div>

            </div>
            <div className='col-sm-3'>
                <span>
                    <img src = './profile.jpg' alt= 'no images' height = '25px' width = '25px'/>
                </span>
                <span>
                    Anshul Verma
                </span>

            </div>
        </div>
    }
}

export default DashboardHeader