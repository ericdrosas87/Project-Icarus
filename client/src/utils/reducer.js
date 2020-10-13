// this is the store
export const initialState = {
    orders:[],
    user: null
}

function reducer(state, action) {
    // this console log is important 
    console.log(state)

    switch(action.type){
        case 'SET_USER':
            // logic for adding item to basket
            return {
                ...state, user: action.user
            }
            
        default:
            return state
    }
}

export default reducer;