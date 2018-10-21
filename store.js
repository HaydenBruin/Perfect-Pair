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

        case ADD_PRODUCT_TO_CART:
            return Object.assign({}, state, {
                cartOverview: action.payload.overview,
                cartProducts: action.payload.products
            })
        default:
            return state
    }
}


// ACTIONS
const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'

export const addProductToCart = (cart) => ({
    type: ADD_PRODUCT_TO_CART,
    payload: cart
})


export function initializeStore(initialState) {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}