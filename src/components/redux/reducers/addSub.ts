import {ActionProps} from '../actions/index'
import { ActionType } from '../actions/action_types';

const initialState = 0 ;

const addSub = (state:number = initialState, action: ActionProps) => {
    switch(action.type) {
        case ActionType.INCREMENT: return state + 1
        case ActionType.DECREMENT: return state - 1
        default: return state
    }
}

export default addSub;
