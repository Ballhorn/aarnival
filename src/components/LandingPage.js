/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react'
import Block from './Block'
import { Row, NavbarBrand } from 'reactstrap'


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          hover:false,
        };
        this.clickBlock = this.clickBlock.bind(this);
        this.handleIn = this.handleIn.bind(this);
        this.handleOut = this.handleOut.bind(this);
      }
      clickBlock(){
        if(window.innerWidth<=768){
          this.setState({
            hover:!this.state.hover
          });
        }
      }
      handleIn(){
        if(window.innerWidth>768){
          this.setState({
            hover:!this.state.hover
          });
        }
      }
      handleOut(){
        if(window.innerWidth>768){
          this.setState({
            hover:!this.state.hover
          });
        }
      }
  render() {

    return (
        <div>
        <NavbarBrand className="transparent" href="/"><h1>AARNIVAL</h1></NavbarBrand>
        <div onMouseOver={this.handleIn} onMouseOut={this.handleOut}  onClick={this.clickBlock}>
              <Row  className={!this.state.hover ? "one block blocks align-items-center":"one blockHover blocks align-items-center"} name="one">
                <Block status={this.state.hover} block="one" header="Tiedonhallinta ja analytiikka"/>
              </Row>
              <Row  className={!this.state.hover ? "two block blocks align-items-center":"two blockHover blocks align-items-center"} name="two">
                <Block status={this.state.hover} block="two" header="Sovelluskehitys"/>
              </Row>
              <Row  className={!this.state.hover ? "three block blocks align-items-center":"three blockHover blocks align-items-center"} name="three">
                <Block status={this.state.hover} block="three" header="Referenssit"/>
              </Row>
              <Row  className={!this.state.hover ? "four block blocks align-items-center":"four blockHover blocks align-items-center"} name="four">
                <Block status={this.state.hover} block="four" header="Yhteystiedot"/>
              </Row>
        </div>
        </div>
    );
  }
}


export default LandingPage;