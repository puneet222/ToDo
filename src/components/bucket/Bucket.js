import React, { useState } from "react";
import uuid from "uuid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import { Tasks } from "./Tasks";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "100vw"
  },
  media: {
    height: 140
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "95%"
  },
  input: {
    margin: theme.spacing(1),
    width: "80%"
  }
}));

export const Bucket = () => {
  const [title, setTitle] = useState("");
  const [showTitle, setShowTitle] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const classes = useStyles();

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleTaskChange = event => {
    setTask(event.target.value);
  };

  const displayTitle = () => {
    if (title !== "") {
      setShowTitle(true);
    }
  };

  const editTitle = () => {
    setShowTitle(false);
  };

  const createTaskObject = task => {
    return {
      id: uuid.v4(),
      description: task,
      isDone: false
    };
  };

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, createTaskObject(task)]);
      setTask("");
    }
  };

  const updateTask = utask => {
    tasks.forEach(task => {
      if (task.id === utask.id) {
        task.isDone = !task.isDone;
      }
    });
    setTasks([...tasks]);
  };

  const deleteTask = dtask => {
    let filteredTasks = tasks.filter(task => task.id !== dtask.id);
    setTasks([...filteredTasks]);
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <div>
          {showTitle ? (
            <Typography variant="h5" onClick={editTitle}>
              {title}
            </Typography>
          ) : (
            <TextField
              id="standard-basic"
              className={classes.textField}
              label="Create Title"
              margin="normal"
              value={title}
              onChange={handleTitleChange}
              onBlur={displayTitle}
              autoFocus={true}
            />
          )}
        </div>
        <Tasks tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
        <div>
          <Grid container>
            <Grid item xs={12} md={6} lg={6}>
              <Input
                placeholder="Create Task"
                className={classes.input}
                value={task}
                onChange={handleTaskChange}
                inputProps={{
                  "aria-label": "description"
                }}
              />
              <Fab
                size="small"
                color="secondary"
                aria-label="add"
                className={classes.margin}
                onClick={addTask}
              >
                <AddIcon />
              </Fab>
            </Grid>
          </Grid>
        </div>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" style={{ flex: 1 }}>
          Cancel
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          style={{ flex: 1 }}
        >
          Create
        </Button>
      </CardActions>
    </Card>
  );
};
