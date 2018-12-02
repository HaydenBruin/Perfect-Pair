import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

// REDUCERS
const initialState = {
    cartOverview: [],
    cartProducts: [],
    cartCoupons: [],
    notificationList: []
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {

        case UPDATE_CART:
            return Object.assign({}, state, {
                cartOverview: action.payload.overview,
                cartProducts: action.payload.products,
                cartCoupons: action.payload.coupons
            })
        case CREATE_NOTIFICATION:
            return Object.assign({}, state, {
                notificationList: [...state.notificationList, action.payload]
            })
            case REMOVE_NOTIFICATION:
                let notifications = state.notificationList;
                notifications.splice(action.payload, 1);
                return Object.assign({}, state, {
                    notificationList: notifications
                })
        default:
            return state
    }
}


// ACTIONS
const UPDATE_CART = 'UPDATE_CART'
const CREATE_NOTIFICATION = 'CREATE_NOTIFICATION'
const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION'

export const updateCart = (cart) => ({
    type: UPDATE_CART,
    payload: cart
})
export const createNotification = (message) => ({
    type: CREATE_NOTIFICATION,
    payload: message
})
export const removeNotification = (id) => ({
    type: REMOVE_NOTIFICATION,
    payload: id
})


export function initializeStore(initialState) {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}