import { CREATE_BUCKET, UPDATE_BUCKET, DELETE_BUCKET } from "../types";
import { createBucket, updateBucket, deleteBucket } from "../todoActions";

describe("ToDo Actions", () => {
  let bucket = {
    id: "XXXXXXXX",
    color: "pink",
    tasks: [
      {
        id: "task1",
        description: "task 1",
        isDone: false
      }
    ],
    name: "Bucket 1"
  };

  it("should create the action of type CREATE_BUCKET", () => {
    let expectedAction = {
      type: CREATE_BUCKET,
      payload: bucket
    };
    expect(createBucket(bucket)).toEqual(expectedAction);
  });

  it("should create the action of type UPDATE_BUCKET", () => {
    let expectedAction = {
      type: UPDATE_BUCKET,
      payload: bucket
    };
    expect(updateBucket(bucket)).toEqual(expectedAction);
  });

  it("should create the action of type DELETE_BUCKET", () => {
    let bucketId = "xyz";
    let expectedAction = {
      type: DELETE_BUCKET,
      payload: bucketId
    };
    expect(deleteBucket(bucketId)).toEqual(expectedAction);
  });
});
