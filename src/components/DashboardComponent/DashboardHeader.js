import React from 'react';
import './Dashboard.css'
class DashboardHeader extends React.Component {
  constructor(props) {
    super(props);
    this.root = props.root;
  }

  render() {
    return <div className='container'>
      <nav class="navbar navbar-expand-lg navbar-light  ">
        <a class="navbar-brand" href="#"><img className="logo" src="logo.png" /></a>
        <div>
          <input class="dashbord-input" name="search" placeholder="search" autoComplete="off" id="mytInput" onChange={this.onSearchQuery} />
        </div>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav2 nav-item active">
              <div>
                <a class=" nav-link " href="#">
                  <span><img className="sol-img" src="solution.png"></img></span>solution
            </a>
              </div>
            </li>
            <li class="nav-item nav2">
              <a class="nav-link " href="/login"><img className="sol-img" src="Enquiry.png" />Enquiry</a>
            </li>
            <li class="nav-item nav2">
              <a class="nav-link " href="/signup"><img className="sol-img" src="Notification1.png" /></a>
            </li>
            <li>
              <div class="dropdown">
                <button class="btn  dropdown-toggle dropdown-align" type="button" data-toggle="dropdown">
                  <img className="sol-img2" src="image.png" /> john doe</button>
                <ul class="dropdown-menu">
                  <li><a href="#">HTML</a></li>
                  <li><a href="#">CSS</a></li>
                  <li><a href="#">JavaScript</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  }
}

export default DashboardHeader