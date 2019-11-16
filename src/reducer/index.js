import { CREATE_BUCKET, UPDATE_BUCKET, DELETE_BUCKET } from "../actions/types";

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
    case DELETE_BUCKET: {
      return {
        ...state,
        buckets: state.buckets.filter(bucket => bucket.id !== action.payload)
      };
    }
    default:
      return state;
  }
};
