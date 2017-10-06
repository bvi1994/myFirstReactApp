import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList'

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
    this.state.dummyData.concat({taskText: task, completed: false});
    this.setState({todos: dummyData});
  }

  render(){
    return(
      <TodoList todos={this.state.todos} />
    )
  }
}

export default TodoApp;
