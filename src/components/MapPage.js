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
        <Row className="mapTopRow">
          <div className="d-flex fullWidth top">
          </div>
        </Row>
        <Row className="mapMiddleRow">
            <div className="d-flex blockCol midLeft">
              <h3>Muotokartta Suomen alueista</h3>
              <p>Valitse sopiva kartta ja rajaa haluamasi alueet.</p>
              <p>API-yhteyttä varten ota yhteys <a href="mailto:info@aarnival.fi">info@aarnival.fi</a></p>
            </div>
            <div className="d-flex blockCol midRight">
              <p>Valitse sopiva kartta ja rajaa haluamasi alueet.</p>
            </div>
        </Row>
        <Row className="mapBottomRow">
          <div className="d-flex fullWidth bottom">
            <p>© Aarnival Oy 2020</p>
          </div>
        </Row>
      </div>
    );
  }
}


export default MapPage;