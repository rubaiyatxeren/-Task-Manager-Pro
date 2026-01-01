import React from "react";
import FilterPanel from "./components/FilterPanel";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <Header />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            {/* Left Side */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <TaskForm />
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <FilterPanel />
                <TaskList />
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-6">
              <StatsCard />
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  📝 Quick Tips
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">•</span>
                    Click on a task to mark as complete
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">•</span>
                    Use filters to organize your tasks
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    Tasks are saved automatically
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;
