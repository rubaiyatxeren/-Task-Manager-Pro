import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium");
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({ title, description, priority });
    setTitle("");
    setDescription("");
    setPriority("medium");
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Task</h2>

      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>

      <div>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task description (optional)"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows="3"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {["low", "medium", "high"].map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPriority(p)}
              className={`px-4 py-2 rounded-lg capitalize ${
                priority === p
                  ? p === "high"
                    ? "bg-red-500 text-white"
                    : p === "medium"
                    ? "bg-yellow-500 text-white"
                    : "bg-green-500 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
