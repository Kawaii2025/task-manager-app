import React, { useEffect } from 'react';

// TaskItem no longer consumes context directly. It receives the task data
// and action handlers as props so React.memo can prevent re-renders when
// the task hasn't changed.
const TaskItem = React.memo(
  ({ task, index, onToggle, onDelete }) => {
    // Log mount / unmount separately from updates to avoid double render
    // confusion in StrictMode. This shows lifecycle events clearly.
    useEffect(() => {
      console.log('✅ mount TaskItem:', task.title);
      return () => {
        console.log('⛔ unmount TaskItem:', task.title);
      };
    }, [task.title]);

    // Log updates to the task (title or done) — this runs after render.
    useEffect(() => {
      console.log('ℹ️ update TaskItem:', task.title, 'done:', task.done);
    }, [task.title, task.done]);

    return (
      <li>
        <span className={`task-title ${task.done ? 'done' : ''}`}>
          {task.title}
        </span>
        <div className="task-buttons">
          <button className="done-btn" onClick={() => onToggle(task.id)}>
            {task.done ? 'Undo' : 'Done'}
          </button>
          <button className="delete-btn" onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </div>
      </li>
    );
  },
  (prevProps, nextProps) => {
    // Only re-render when the task content or status changes.
    return (
      prevProps.task.title === nextProps.task.title &&
      prevProps.task.done === nextProps.task.done
    );
  }
);

export default TaskItem;
