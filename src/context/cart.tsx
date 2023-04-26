import { useReducer, createContext } from "react";
import{ cartReducer, cartInitialState } from '../reducers/reducerCart';

export const CartContext = createContext()

function useCartReducer () {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState)

    const addToCart = product => ({
        type: 'ADD_TO_CART',
        payload: product
    })

    return { state, addToCart }
}

export function CartProvider ({ children }) {
    const { state, addToCart } = useCartReducer()

    return (
        <CartContext.Provider value={{cart: state, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}