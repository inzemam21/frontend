import { ITEM_DETAILS_FAIL, ITEM_DETAILS_REQUEST, ITEM_DETAILS_SUCCESS } from "../constants/itemsConstants"

export const itemDetailsReducer = (state = {itemCode: []}, action) => {

    switch (action.type) {
        case ITEM_DETAILS_REQUEST:
             return {...state, loading: true }
        case ITEM_DETAILS_SUCCESS :
            return {loading: false , itemCode: action.payload }
        case ITEM_DETAILS_FAIL :
            return {loading: false , error: action.payload}
            default:
              return state
    } 
}