export const authenticateAction = () => {
    return {
        type: 'AUTHENTICATION'
    }
}

export const logout = () => {
    return {
        type: 'LOGOUT'
    }
}

export const saveData = (data) => {
    return {
        type: 'SAVEDATA',
        payload: {
            data: data
        }
    }
}