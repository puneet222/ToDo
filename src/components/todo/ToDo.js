import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Paper, Grid, Modal, Backdrop, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { deleteBucket } from "../../actions/todoActions";
import { CreateBucket } from "./CreateBucket";
import { TodoBucket } from "./TodoBucket";
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

  const handleDeleteBucket = bucketId => {
    props.deleteBucket(bucketId);
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
                    onClick={e => {
                      e.stopPropagation();
                      handleOpen(bucket);
                    }}
                  >
                    <TodoBucket
                      bucket={bucket}
                      deleteBucket={handleDeleteBucket}
                    />
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

ToDo.propTypes = {
  buckets: PropTypes.array,
  deleteBucket: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  buckets: state.buckets
});

export default connect(mapStateToProps, { deleteBucket })(ToDo);
