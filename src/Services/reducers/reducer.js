
import {ADD_TO_CART, REMOVE_FROM_CART} from '../constants';

const initialState = {
    cardData : [],
};

export const cartItems = (state = initialState, action) =>{
   console.log('action', action)
    switch(action.type){

        case ADD_TO_CART :
        return {
            ...state,
            cardData : [...state.cardData,action.data]
        }
        case REMOVE_FROM_CART:
            let cardData = [...state.cardData];
            cardData.splice(0, 1)
            console.log('cardData',cardData);
            return{
                ...state,
                cardData : [...cardData]
            }
        default: 
        return state;
    }

}