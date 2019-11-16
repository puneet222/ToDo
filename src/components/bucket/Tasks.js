import React from "react";
import "./bucket.css";
import { TaskItem } from "./TaskItem";

export const Tasks = ({
  tasks,
  updateTask,
  updateTaskDescription,
  deleteTask
}) => {
  return tasks.map(task => {
    return (
      <TaskItem
        key={task.id}
        task={task}
        updateTaskDescription={updateTaskDescription}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
    );
  });
};
