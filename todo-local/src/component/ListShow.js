import React from "react";

export default props => {
  const diffTime = Math.abs(new Date(props.todo.deadline) - new Date(props.todo.id));
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return (
    <div
      className="alert alert-secondary mt-2 mr-2"
      style={{ color: props.todo.done ? "grey" : "" }}
      onClick={props.handleDone}
    >
      Title: <span className="badge badge-dark mr-1">{props.todo.text}</span>
      End Time: <span className="badge badge-dark mr-1">{new Date(props.todo.deadline).toLocaleDateString()}</span>
      Days Until End Time: <span className="badge badge-dark mr-1">{diffDays}</span>


    </div>)
};
