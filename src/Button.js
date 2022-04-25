import React, { Component } from 'react'
import './Button.css';

export class Button extends Component {
 render() {
  return (
   
    <button onClick={this.props.getNext} className='nextBtn' 
      type='button'>Refresh</button>
    
   )
 }
}

export default Button