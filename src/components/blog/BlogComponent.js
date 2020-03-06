import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import data from '../data/data.json';
import '../blog/BlogComponent.css';
import LandingHeader from '../LandingComponent/LandingHeader.js';
import LandingFooter from '../LandingComponent/LandingFooter.js';
import BlogMonthComponent from './BlogMonthComponent'
import BlogMonthList from './BlogMonthList'


class BlogComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newdata: [],
      monthBlogs: [],

    };
    this.handleMonth = this.handleMonth.bind(this)
  }

  handleMonth(select) {
    // console.log(select, 'month')
    let blogs = data.filter((d) => {
      if (d.month === select) {
        return true
      } else {
        return false
      }
    })
    this.setState({
      monthBlogs: blogs
    })
  }
  getData() {
    var monthName = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    var today = new Date();
    var date = today.getFullYear()
    const currDate = monthName[today.getMonth()];
    let blogs = data.filter((d) => {
      if (d.month === currDate) {
        return true
      } else {
        return false
      }
    })
    this.setState({
      monthBlogs: blogs
    })
    console.log(currDate)
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div>
        <LandingHeader />
        <div>
          <div className='row'>
            <div className="container-fluid">
              <img className="blog-front-img" src="/blog2.png" alt=".." />
            </div>
              <div className='col-md-8'>
                <BlogMonthComponent monthBlogs={this.state.monthBlogs} />
                </div>
              <div className='col-md-4 '>
                <BlogMonthList handleMonth={this.handleMonth} />
              </div>
          </div>
          </div>
        <LandingFooter />
      </div>
    )
  }
}
export default BlogComponent;