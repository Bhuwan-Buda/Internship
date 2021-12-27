import { ActionType } from "./action_types"
import { Dispatch } from "redux"
import { ActionProps } from "./index"

export const increment = () => {
    return (dispatch: Dispatch<ActionProps>) => {
        dispatch({
            type: ActionType.INCREMENT
        })
    }
}

export const decrement = () => {
    return (dispatch: Dispatch<ActionProps>) => {
        dispatch({
            type: ActionType.DECREMENT
        })
    }
}

