// alert('app.js ran')

import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = ['Pika', "Pikachu", "Chu", "Chaaaaaa...", "Pika Pika Pikachu Pi Pi"]

class TodoList extends React.Component{
  render(){
    return(
      <ul>{dummyData.map(Todo => <li>
           <button type="button">X</button> {Todo}
      </li>)
    }</ul>
    )
  }
}

ReactDOM.render(<TodoList/>,
   document.getElementById('root'));
