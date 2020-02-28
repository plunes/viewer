import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import data from '../data/data.json';
class BlogMonthComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            blogs: [],
            showAllBlogs: true,
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            blogs: nextProps.monthBlogs
        })
    }
    render() {
        return (
            <div style={{ marginTop: '11%', display: 'flex', flexWrap:'wrap' }}>
                {
                    this.state.blogs ? this.state.blogs.map((b, index) => (
                        <div key={index}>
                            <div class="card blog-card-align" >
                                <img className="card-img-top blog-img" src={b.img}></img>
                                <div key={index}><h3 style={{ fontSize: '18px', marginLeft: '10%', marginTop: '3%' }}>{b.month}</h3></div>
                                <div class="card-body">
                                    <h4 class="card-title">{b.name}</h4>
                                    <p class="card-text">{b.desc}</p>
                                    <Link className="btn btn-primary blog-button"
                                        to={b.url}
                                    >View More</Link>
                                </div>
                            </div>
                        </div>
                    )) : false
                }
            </div>
        )
    }
}

export default BlogMonthComponent