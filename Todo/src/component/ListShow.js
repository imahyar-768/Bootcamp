import React from "react";

export default props => {
  const diffTime = Math.abs(props.todo.deadline - props.todo.id);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return (<div
    className="todo-item"
    style={{ color: props.todo.done ? "grey" : "" }}
    onClick={props.handleDone}
  >
    Title: <span className="todo-details">{props.todo.text}</span>
    End Time: <span className="todo-details">{props.todo.deadline.toLocaleDateString()}</span> 
    Days Until End Time: <span className="todo-details">{diffDays}</span>
  </div>)
};
