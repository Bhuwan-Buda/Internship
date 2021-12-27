import { containerProps } from './index'

const Container = ({styles} : containerProps) => {
    return (
        <div>
            <h2 style={styles}>TypeScript</h2>
        </div>
    )
}

export default Container
