import {ActionType} from './action_types'

interface Increment {
    type: ActionType.INCREMENT
}

interface Decrement {
    type: ActionType.DECREMENT
}

export type ActionProps = Increment | Decrement
