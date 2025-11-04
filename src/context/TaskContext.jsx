import React, { createContext, useReducer, useContext } from "react";

// 1️⃣ 创建 Context
const TaskContext = createContext();

// 2️⃣ reducer 函数
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { title: action.payload, done: false }];
    case "TOGGLE_TASK":
      return state.map((t, i) =>
        i === action.payload ? { ...t, done: !t.done } : t
      );
    case "DELETE_TASK":
      return state.filter((_, i) => i !== action.payload);
    default:
      return state;
  }
};

// 3️⃣ Provider 组件
export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

// 4️⃣ 自定义 Hook（方便子组件使用）
export const useTasks = () => useContext(TaskContext);
