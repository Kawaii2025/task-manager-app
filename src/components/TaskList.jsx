import React, { memo } from "react";
import TaskItem from './TaskItem';

const TaskList = memo(({ tasks = [], onToggle, onDelete }) => {
  if (tasks.length === 0) return <p>No tasks yet!</p>;

  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          onToggle={onToggle}
          onDelete={onDelete}
        >
          {task}
        </TaskItem>
      ))}
    </ul>
  );
});

export default TaskList;
