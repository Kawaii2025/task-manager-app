import React, { useState } from 'react';
import { useTasks } from '../context/TaskContext';

const TaskForm = () => {
  const [input, setInput] = useState('');
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = input.trim();
    if (!title) return;
    addTask(title);
    setInput(''); // 清空输入框
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>

      <div className="task-buttons">
        <button type="submit" className="add-btn">
          Add
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
