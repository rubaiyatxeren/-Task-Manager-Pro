import React from "react";
import { useTasks } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask, updateTaskPriority } = useTasks();

  const priorityColors = {
    high: "border-red-500",
    medium: "border-yellow-500",
    low: "border-green-500",
  };

  return (
    <div
      className={`bg-white border-l-4 ${
        priorityColors[task.priority]
      } rounded-r-lg shadow-sm p-4 mb-3 hover:shadow-md transition duration-200`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-3 flex-1">
          <button
            onClick={() => toggleTask(task.id)}
            className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1 ${
              task.completed
                ? "bg-green-500 border-green-500"
                : "border-gray-300"
            }`}
          >
            {task.completed && <span className="text-white text-sm">✓</span>}
          </button>

          <div className="flex-1">
            <h3
              className={`font-medium ${
                task.completed ? "line-through text-gray-500" : "text-gray-800"
              }`}
            >
              {task.title}
            </h3>
            {task.description && (
              <p className="text-gray-600 text-sm mt-1">{task.description}</p>
            )}
            <div className="flex items-center gap-2 mt-2">
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  task.priority === "high"
                    ? "bg-red-100 text-red-800"
                    : task.priority === "medium"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {task.priority}
              </span>
              <span className="text-xs text-gray-500">
                {new Date(task.createdAt).toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <select
            value={task.priority}
            onChange={(e) => updateTaskPriority(task.id, e.target.value)}
            className="text-sm border border-gray-300 rounded px-2 py-1"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <button
            onClick={() => deleteTask(task.id)}
            className="text-red-500 hover:text-red-700 p-1"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
