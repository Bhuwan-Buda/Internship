import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import saveDataReducer from "./saveDataReducer";

const rootReducer = combineReducers({ authenticateReducer, saveDataReducer });

export default rootReducer;
