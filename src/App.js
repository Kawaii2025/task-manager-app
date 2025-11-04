import React from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import TaskStats from "./components/TaskStats";
import { TaskProvider } from "./context/TaskContext";
import "./App.css";

const App = () => {
  return (
    <TaskProvider>
      <div className="container">
        <h1>📝 Task Manager</h1>
        <TaskForm />
        <TaskList />
        <TaskStats /> {/* ✅ 新增统计组件 */}
      </div>
    </TaskProvider>
  );
};

export default App;
