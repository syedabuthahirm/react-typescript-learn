import counterReducer from "./counterReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
