// import { combineReducers } from "redux";
// import appReducer from "./appReducer";

// export default combineReducers({
//   app: appReducer
// });

import { CREATE_BUCKET } from "../actions/types";

export default (state, action) => {
  switch (action.type) {
    case CREATE_BUCKET: {
      console.log(action);
      return state;
    }
    default:
      return state;
  }
};
