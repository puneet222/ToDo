import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import uuid from "uuid";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";

import { Tasks } from "./Tasks";
import { createBucket, updateBucket } from "../../actions/todoActions";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "100%",
    marginTop: "0px"
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

const Bucket = ({
  createBucket,
  updateBucket,
  isEdit,
  currentBucket,
  modalClose
}) => {
  const [title, setTitle] = useState(isEdit ? currentBucket.name : "");
  const [showTitle, setShowTitle] = useState(isEdit ? true : false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(isEdit ? currentBucket.tasks : []);
  const [color, setColor] = useState(isEdit ? currentBucket.color : "white");
  const [titleError, setTitleError] = useState(false);

  const classes = useStyles();
  const history = useHistory();

  const colors = ["#fff59d", "#ffe0b2", "#c8e6c9", "#80deea", "#f8bbd0"];

  const handleTitleChange = event => {
    setTitle(event.target.value);
    if (event.target.value === "") {
      setTitleError(true);
    } else {
      setTitleError(false);
    }
  };

  const handleTaskChange = event => {
    setTask(event.target.value);
  };

  const handleCancel = () => {
    if (isEdit) {
      modalClose();
    } else {
      history.push("/");
    }
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

  const updateTaskDescription = (id, description) => {
    tasks.forEach(task => {
      if (task.id === id) {
        task.description = description;
      }
    });
    setTasks([...tasks]);
  };

  const deleteTask = dtask => {
    let filteredTasks = tasks.filter(task => task.id !== dtask.id);
    setTasks([...filteredTasks]);
  };

  const createNewBucket = () => {
    if (title === "") {
      setTitleError(true);
      return;
    }
    const bucket = {
      id: uuid.v4(),
      name: title,
      tasks,
      color
    };
    createBucket(bucket);
    history.push("/");
  };

  const updateCurrentBucket = () => {
    if (title === "") {
      setTitleError(true);
      return;
    }
    const bucket = {
      ...currentBucket,
      name: title,
      tasks,
      color
    };
    updateBucket(bucket);
    modalClose();
    history.push("/");
  };

  const createOrUpdateBucket = () => {
    if (isEdit) {
      updateCurrentBucket();
    } else {
      createNewBucket();
    }
  };

  return (
    <Card className={classes.card} style={{ backgroundColor: color }}>
      <CardContent>
        <div>
          {showTitle ? (
            <Typography variant="h5" onClick={editTitle}>
              {title}
            </Typography>
          ) : (
            <TextField
              id="standard-basic"
              error={titleError}
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
        <Tasks
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
          updateTaskDescription={updateTaskDescription}
        />
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
      <div className="colors">
        {colors.map(color => {
          return (
            <button
              key={color}
              className="color-button"
              style={{ backgroundColor: color }}
              onClick={() => setColor(color)}
            ></button>
          );
        })}
      </div>
      <CardActions>
        <Button
          variant="contained"
          size="small"
          onClick={handleCancel}
          style={{ flex: 1 }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          size="small"
          color="primary"
          style={{ flex: 1 }}
          onClick={createOrUpdateBucket}
        >
          {isEdit ? "Edit" : "Create"}
        </Button>
      </CardActions>
    </Card>
  );
};

Bucket.propTypes = {
  isEdit: PropTypes.bool,
  createBucket: PropTypes.func.isRequired,
  updateBucket: PropTypes.func.isRequired,
  modalClose: PropTypes.func,
  currentBucket: PropTypes.object
};

export default connect(null, { createBucket, updateBucket })(Bucket);
