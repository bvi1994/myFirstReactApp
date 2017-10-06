import React from 'react';
import ReactDOM from 'react-dom';

class TodoList extends React.Component{
  render(){
    return(
      <div>
        <input type='text' placeholder='Enter Todo Item here'></input> <button type="button">Add To-Do Item</button>
        <ul>{this.props.todos.map(Todo => <li>
             <button type="button">x</button> {Todo.completed ? Todo.taskText : <strike>{Todo.taskText}</strike>}
        </li>)
      }</ul>
    </div>
    )
  }
}

export default TodoList;
