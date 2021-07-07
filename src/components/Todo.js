import React from "react";

const Todo = (props) => {
  //   console.log("Todo Props: ", props);
  return (
    <div
      className={`todo${props.todo.completed ? " completed" : ""}`}
      onClick={() => props.toggleTodos(props.todo.id)}
    >
      <p>{props.todo.task}</p>
    </div>
  );
};

export default Todo;
