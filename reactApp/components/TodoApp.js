import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'
import InputLine from './InputLine'

var dummyData = [
  {taskText: 'Pika', completed: true},
  {taskText: 'Pikachu', completed: false},
  {taskText: 'Chu', completed: false},
  {taskText: 'Chaaaaaa...', completed: true},
  {taskText: 'Pika Pika Pikachu Pi Pi', completed: false}
]

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

  addTodo(task){
    var addedTask = this.state.todos.concat({taskText: task, completed: false});
    this.setState({todos: addedTask});
  }

  render(){
    return(
      <div>
        <TodoList todos={this.state.todos} />
        <InputLine submit={(task) => this.addTodo(task)} />
      </div>
    )
  }
}

export default TodoApp;
