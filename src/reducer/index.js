import todoReducer from "./TodoReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({todoReducer})

export default rootReducer