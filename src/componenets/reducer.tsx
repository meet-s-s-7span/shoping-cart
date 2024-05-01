import { ADD_VALUE_TO_CART, REMOVE_VALUE_FROM_CART } from "./constant";

const initialState = {cartItems:[]}

export const reducer = (state = initialState,action)=>{
    switch(action.type){
        case ADD_VALUE_TO_CART:{
            return{
                // ...state,
                // item:[...state.cartValue,action.value]
                ...state,
                
                 cartItems:[...state.cartItems,action.data],
                
                // cartValue:state.cartValue +1,
            }
        }
        case REMOVE_VALUE_FROM_CART: {
            const filteredItems = state.cartItems.filter(item => item.id !== action.data.id);
            console.log("reducer file filter"+filteredItems);
            return {
                ...state,
                cartItems: filteredItems,
            };
        }
        default:{
            return state
        }
    }

}