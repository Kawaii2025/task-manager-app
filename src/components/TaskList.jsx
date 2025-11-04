import React from "react";
import { useTasks } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks, toggleTask, deleteTask } = useTasks();

  if (tasks.length === 0) {
    return <p style={{ textAlign: "center", color: "#9ca3af" }}>No tasks yet ✨</p>;
  }

  return (
    <div className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          index={index}
          onToggle={toggleTask}
          onDelete={deleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
