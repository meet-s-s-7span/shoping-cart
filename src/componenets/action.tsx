import { ADD_VALUE_TO_CART, REMOVE_VALUE_FROM_CART } from "./constant";

export function addValueCart(cartItems){
    return{
        type:ADD_VALUE_TO_CART,
        data:cartItems
    }
}

export function removeValueCart(cartItems){
    return{
        type:REMOVE_VALUE_FROM_CART,
        data:cartItems
    }
}