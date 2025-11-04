import React, { useState } from 'react';
// import './TaskForm.css'; // 需创建对应的CSS文件

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onAdd(title);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="task-input">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter new task"
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
