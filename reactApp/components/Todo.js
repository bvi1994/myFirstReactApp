import React from 'react';
import ReactDOM from 'react-dom';

class Todo extends React.Component{
  render(){
    return(
    <ul>{this.props.todos.map(Todo =>
      <li>
         <button type="button">x</button> {Todo.completed ? Todo.taskText : <strike>{Todo.taskText}</strike>}
       </li>)
    }
    </ul>
  )}
}

export default Todo;
