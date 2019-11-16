import React, { useState } from "react";
import { Input, Checkbox, Grid, Icon } from "@material-ui/core";

export const TaskItem = ({
  task,
  updateTaskDescription,
  updateTask,
  deleteTask
}) => {
  const handleInputChange = event => {
    setInputTask(event.target.value);
  };

  const editTaskDescription = task => {
    updateTaskDescription(task.id, inputTask);
    setEditTask(false);
  };

  const handleChange = task => {
    updateTask(task);
  };

  const showInput = task => {
    setEditTask(true);
    setInputTask(task.description);
  };

  const [editTask, setEditTask] = useState(false);
  const [inputTask, setInputTask] = useState("");

  return (
    <div key={task.id}>
      <Grid container>
        <Grid item xs={11}>
          {editTask ? (
            <Input
              value={inputTask}
              inputProps={{
                "aria-label": "description"
              }}
              onChange={handleInputChange}
              autoFocus={true}
            />
          ) : (
            <React.Fragment>
              <Checkbox
                checked={task.isDone}
                onChange={() => handleChange(task)}
              />
              <span className="pointer" onClick={() => showInput(task)}>
                {task.description}
              </span>
            </React.Fragment>
          )}
        </Grid>
        <Grid item xs={1} className="delete-icon">
          {editTask ? (
            <Icon
              color="primary"
              className="pointer"
              onClick={() => editTaskDescription(task)}
            >
              done
            </Icon>
          ) : (
            <Icon
              color="disabled"
              className="pointer"
              onClick={() => deleteTask(task)}
            >
              delete_forever
            </Icon>
          )}
        </Grid>
      </Grid>
    </div>
  );
};
