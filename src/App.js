import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/styles.scss';

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  handleToggle = (id) => {
    this.setState({
      ...this.state,
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return ({
            ...item,
            completed: !item.completed
          })
        } else {
          return item;
        }
      })
    })
  }

  handleAddTodo = (task) => {
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(item => {
        return(!item.completed);
      })
    })
  }
  
  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm handleAddTodo={this.handleAddTodo} />
        </div>
        <TodoList handleClear={this.handleClear} handleToggle={this.handleToggle} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
