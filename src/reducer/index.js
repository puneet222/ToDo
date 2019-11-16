import { CREATE_BUCKET, UPDATE_BUCKET } from "../actions/types";

export default (state, action) => {
  switch (action.type) {
    case CREATE_BUCKET: {
      return {
        ...state,
        buckets: [...state.buckets, action.payload]
      };
    }
    case UPDATE_BUCKET: {
      return {
        ...state,
        buckets: state.buckets.map(bucket => {
          if (bucket.id === action.payload.id) {
            return action.payload;
          } else {
            return bucket;
          }
        })
      };
    }
    default:
      return state;
  }
};
