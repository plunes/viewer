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
        return <div className = 'container-fluid'>
  <nav class="navbar navbar-expand-lg navbar-light  ">
    <a class="navbar-brand" href="#"><img style={{height:'52px', width:'130px'}} src="logo.png" /></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav2 nav-item active">
          <div class="nav333">
            <a class="nav33  nav-link _app " href="#">
              <h6 class="nn "><span><img className="ios" src="iOS.png"
                  />
                  <img className="android" src="Android.png" /> Download App</span>
                  </h6>
            </a>
            </div>
        </li>
        <li class="nav-item nav2">
          <a class="nav-link nav3" href="/login">Login</a>
        </li>
        <li class="nav-item nav2">
          <a class="nav-link nav3" href="/signup">Signup</a>
        </li>

      </ul>

    </div>
  </nav>
</div>
    }
}

export default LandingHeader