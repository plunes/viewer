import React from "react";
import * as cornerstone from "cornerstone-core";
import * as cornerstoneMath from "cornerstone-math";
import cornerstoneTools from "cornerstone-tools";
import Hammer from "hammerjs";
import * as cornerstoneWebImageLoader from "cornerstone-web-image-loader";
import * as cornerstoneWodoImageLoader from "cornerstone-wado-image-loader";
import * as dicomParser from "dicom-parser";
import StackElement from "./stackElement";
import path from 'path';



cornerstoneTools.external.cornerstone = cornerstone;
cornerstoneTools.init();
cornerstoneWodoImageLoader.external.cornerstone = cornerstone;
cornerstoneWodoImageLoader.external.dicomParser = dicomParser;

cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
cornerstoneWebImageLoader.external.cornerstone = cornerstone;
cornerstoneTools.external.Hammer = Hammer;



  const divStyle = {
    width: "100%",
    height: "500px",
    position: "relative",
    margin:"20px"
  };
  
  const bottomLeftStyle = {

    bottom: "5px",
    left: "5px",
    position: "absolute",
    color: "white"
  };
  
  const bottomRightStyle = {
    bottom: "5px",
    right: "5px",
    position: "absolute",
    color: "white"
  };
  
  var bttnStyle ={
    backgroundImage: "url("+ './../../../public/icons/Rect-icon.png'+ ")",
    backgroundColor:"black",
    color:"white",
    fontWeight:600,
    padding:"10px",
    width:"70px",
    height:"40px",
    fontSize:"10px",
    BorderRadius:"15px",
    justifyContent:"center",
    marginRight:"30px"
  } ;

class CornerstoneElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

     // stack:{StackElement},
      viewport: cornerstone.getDefaultViewport(null, undefined),
      imageId: props.imageId,
      isEnableAnnotEvent:false,
      isEnablePanEvent:false,
      isEnableRectangleEvent:false,
      isEnableMagnifyEvent:false,
      isEnableRotateEvent:false,
      isEnableScrollEvent:false,
      //switchPanHandlar: this.switchPanHandlar.bind(this)
    };
  }


  switchAnnotationHandlar=()=>{
     this.setState(
         prevState=>({isEnableAnnotEvent:!prevState.isEnableAnnotEvent}));
  }
  switchPanHandlar=()=>{
     this.setState(prevState=>({isEnablePanEvent:!prevState.isEnablePanEvent}));
  }

  switchMagnifyHandlar=()=>{
    this.setState(prevState=>({isEnableMagnifyEvent:!prevState.isEnableMagnifyEvent}));
  }
 
  switchRectangularHandlar=()=>{
     this.setState(prevState=>({isEnableRectangleEvent:!prevState.isEnableRectangleEvent}));
  }

  switchRotateHandlar=()=>{
     this.setState(prevState=>({isEnableRotateEvent:!prevState.isEnableRotateEvent}));
  }

 switchScrollHandlar=()=>{
     this.setState(prevState=>({isEnableScrollEvent:!prevState.isEnableScrollEvent})); 
  }

  render() {
      console.log("this is imageID: "+ this.props.imageId);
    return (
      <div>
     
      <button onClick={this.switchPanHandlar} style={bttnStyle}>
        {this.state.isEnablePanEvent ? cornerstoneTools.setToolActive("Pan", { mouseButtonMask: 1}) :null } Pan
        
      </button>
      <button onClick={this.switchAnnotationHandlar} style={bttnStyle}>
        {this.state.isEnableAnnotEvent ? cornerstoneTools.setToolActive('ArrowAnnotate', { mouseButtonMask: 1 }) :null } Annotate
      </button>
      <button onClick={this.switchMagnifyHandlar} style={bttnStyle}>
        {this.state.isEnableMagnifyEvent? cornerstoneTools.setToolActive('Magnify', { mouseButtonMask: 1 }) :null } Magnify 
      </button>

      <button onClick={this.switchRectangularHandlar} style={bttnStyle}>
        {this.state.isEnableRectangleEvent? cornerstoneTools.setToolActive('RectangleRoi', { mouseButtonMask: 1 }) :null } Rectangular
      </button>

      <button onClick={this.switchRotateHandlar} style={bttnStyle}>
        {this.state.isEnableRotateEvent? cornerstoneTools.setToolActive('Rotate', { mouseButtonMask: 1 }) :null } Rotate
      </button>

      <button onClick={this.switchScrollHandlar} style={bttnStyle}>
        {this.state.isEnableScrollEvent? cornerstoneTools.setToolActive('StackScrollTool', { mouseButtonMask: 1 }) :null } Scroll
      </button>
  
  

        <div className="viewportElement"  style={divStyle}>
            <div style={bottomRightStyle}>Zoom: {this.state.viewport.scale}</div>
            <div style={bottomLeftStyle}> 
               WW/WC: {this.state.viewport.voi.windowWidth} /{" "}
               {this.state.viewport.voi.windowCenter}
             </div>
        </div>

      </div>
    );
  }

  componentDidMount() {
    const element = document.querySelector('.viewportElement');
    // Enable the DOM Element for use with Cornerstone
     cornerstone.enable(element);
    // Load the first image in the stack
    const ext = path.extname(this.state.imageId);
    console.log('sss'+ ext);
    var url =this.state.imageId;
    if(ext ==='.dcm'){
      url ='wadouri:'+this.state.imageId
    }
    cornerstone.loadImage(url).then(image => {
      // Display the first image
      cornerstone.displayImage(element, image);

    //   const stack = {StackElement};
    //   cornerstoneTools.addStackStateManager(element, ['stack']);
    //   cornerstoneTools.addToolState(element, 'stack', stack);
    });




    const WwwcTool = cornerstoneTools.WwwcTool;
    const PanTool = cornerstoneTools.PanTool;
    const PanMultiTouchTool = cornerstoneTools.PanMultiTouchTool;
    const ZoomTool = cornerstoneTools.ZoomTool;
    const ZoomTouchPinchTool = cornerstoneTools.ZoomTouchPinchTool;
    const ZoomMouseWheelTool = cornerstoneTools.ZoomMouseWheelTool;
    const ArrowAnnotateTool = cornerstoneTools.ArrowAnnotateTool;
    const RotateTool = cornerstoneTools.RotateTool;
    const MagnifyTool = cornerstoneTools.MagnifyTool;
    const RectangleRoiTool = cornerstoneTools.RectangleRoiTool;
    const StackScrollTool = cornerstoneTools.StackScrollTool;
    // Add them

    cornerstoneTools.addTool(PanTool);
    cornerstoneTools.addTool(ZoomTool);
    cornerstoneTools.addTool(WwwcTool);
    cornerstoneTools.addTool(PanMultiTouchTool);
    cornerstoneTools.addTool(ZoomTouchPinchTool);
    cornerstoneTools.addTool(ZoomMouseWheelTool);
    cornerstoneTools.addTool(ArrowAnnotateTool);
    cornerstoneTools.addTool(RotateTool);
    cornerstoneTools.addTool(MagnifyTool);
    cornerstoneTools.addTool(RectangleRoiTool);
    cornerstoneTools.addTool(StackScrollTool);

   
    cornerstoneTools.setToolActive("Zoom", { mouseButtonMask: 1}); // Right
    cornerstoneTools.setToolActive("Wwwc", { mouseButtonMask: 4}); // Left & Touch
    cornerstoneTools.setToolActive("PanMultiTouch", {});
    //cornerstoneTools.setToolActive("ZoomMouseWheel", {});
    cornerstoneTools.setToolActive("ZoomTouchPinch", {});

  }
}


export default CornerstoneElement;

