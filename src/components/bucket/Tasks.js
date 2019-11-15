import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Grid } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import "./bucket.css";

export const Tasks = ({ tasks, updateTask, deleteTask }) => {
  const handleChange = task => {
    updateTask(task);
  };

  return tasks.map(task => {
    return (
      <div key={task.id}>
        <Grid container>
          <Grid item xs={11}>
            <FormControlLabel
              key={task.id}
              control={
                <Checkbox
                  checked={task.isDone}
                  onChange={() => handleChange(task)}
                />
              }
              label={task.description}
            />
          </Grid>
          <Grid item xs={1} className="delete-icon">
            <Icon color="disabled" onClick={() => deleteTask(task)}>
              delete_forever
            </Icon>
          </Grid>
        </Grid>
      </div>
    );
  });
};
