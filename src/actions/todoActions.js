import { CREATE_BUCKET } from "./types";

export const createBucket = data => {
  return {
    type: CREATE_BUCKET,
    payload: data
  };
};
