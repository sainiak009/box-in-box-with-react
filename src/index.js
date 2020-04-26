import React, { Component } from 'react';
import { render } from 'react-dom';
import Dialog from './Dialog';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      // number of button clicks till now, default 1
      count: 1,
    };
    // Binding this to handleClick
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    // Increase state.count, trigger re-rendering
    let newCount = this.state.count+1;
    this.setState({count: newCount})
  }

  // Recursuve function to generate required react DOM structure
  generateBoxes(boxIndex, count, prev_component){
    if(count == 0)
      return prev_component
    else
      return this.generateBoxes(boxIndex+1,count-1, <Dialog isParent='true' boxIndex={boxIndex+1} size={count} child={prev_component} />)
  }

  render() {
    let boxes = this.generateBoxes(1, this.state.count-1, <Dialog isParent='false' boxIndex='1' size={this.state.count}/>)
    return (
        <div style={{height: '100vh'}}>
        <button onClick={this.handleClick} style={{border: '2px solid black',padding: '10px 15px', marginBottom: '10px'}}> Add Parent </button>
          {boxes}
        </div>
    );
  }
}

render(<App />, document.getElementById('root'));
