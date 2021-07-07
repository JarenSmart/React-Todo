import React from "react";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const todos = [
  {
    task: "Learn React",
    id: 1,
    completed: false,
  },
  {
    task: "Practice React",
    id: 2,
    completed: false,
  },
  {
    task: "Practice React more",
    id: 3,
    completed: false,
  },
  {
    task: "Practice React some more...",
    id: 4,
    completed: false,
  },
];

class App extends React.Component {
  //Constructor with state
  constructor() {
    super();
    this.state = {
      todos,
    };
  }

  toggleTodos = (todoId) => {
    this.setState({
      todos: this.state.todos.map((task) => {
        if (todoId === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }

        return task;
      }),
    });
  };

  addTodo = (e, task) => {
    e.preventDefault();

    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
    console.log("Second Todo: ", this.state.todos);
  };

  clearCompleted = (e) => {
    e.preventDefault();

    this.setState({
      todos: this.state.todos.filter((todo) => !todo.completed),
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <h2>What do you need to do today?</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          todos={this.state.todos}
          toggleTodos={this.toggleTodos}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
