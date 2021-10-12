import { combineReducers } from "redux";
import addReducer from "./addReducer";

const rootReducer = combineReducers({
  lists: addReducer,
});

export default rootReducer;
