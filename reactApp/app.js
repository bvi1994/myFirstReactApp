// alert('app.js ran')

import React from 'react';
import ReactDOM from 'react-dom';

//var dummyData = ['Pika', "Pikachu", "Chu", "Chaaaaaa...", "Pika Pika Pikachu Pi Pi"]
var dummyData = [
  {taskText: 'Pika', completed: true},
  {taskText: 'Pikachu', completed: false},
  {taskText: 'Chu', completed: false},
  {taskText: 'Chaaaaaa...', completed: true},
  {taskText: 'Pika Pika Pikachu Pi Pi', completed: false}
]

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

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    this.setState({todos: dummyData});
  }

  render(){
    return(
      <TodoList todos={this.state.todos} />
    )
  }
}


ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
