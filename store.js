import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

// REDUCERS
const initialState = {
    cartOverview: [],
    cartProducts: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_CART:
            return Object.assign({}, state, {
                cartOverview: action.payload.overview,
                cartProducts: action.payload.products
            })
        default:
            return state
    }
}


// ACTIONS
const UPDATE_CART = 'UPDATE_CART'

export const updateCart = (cart) => ({
    type: UPDATE_CART,
    payload: cart
})


export function initializeStore(initialState) {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}