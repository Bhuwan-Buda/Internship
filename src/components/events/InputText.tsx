import { inputProps } from './index'

const InputText = ({value, handleChange} : inputProps) => {
    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
        </div>
    )
}

export default InputText
