const initialValues = {
    savedData: []
}

const saveDataReducer = (state=initialValues, action) => {
    switch(action.type) {
        case 'SAVEDATA': 
        const { data } = action.payload;
        return {
            ...state,
            savedData : [
                {
                    savedData: data
                },
                ...state.savedData,
            ]
        }
        default: return state
    }
}

export default saveDataReducer
