import React from "react";
import { useTasks } from "../context/TaskContext";

const StatsCard = () => {
  const { stats } = useTasks();

  const statItems = [
    {
      label: "Total Tasks",
      value: stats.total,
      color: "bg-blue-500",
      emoji: "📊",
    },
    {
      label: "Completed",
      value: stats.completed,
      color: "bg-green-500",
      emoji: "✅",
    },
    {
      label: "Active",
      value: stats.active,
      color: "bg-yellow-500",
      emoji: "⚡",
    },
    {
      label: "High Priority",
      value: stats.high,
      color: "bg-red-500",
      emoji: "🔥",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 text-white">
      <h3 className="text-xl font-semibold mb-6">📈 Task Statistics</h3>

      <div className="space-y-4">
        {statItems.map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">{item.emoji}</span>
              <span className="font-medium">{item.label}</span>
            </div>
            <span className="text-2xl font-bold">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-white/20">
        <div className="flex items-center justify-between">
          <span>Completion Rate</span>
          <span className="font-bold">
            {stats.total > 0
              ? Math.round((stats.completed / stats.total) * 100)
              : 0}
            %
          </span>
        </div>
        <div className="mt-2 h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-400 rounded-full transition-all duration-500"
            style={{
              width: `${
                stats.total > 0 ? (stats.completed / stats.total) * 100 : 0
              }%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
