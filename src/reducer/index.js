import { CREATE_BUCKET, UPDATE_BUCKET, DELETE_BUCKET } from "../actions/types";

const saveState = state => {
  localStorage.setItem("appState", JSON.stringify(state));
};

export default (state, action) => {
  switch (action.type) {
    case CREATE_BUCKET: {
      let newState = {
        ...state,
        buckets: [...state.buckets, action.payload]
      };
      saveState(newState);
      return newState;
    }
    case UPDATE_BUCKET: {
      let newState = {
        ...state,
        buckets: state.buckets.map(bucket => {
          if (bucket.id === action.payload.id) {
            return action.payload;
          } else {
            return bucket;
          }
        })
      };
      saveState(newState);
      return newState;
    }
    case DELETE_BUCKET: {
      let newState = {
        ...state,
        buckets: state.buckets.filter(bucket => bucket.id !== action.payload)
      };
      saveState(newState);
      return newState;
    }
    default:
      return state;
  }
};
