import rootReducer from "../index";
import {
  CREATE_BUCKET,
  UPDATE_BUCKET,
  DELETE_BUCKET
} from "../../actions/types";

describe("Todo Reducer Test", () => {
  let initialState = {
    buckets: [
      {
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
      }
    ]
  };

  it("should handle the action CREATE_BUCKET", () => {
    let bucket = {
      id: "ZZZZZZZZ",
      color: "yellow",
      tasks: [
        {
          id: "task1",
          description: "task 1",
          isDone: false
        }
      ],
      name: "Bucket 2"
    };
    let expectedState = {
      ...initialState,
      buckets: [...initialState.buckets, bucket]
    };
    let action = {
      type: CREATE_BUCKET,
      payload: bucket
    };
    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle the action UPDATE_BUCKET", () => {
    let updatedBucket = {
      id: "XXXXXXXX",
      color: "pink",
      tasks: [
        {
          id: "task1",
          description: "task 1",
          isDone: false
        },
        {
          id: "task1",
          description: "task 1",
          isDone: false
        }
      ],
      name: "Bucket 2"
    };

    let expectedState = {
      buckets: [updatedBucket]
    };

    let action = {
      type: UPDATE_BUCKET,
      payload: updatedBucket
    };

    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });
  it("should handle the action DELETE_BUCKET", () => {
    let bucketId = initialState.buckets[0]["id"];
    let expectedState = {
      buckets: []
    };
    let action = {
      type: DELETE_BUCKET,
      payload: bucketId
    };
    expect(rootReducer(initialState, action)).toEqual(expectedState);
  });
});
