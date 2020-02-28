import React, { Component } from 'react'

class BlogMonthList extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        let month = e.currentTarget.dataset.value
        this.props.handleMonth(month)
    }

    render() {
        return (
            <div>
                <h3 style={{ fontSize: '24px', marginLeft: '8%', marginTop: '26%' }}>PLUNES BLOGS</h3>
                <ul style={{ listStyleType: 'none', fontSize: '20px', lineHeight: '30px' }}>
                    <li onClick={this.handleClick} data-value='September'>September (2019)</li>
                    <li onClick={this.handleClick} data-value='October'> October (2019)   </li>
                    <li onClick={this.handleClick} data-value='November'>November (2019)  </li>
                    <li onClick={this.handleClick} data-value='December'>December (2019)  </li>
                    <li onClick={this.handleClick} data-value='January'> January (2020)   </li>
                    <li onClick={this.handleClick} data-value='February'>February (2020)  </li>
                </ul>
            </div>
        )
    } 
}

export default BlogMonthList