import { useState } from "react"
import { stateProps } from "./index";

const UseState = ({}: stateProps) => {

    const [user, setUser] = useState<{name:string, email:string} | null>(null)
    const handleLogin = () => {
        setUser({
            name: 'Hello World',
            email: 'hello@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <p>User name is - {user?.name}</p>
            <p>User email is - {user?.email}</p>
        </div>
    )
}

export default UseState
