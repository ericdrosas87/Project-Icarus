// this is the store
export const initialState = {
    show:[],
    orders:[],
    preOrders:[],
    user: null,
}

function reducer(state, action) {
    // this console log is important 
    console.log(action)

    switch(action.type){

        case 'SET_USER':
            // logic for adding item to basket
            return {
                ...state, user: action.user
            }
        case 'GET_ITEMS':
            return {
                ...state, show: action.show
            }
        case 'ADD_PRODUCT':
            return {
                ...state,
                orders:[...state.orders, action.pre_ordered_item]
            }
        case "GET_PREORDER_ITEMS":
            return {
                ...state, preOrders: action.preOrders
            }
            
        default:
            return state
    }
}

export default reducer;