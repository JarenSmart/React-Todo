import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }

  handleChanges = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.todo);
  };

  submitTodo = (e) => {
    e.preventDefault();

    this.setState({ task: "" });
    this.props.addTodo(e, this.state.task);
  };

  render() {
    return (
      <div className="add-todo-box">
        <form onSubmit={this.submitTodo}>
          <input
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.handleChanges}
          />
          <label>Add Todo</label>
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
