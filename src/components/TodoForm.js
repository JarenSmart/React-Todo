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
      <form onSubmit={this.submitTodo}>
        <div className="add-todo-box">
          <input
            id="label-link"
            type="text"
            name="task"
            value={this.state.task}
            onChange={this.handleChanges}
          />
          <label for="label-link">Add Todo</label>
          <button className="add-btn">Add Todo</button>
        </div>
      </form>
    );
  }
}

export default TodoForm;
