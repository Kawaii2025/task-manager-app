import React, { useReducer, useMemo, useEffect, useCallback } from 'react';
import { taskReducer } from './reducer';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { useLocalStorage } from './hooks/useLocalStorage';
import './App.css';

function App() {
  const [storedTasks, setStoredTasks] = useLocalStorage('tasks', []);
  const [tasks, dispatch] = useReducer(taskReducer, storedTasks);

  useEffect(() => {
    setStoredTasks(tasks);
  }, [tasks, setStoredTasks]);

  // ✅ useMemo 缓存计算结果
  const pendingCount = useMemo(() => {
    console.log("🔄 Recalculating pending count...");
    return tasks.filter((t) => !t.done).length;
  }, [tasks]);

  const handleAdd = useCallback(
    (title) => dispatch({ type: "ADD_TASK", payload: title }),
    [dispatch]
  );

  const handleToggle = useCallback(
    (index) => dispatch({ type: "TOGGLE_TASK", payload: index }),
    [dispatch]
  );

  const handleDelete = useCallback(
    (index) => dispatch({ type: "DELETE_TASK", payload: index }),
    [dispatch]
  );

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm
        onAdd={handleAdd}
      />
      <TaskList
        tasks={tasks}
        onToggle={handleToggle}
        onDelete={handleDelete}
      />
      <div className="stats">
        <p>
          Pending tasks: <strong>{pendingCount}</strong> / {tasks.length}
        </p>
      </div>
    </div>
  );
}

export default App;
