import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Typography, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { CreateBucket } from "./CreateBucket";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 1),
    padding: theme.spacing(2, 2)
  }
}));

const ToDo = props => {
  const classes = useStyles();
  return props.buckets.length > 0 ? (
    <React.Fragment>
      <Grid container>
        {props.buckets.map(bucket => {
          return (
            <Grid item xs={12} md={4} lg={3} key={bucket.id}>
              <Paper
                className={classes.root}
                style={{ backgroundColor: "pink" }}
              >
                <Typography variant="h5" component="h3">
                  {bucket.name}
                </Typography>
                <Typography component="p">
                  {bucket.tasks.length} Tasks
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <CreateBucket noBuckets={false} />
    </React.Fragment>
  ) : (
    <CreateBucket noBuckets={true} />
  );
};

const mapStateToProps = state => ({
  buckets: state.buckets
});

export default connect(mapStateToProps)(ToDo);
