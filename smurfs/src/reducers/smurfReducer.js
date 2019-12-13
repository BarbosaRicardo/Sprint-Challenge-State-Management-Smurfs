const initialState ={
    smurfs: []
}

export function smurfReducer(state = initialState, action) {
    switch(action.type) {
        case 'GET_SMURFS':
            return {
                smurfs: action.payload
            }
        case 'POST_SMURF':
            return {
                smurfs: [
                    ...state.smurf,
                    action.payload
                ]
            }

            default: return state;
    }
}