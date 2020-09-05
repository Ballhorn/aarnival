/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import {isBrowser, isMobile} from "react-device-detect";

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
        if(isMobile){
          if(this.props.active===this.props.block){
            this.props.activeBlock("");
          }else{
            this.props.activeBlock(this.props.block);
          }
        }
      }
      handleIn(){
        if(isBrowser){
          this.props.activeBlock(this.props.block);
        }
      }
      handleOut(){
        if(isBrowser){
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
          <p>Arkkitehtuuriratkaisut,</p>
          <p>joiden kustannusrakenne</p>
          <p>vastaa liiketoimintaa</p>
        </div>
        )
      case "two":
        return (
        <div>
          <p>Sovelluskehityksestä</p>
          <p>automatisoituun</p>
          <p>liiketoiminta-analytiikkaan</p>
        </div>
        )
      case "four":
        return (
        <div>
          <p>Varmistat</p>
          <p>skaalautuvuuden</p>
          <p>sitomatta pääomaa</p>
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
            		<h2 className={isMobile ? this.props.active==="" ? "header visible transition" : "header hidden" :"header"}>{this.props.header}</h2>
          	</div>
          <div className={this.props.active==="" ? "content" : ""}>{this.content()}</div>
        </div>
      </div>
    );
  }
};



export default Block;