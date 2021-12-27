import { useDispatch, useSelector } from 'react-redux'
import { State } from './reducers/index';
import { bindActionCreators } from 'redux';
import { action_creators } from './index';

const IncDec = () => {
    const dispatch = useDispatch();
    const { increment, decrement } = bindActionCreators(action_creators, dispatch);
    const countNum = useSelector((state: State) => state.updown)
    console.log(countNum);

    return (
        <div> 
            <h1>{countNum}</h1>
            <button onClick={() => decrement()}> Decrement </button>
            <button onClick={() => increment()}> Increment </button>
        </div>
    )
}

export default IncDec;
