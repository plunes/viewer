import React from 'react';
import './Landing.css'
import { Link } from 'react-router-dom';

class LandingHeader extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props.root, "Landing Header");
    this.root = props.root;
  }
  render() {
    // console.log(this.root.isAuth, "Anshul")
    return <div className='container-fluid header-position'>
      <nav class="navbar navbar-expand-lg navbar-light  ">
        <a class="navbar-brand" href="/"><img style={{ height: '52px', width: '130px', marginLeft: '55px' }} src="logo.png" alt="" /></a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav2 nav-item downApp">
              <div class="dropdown ">
                <button type="button" class="btn dropdown-toggle  " data-toggle="dropdown" >
                  Download the App
                    </button>

                <ul class="dropdown-menu ">
                  <li><a href="https://apps.apple.com/us/app/plunes/id1463747553">
                    <img className="ios" src="ios.png" alt=""/>
                   <span className="ios-img-header"> iOS</span> </a>
                  </li>
                  <hr width="70%"></hr>
                  <li>
                    <a href="https://play.google.com/store/apps/details?id=com.plunes&hl=en_IN"><img className="android" src="Android.png" alt=""/>
                     <span className="ios-img-header"> Android </span></a>
                  
                  </li>

                </ul>
              </div>
              <div className="nav333">

              </div>
            </li>
            <li className="nav-item nav2">
              <a className="nav-link nav3" href="/login">Login</a>
            </li>
            <li className="nav-item nav2">
              <a className="nav-link nav3" href="/signup">Signup</a>
            </li>

          </ul>

        </div>
      </nav>
    </div>
  }
}

export default LandingHeader