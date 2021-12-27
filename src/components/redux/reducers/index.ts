import { combineReducers } from "redux";
import addSub from "./addSub";

const rootReducer = combineReducers({
    updown: addSub
})

export default rootReducer;

export type State = ReturnType<typeof rootReducer>
