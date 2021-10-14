import { combineReducers } from "redux";
import addReducer from "./addReducer";

const rootReducer = combineReducers({
  addReducer,
});

export default rootReducer;
