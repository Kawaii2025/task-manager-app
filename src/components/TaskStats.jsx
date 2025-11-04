import React from "react";
import { useTasks } from "../context/TaskContext";

const TaskStats = () => {
  const { stats } = useTasks();

  if (!stats.total) return null; // 没任务就不显示

  return (
    <div className="task-stats">
      <p>
        ✅ {stats.done} / {stats.total} tasks done
      </p>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${stats.progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TaskStats;
