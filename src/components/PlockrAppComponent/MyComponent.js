import React, { Component } from 'react';
// import logger from 'logging-library';
import FileViewer from 'react-file-viewer';
import Viewer from './../Viewer/viewer';
import stack from './../Viewer/stackElement';
// import { CustomErrorComponent } from 'custom-error';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Downloader from 'js-file-downloader';

// const file = 'https://plunes.co/v4/public/1577708993524-MedicalReport-20191230_4.pdf'
// const type = 'pdf'

class MyComponent extends Component {

  constructor(props) {
    super(props)
    // console.log(props.data)
    this.state = {
      file: props.data.url,
      type: props.data.type,




      
    }
    // this.handleChange = this.handleChange.bind(this)
  }

  render() {
    console.log(this.props.data.url, 'image');
    console.log(this.props.data, 'data');
    // const file = this.state
    // console.log("render",this.state)
    if(this.state.type === 'doc'){
      new Downloader({
        url: this.state.file
    })
    }

    return (
      // <FileViewer
      //   fileType={this.state.type}
      //   filePath={this.state.file}
      // />
      <div className="view">
      <Viewer 
      // stack={stack} 
        //stack={this.state.type}
        imageId={this.state.file}
      />
      </div>
    );
  }
}

export default withRouter(MyComponent);