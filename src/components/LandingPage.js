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
          block:[
            {name:"one", header:"Tiedonhallinta ja analytiikka"},
            {name:"two", header:"Sovelluskehitys"},
            {name:"three", header:"Referenssit"},
            {name:"four", header:"Yhteystiedot"}]
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
      rows(){
        return(
          this.state.block.map((a) => (
            <Row  className={!this.state.hover ? a.name+" block blocks align-items-center": a.name+" blockHover blocks align-items-center"} name={a.name}>
              <Block status={this.state.hover} block={a.name} header={a.header}/>
            </Row>
          ))
        )
      }
  render() {

    return (
        <div>
        <NavbarBrand className="transparent" href="/"><h1>AARNIVAL</h1></NavbarBrand>
        <div onMouseOver={this.handleIn} onMouseOut={this.handleOut}  onClick={this.clickBlock}>
              {this.rows()}
        </div>
        </div>
    );
  }
}


export default LandingPage;