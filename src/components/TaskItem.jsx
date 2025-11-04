import React from "react";

const TaskItem = ({ task, index, onToggle, onDelete }) => {
  return (
    <li>
      <span className={`task-title ${task.done ? "done" : ""}`}>{task.title}</span>
      <div className="task-buttons">
        <button className="done-btn" onClick={() => onToggle(index)}>
          {task.done ? "Undo" : "Done"}
        </button>
        <button className="delete-btn" onClick={() => onDelete(index)}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
