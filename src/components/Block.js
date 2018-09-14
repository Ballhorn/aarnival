/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import inka from '../img/inka.png';
import { Col} from 'reactstrap';


class Block extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          hover:false,
        };
        this.handleIn = this.handleIn.bind(this);
        this.handleOut = this.handleOut.bind(this);
        this.clickBlock = this.clickBlock.bind(this);
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
  content(){
    switch(this.props.block){
      case "one":
        return (
        <div>
          <p>Moderni ja kustannustehokas</p>
          <p>tiedonhallintaratkaisu</p>
          <p> yrityksesi tarpeisiin.</p>
        </div>
        )
      case "two":
        return (
        <div>
          <p>Ammattitaitoista</p>
          <p>sovelluskehitystä</p>
          <p>AWS-ympäristössä.</p>
        </div>
        )
      case "three":
        return (
        <div>
          <a href="https://www.inkadw.com"><img src={inka} alt="InkaDW logo" id="inkalogo" className="w-25"/></a>
          <p><a className="black" href="https://www.inkadw.com">Pilvitietovarasto</a></p>
        </div>
        )
      case "four":
        return (
        <div>
          <p>P. 050 378 0010</p>
          <p>PL 71 02101 Espoo</p>
          <a href="mailto:info@aarnival.fi">info@aarnival.fi</a>
        </div>
        )
        default: return;
    }
  
  }
  
  render() {
    
    return (
        <div className="blockContent d-flex justify-content-between align-items-center" onMouseOver={this.handleIn} onMouseOut={this.handleOut} onClick={this.clickBlock}>
            <Col></Col>
            <Col className={this.state.hover ? "textCol transition" : "textCol hidden"}>
              {this.content()}
            </Col>
            <Col className="text-right" >
              <h2 className="header">{this.props.header}</h2>
            </Col>
        </div>
    );
  }
};



export default Block;