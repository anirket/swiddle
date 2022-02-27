import { ADD_CART, REMOVE_CART } from './constants'

const initialState = {
    cartItems: []
}

export const cartReducer = (currState = initialState, action) => {
    switch (action.type) {
        case ADD_CART:

            let products = [...currState.cartItems, action.payload]

            return { ...currState, cartItems: products }


        case REMOVE_CART:
            return {
                ...currState, cartItems: currState.cartItems.filter(item => item.id != action.id)
            }
        default:
            return currState;
    }

}