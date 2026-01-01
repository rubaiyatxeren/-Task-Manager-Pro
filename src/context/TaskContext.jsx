import React, { createContext, useCallback, useContext, useState } from "react";
import toast from "react-hot-toast";
import useLocalStorage from "../hooks/useLocalStorage";

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("all");

  const addTask = useCallback(
    (task) => {
      const newTask = {
        id: Date.now(),
        title: task.title,
        description: task.description,
        priority: task.priority || "medium",
        completed: false,
        createdAt: new Date().toISOString(),
      };
      setTasks((prev) => [...prev, newTask]);
      toast.success("Task added successfully! 🎉");
    },
    [setTasks]
  );

  const toggleTask = useCallback(
    (id) => {
      setTasks((prev) =>
        prev.map((task) => {
          if (task.id === id) {
            const isCompleted = !task.completed;
            toast.success(
              isCompleted ? "Task completed! ✅" : "Task marked as active! 🔄"
            );
            return { ...task, completed: isCompleted };
          }
          return task;
        })
      );
    },
    [setTasks]
  );

  const deleteTask = useCallback(
    (id) => {
      setTasks((prev) =>
        prev.filter((task) => {
          if (task.id === id) {
            toast.error("Task deleted! 🗑️");
            return false;
          }
          return true;
        })
      );
    },
    [setTasks]
  );

  const updateTaskPriority = useCallback(
    (id, priority) => {
      setTasks((prev) =>
        prev.map((task) => {
          if (task.id === id) {
            toast(`Priority changed to ${priority}`, {
              icon:
                priority === "high"
                  ? "🔥"
                  : priority === "medium"
                  ? "⚡"
                  : "🌿",
            });
            return { ...task, priority };
          }
          return task;
        })
      );
    },
    [setTasks]
  );

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    if (filter === "high") return task.priority === "high";
    if (filter === "medium") return task.priority === "medium";
    if (filter === "low") return task.priority === "low";
    return true;
  });

  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.completed).length,
    active: tasks.filter((t) => !t.completed).length,
    high: tasks.filter((t) => t.priority === "high").length,
    medium: tasks.filter((t) => t.priority === "medium").length,
    low: tasks.filter((t) => t.priority === "low").length,
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        filter,
        setFilter,
        addTask,
        toggleTask,
        deleteTask,
        updateTaskPriority,
        filteredTasks,
        stats,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
