/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import Block from './Block';


class Blocks extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          hover:false,
        };
        this.activeBlock = this.activeBlock.bind(this);
      }
      activeBlock(block){
          this.props.activeBlock(block);
      }
  render() {
    
    return (
        <div className="d-flex" onMouseOver={this.handleIn} onMouseOut={this.handleOut} onClick={this.clickBlock}>
            <div className={(!this.props.hover ? this.props.blocks[0].name+" blockCol" : this.props.blocks[0].name+((this.props.active==="one" || this.props.active==="four") ? " blockColHoverHover" : " blockColHover"))+" blocks"}>
                <Block active={this.props.active} block={this.props.blocks[0].name} header={this.props.blocks[0].header} activeBlock={this.activeBlock}/>
            </div>
            <div className={(!this.props.hover ? this.props.blocks[1].name+" blockCol" : this.props.blocks[1].name+((this.props.active==="two" || this.props.active==="three") ? " blockColHoverHover" : " blockColHover"))+" blocks"}>
                <Block active={this.props.active}  block={this.props.blocks[1].name} header={this.props.blocks[1].header} activeBlock={this.activeBlock}/>
            </div>
        </div>
    );
  }
};



export default Blocks;