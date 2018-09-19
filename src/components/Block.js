/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import inka from '../img/inka.png';


class Block extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          active:this.props.active
        };
        this.handleIn = this.handleIn.bind(this);
        this.handleOut = this.handleOut.bind(this);
        this.clickBlock = this.clickBlock.bind(this);
      }
      clickBlock(){
        if(window.innerWidth<=768){
          if(this.props.active===this.props.block){
            this.props.activeBlock("");
          }else{
            this.props.activeBlock(this.props.block);
          }
        }
      }
      handleIn(){
        if(window.innerWidth>768){
          this.props.activeBlock(this.props.block);
        }
      }
      handleOut(){
        if(window.innerWidth>768){
            this.props.activeBlock("");
        }
      }
  placement(){
    switch(this.props.block){
      case "one":
        return ""
      case "two":
        return "justify-content-end"
      case "three":
        return "justify-content-end align-items-end"
      case "four":
        return "align-items-end"
        default: return;
    }
  
  }
  content(){
    switch(this.props.block){
      case "one":
        return (
        <div>
          <p>Moderni ja kustannustehokas</p>
          <p>tiedonhallintaratkaisu</p>
          <p> yrityksesi tarpeisiin</p>
        </div>
        )
      case "two":
        return (
        <div>
          <p>Ammattitaitoista</p>
          <p>sovelluskehitystä</p>
          <p>AWS-ympäristössä</p>
        </div>
        )
      case "four":
        return (
        <div>
          <a href="https://www.inkadw.com"><img src={inka} alt="InkaDW logo" id="inkalogo" className="w-25"/></a>
          <p><a className="black" href="https://www.inkadw.com">Pilvitietovarasto</a></p>
        </div>
        )
      case "three":
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
      <div  className="d-flex blockWrapper align-items-center justify-content-center" onMouseOver={this.handleIn} onMouseOut={this.handleOut} onClick={this.clickBlock}>
        <div className={this.props.active===this.props.block ? "textCol transition" : "textCol hidden"}>
          <div className="headerWrapper d-flex align-items-end justify-content-center">
            <h2 className={(window.innerWidth<=768 && this.props.active==="") ? "header visible transition" :"header"}>{this.props.header}</h2>
          </div>
          <div className={this.props.active==="" ? "content" : ""}>{this.content()}</div>
        </div>
      </div>
    );
  }
};



export default Block;