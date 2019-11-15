import React, { useState, useEffect } from "react";
import { Typography, Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(3, 2),
    padding: theme.spacing(2, 2)
  }
}));

export const ToDo = () => {
  useEffect(() => {
    const buckets = [
      {
        id: 1,
        name: "Personal",
        tasks: []
      },
      {
        id: 2,
        name: "Professional",
        tasks: []
      },
      {
        id: 3,
        name: "Time Pass",
        tasks: []
      },
      {
        id: 4,
        name: "Hobbie",
        tasks: []
      }
    ];
    setBuckets(buckets);
  }, []);

  const [buckets, setBuckets] = useState([]);
  const classes = useStyles();
  return buckets.length > 0 ? (
    <Grid container>
      {buckets.map(bucket => {
        return (
          <Grid item xs={12} md={4} lg={3} key={bucket.id}>
            <Paper className={classes.root} style={{ backgroundColor: "pink" }}>
              <Typography variant="h5" component="h3">
                {bucket.name}
              </Typography>
              <Typography component="p">{bucket.tasks.length} Tasks</Typography>
            </Paper>
          </Grid>
        );
      })}
    </Grid>
  ) : (
    <h5>No Buckets</h5>
  );
};
