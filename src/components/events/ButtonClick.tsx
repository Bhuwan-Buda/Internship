import { buttonProps } from './index'

const buttonClick = ({handleClick}: buttonProps) => {
    return (
        <div>
            <button onClick={(event) => handleClick(event, 20)}>click</button>
        </div>
    )
}

export default buttonClick
