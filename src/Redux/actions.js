import { ADD_CART,REMOVE_CART } from './constants'


export const addcartproduct = (payload) => {
    return {
        type: ADD_CART,
        payload: payload
    }
}

export const removecartproduct = (payload) => {
    return {
        type: REMOVE_CART,
        id: payload
    }
}

