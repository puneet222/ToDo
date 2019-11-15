import React from "react";
import { Link } from "react-router-dom";
import { Fab, Typography } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import amber from "@material-ui/core/colors/amber";

import "./todo.css";

export const CreateBucket = ({ noBuckets }) => {
  return (
    <React.Fragment>
      {noBuckets ? (
        <Typography variant="h6" component="h2" className="no-bucket-message">
          You've complete all the tasks
        </Typography>
      ) : (
        ""
      )}
      <Link to="/create-bucket" style={{ textDecoration: "none" }}>
        <Fab
          variant="extended"
          aria-label="create"
          className={noBuckets ? "button-center" : "bottom-right"}
          style={{ backgroundColor: amber[400] }}
        >
          <Icon>edit</Icon>
          Create New Task
        </Fab>
      </Link>
    </React.Fragment>
  );
};
