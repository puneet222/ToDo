import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Typography,
  Paper,
  Grid,
  Modal,
  Backdrop,
  Fade
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { CreateBucket } from "./CreateBucket";
import Bucket from "../bucket/Bucket";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 1),
    padding: theme.spacing(2, 2),
    cursor: "pointer"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const ToDo = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [currentBucket, setCurrentBucket] = useState({});

  const handleOpen = bucket => {
    setCurrentBucket(bucket);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {props.buckets.length > 0 ? (
        <React.Fragment>
          <Grid container>
            {props.buckets.map(bucket => {
              return (
                <Grid item xs={12} md={4} lg={3} sm={6} key={bucket.id}>
                  <Paper
                    className={classes.root}
                    style={{ backgroundColor: bucket.color }}
                    onClick={() => handleOpen(bucket)}
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
      )}
      <Modal
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className="modal-content-small">
            <Bucket
              isEdit={true}
              currentBucket={currentBucket}
              modalClose={handleClose}
            />
          </div>
        </Fade>
      </Modal>
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  buckets: state.buckets
});

export default connect(mapStateToProps)(ToDo);
