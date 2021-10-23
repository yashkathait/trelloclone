import { combineReducers } from "redux";
import trelloReducer from "./trelloReducer";

const rootReducer = combineReducers({
  trelloReducer,
});

export default rootReducer;
