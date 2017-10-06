import React from 'react';
import ReactDOM from 'react-dom';

class InputLine extends React.Component{
  render(){
    return(
      <div>
        <input type='text' placeholder='Enter Todo Item here'></input>
        <button type="button">Add To-Do Item</button>
      </div>
    )
  }
}

export default InputLine;
