import { CREATE_BUCKET, UPDATE_BUCKET } from "./types";

export const createBucket = data => {
  return {
    type: CREATE_BUCKET,
    payload: data
  };
};

export const updateBucket = data => {
  return {
    type: UPDATE_BUCKET,
    payload: data
  };
};
