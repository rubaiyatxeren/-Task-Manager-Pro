import React from "react";
import { useTasks } from "../context/TaskContext";

const FilterPanel = () => {
  const { filter, setFilter } = useTasks();

  const filters = [
    { key: "all", label: "All Tasks", emoji: "📋" },
    { key: "active", label: "Active", emoji: "⚡" },
    { key: "completed", label: "Completed", emoji: "✅" },
    { key: "high", label: "High Priority", emoji: "🔥" },
    { key: "medium", label: "Medium", emoji: "⚖️" },
    { key: "low", label: "Low", emoji: "🌿" },
  ];

  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">Filters</h3>
      <div className="flex flex-wrap gap-2">
        {filters.map(({ key, label, emoji }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition duration-200 ${
              filter === key
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <span>{emoji}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
