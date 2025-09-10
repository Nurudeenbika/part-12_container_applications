//import React from "react";
import PropTypes from "prop-types";

const Todo = ({ todo, onClickDelete, onClickComplete }) => {
  // Defensive check to ensure `todo` is not null or undefined
  if (!todo) {
    return null;
  }

  const doneInfo = () => {
    return (
      <>
        <span>This todo is {todo.done ? "done" : "not done"}</span>
      </>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "70%",
        margin: "auto",
      }}
    >
      <span>{todo.text}</span>
      {doneInfo()}
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={() => onClickDelete(todo)}
          style={{
            cursor: "pointer",
            padding: "8px 12px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          Delete
        </button>
        <button
          onClick={() => onClickComplete(todo)}
          style={{
            cursor: "pointer",
            padding: "8px 12px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          {todo.done ? "Set as undone" : "Set as done"}
        </button>
      </div>
    </div>
  );
};

// Add prop types validation
Todo.propTypes = {
  todo: PropTypes.shape({
    text: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickComplete: PropTypes.func.isRequired,
};

export default Todo;
