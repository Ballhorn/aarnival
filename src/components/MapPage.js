/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'
import { Row, NavbarBrand } from 'reactstrap'
import {isMobile} from "react-device-detect";


class MapPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          hover:false,
          active:"",
          orientation:window.orientation
        };
        this.listenOrientation = this.listenOrientation.bind(this);
      }
      listenOrientation(){
        let self=this;
        window.addEventListener("orientationchange", function() {
          self.setState({
            orientation:window.screen.orientation
          });
      });
      }
  render() {
    this.listenOrientation();
    return (
      <div className="fullHeight">
        <NavbarBrand className={(isMobile ? "smallLogo " : "")+"largeLogo"} href="/"><h1 className="blackWhite">Aarnival</h1></NavbarBrand>
        <Row className="mapTopBottomRow">
          <div className="d-flex fullWidth top">
            <h4>Kustannusmallinnetut digitaaliset palvelut pilviympäristössä</h4>
          </div>
        </Row>
        <Row className="mapMiddleRow">
          <div className="d-flex fullWidth">
            <div className="blockCol midLeft">
            </div>
            <div className="blockCol midRight">
            </div>
          </div>
        </Row>
        <Row className="mapTopBottomRow">
          <div className="d-flex fullWidth bottom">
            <h4>API-yhteyttä varten ota yhteyttä <a href="mailto:info@aarnival.fi">info@aarnival.fi</a></h4>
          </div>
        </Row>
      </div>
    );
  }
}


export default MapPage;