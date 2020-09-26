/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'
import { Row, NavbarBrand, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap'
import {isMobile} from "react-device-detect";


class MapPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          hover:false,
          active:"",
          dropdownOpen:false,
          dropdown: 'Valitse karttatyyppi',
          orientation:window.orientation
        };
        this.listenOrientation = this.listenOrientation.bind(this);
        this.toggle = this.toggle.bind(this);
        this.dropdownClick = this.dropdownClick.bind(this);
      }
      listenOrientation(){
        let self=this;
        window.addEventListener("orientationchange", function() {
          self.setState({
            orientation:window.screen.orientation
          });
      });
      }
      toggle(){
        this.setState({
          dropdownOpen:!this.state.dropdownOpen
        });
      }
      dropdownClick(event) {
        const value=event.target.innerText;
        this.setState({
          dropdown: value,
          dropdownOpen: !this.state.dropdownOpen
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
                  <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                      {this.state.dropdown}
                      </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem onClick={this.dropdownClick}>Postinumeroalue</DropdownItem>
                      <DropdownItem onClick={this.dropdownClick}>Postinumeroalue (<a href="https://github.com/duukkis/postalcodes">duukkis</a>)</DropdownItem>
                      <DropdownItem onClick={this.dropdownClick}>Kunta</DropdownItem>
                      <DropdownItem onClick={this.dropdownClick}>Maakunta</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
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