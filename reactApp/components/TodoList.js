import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine'
import Todo from './Todo'

class TodoList extends React.Component{
  render(){
    return(
    <div>
        <InputLine />
        <Todo todos={this.props.todos}/>
    </div>
    )
  }
}

export default TodoList;
