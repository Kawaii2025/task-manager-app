import React, {
  createContext,
  useReducer,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const TaskContext = createContext();

export function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          id: Date.now(),        // ✅ 唯一 ID（基于时间戳）
          title: action.payload,
          done: false,
        },
      ];

    case "TOGGLE_TASK":
      return state.map((task) =>
        task.id === action.payload
          ? { ...task, done: !task.done }
          : task
      );

    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);

    default:
      return state;
  }
}


export const TaskProvider = ({ children }) => {
  const [storedTasks, setStoredTasks] = useLocalStorage("tasks", []);
  const [tasks, dispatch] = useReducer(taskReducer, storedTasks);

  useEffect(() => {
    setStoredTasks(tasks);
  }, [tasks, setStoredTasks]);

  // ✅ 全局操作函数
  const addTask = useCallback(
    (title) => dispatch({ type: "ADD_TASK", payload: title }),
    [dispatch]
  );

  const toggleTask = useCallback(
    (index) => dispatch({ type: "TOGGLE_TASK", payload: index }),
    [dispatch]
  );

  const deleteTask = useCallback(
    (index) => dispatch({ type: "DELETE_TASK", payload: index }),
    [dispatch]
  );

  // ✅ useMemo 统计衍生数据
  const stats = useMemo(() => {
    const done = tasks.filter((t) => t.done).length;
    const total = tasks.length;
    const progress = total ? Math.round((done / total) * 100) : 0;
    return { done, total, progress };
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleTask, deleteTask, stats }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);
