/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'
import Blocks from './Blocks'
import { Row, NavbarBrand } from 'reactstrap'
import {isMobile} from "react-device-detect";


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          hover:false,
          active:"",
          orientation:window.orientation,
          block:[
            {name:"one", header:"Talousohjatut"},
            {name:"two", header:"Digitaaliset palvelut"},
            {name:"three", header:"Yhteystiedot"},
            {name:"four", header:"Pilviympäristössä"}]
        };
        this.activeBlock = this.activeBlock.bind(this);
        this.listenOrientation = this.listenOrientation.bind(this);
      }
      activeBlock(block){
          if(block===""){
            this.setState({
              hover:false
            });
          }else{
            this.setState({
              hover:true
            });
          }
          this.setState({
            active:block
          });
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
        <Row className={(!this.state.hover ? "blockRow" : ((this.state.active==="one" || this.state.active==="two") ? "blockRowHoverHover" : "blockRowHover"))+" blocks"}>
          <Blocks activeBlock={this.activeBlock} active={this.state.active} blocks={[this.state.block[0],this.state.block[1]]} hover={(this.state.active==="one" || this.state.active==="two") ? true : false}/>
        </Row>
        <Row className={(!this.state.hover ? "blockRow" : ((this.state.active==="three" || this.state.active==="four") ? "blockRowHoverHover" : "blockRowHover"))+" blocks"}>
          <Blocks activeBlock={this.activeBlock} active={this.state.active} blocks={[this.state.block[3],this.state.block[2]]} hover={(this.state.active==="three" || this.state.active==="four") ? true : false}/>
        </Row>
      </div>
    );
  }
}


export default LandingPage;