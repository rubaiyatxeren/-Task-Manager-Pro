import React from "react";
import { useTasks } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { filteredTasks } = useTasks();

  if (filteredTasks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">📝</div>
        <h3 className="text-gray-500 text-lg">No tasks found</h3>
        <p className="text-gray-400">Add a new task to get started!</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
