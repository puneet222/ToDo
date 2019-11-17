import React from "react";
import { Grid, Typography, Icon } from "@material-ui/core";
import PropTypes from "prop-types";

export const TodoBucket = ({ bucket, deleteBucket }) => {
  return (
    <Grid container>
      <Grid item xs={11}>
        <Typography variant="h5" component="h3">
          {bucket.name}
        </Typography>
        <Typography component="p">
          <span>{bucket.tasks.length} Tasks </span>
          <span className="done-task">
            {bucket.tasks.filter(task => task.isDone === true).length} Done
          </span>
        </Typography>
      </Grid>
      <Grid item xs={1}>
        <Icon
          color="disabled"
          className="pointer"
          onClick={e => {
            e.stopPropagation();
            deleteBucket(bucket.id);
          }}
        >
          delete_forever
        </Icon>
      </Grid>
    </Grid>
  );
};

TodoBucket.propTypes = {
  bucket: PropTypes.object.isRequired,
  deleteBucket: PropTypes.func.isRequired
};
