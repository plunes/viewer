import React from 'react';
import './Landing.css'
import { Link } from 'react-router-dom';

class LandingHeader extends React.Component {
    constructor(props){
        super(props);
        // console.log(props.root, "Landing Header");
        this.root = props.root;
    }
    render() {
        // console.log(this.root.isAuth, "Anshul")
        return <div className='row'>
            <div className='col-md-2 logo'>
                <img src='./logo.png' height='60px' width='150px' alt = 'no image' />
            </div>
            <div className='col-md-3'>
            </div>
            <div className='col-md-6' >
                <div className='row topRightHeader'>
                    <button type="button" className="btn btn-success downloadButton "><a href="https://play.google.com/store/apps/details?id=com.plunes&hl=en" style = {{color: 'white', paddingBottom : '10px'}}>Download App</a></button>
                    <button type="button" className="btn  navButton"> <Link to="/login" className = 'linkClass' >Login</Link></button>
                    <button type="button" className="btn navButton"><Link to="/signup" className = 'linkClass'>Sign up</Link></button>
                </div>
            </div>
        </div>
    }
}

export default LandingHeader