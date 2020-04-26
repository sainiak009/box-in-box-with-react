import React, { Component } from 'react';
import Draggable from 'react-draggable';

export default class Dialog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let size = this.props.size
    return (
        <Draggable
        handle={".handle"+size}
        defaultPosition={{x: 0, y: 0}}
        grid={[1, 1]}
        bounds='parent'>
          <div style={{border: '2px solid black', zIndex: size, position: 'relative', width: 100*this.props.boxIndex, height: 100*this.props.boxIndex}}>

          <p 
            className={'handle'+size} 
            style={{border: '2px solid black', margin:0, textAlign:'center', cursor: 'pointer', color: 'white', backgroundColor: 'black'}}>
              {this.props.isParent == 'true' ? "Parent Box "+(this.props.boxIndex-1) : "Child Box"}
          </p>
              
          {this.props.child}

          </div>
        </Draggable>
    );
  }
}