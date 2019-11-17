import React from "react";
import PropTypes from "prop-types";
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

Tasks.propTypes = {
  tasks: PropTypes.array,
  updateTask: PropTypes.func.isRequired,
  updateTaskDescription: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};
