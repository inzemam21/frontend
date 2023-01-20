import { DOC_FAIL, DOC_REQUEST, DOC_SUCCESS } from "../constants/DocConstants"

export const lineItemReducer = (state = {LineItem: []}, action) => {

    switch (action.type) {
        case DOC_SUCCESS :
            return {LineItem: action.payload }
        case DOC_FAIL :
            return {loading: false , error: action.payload}
            default:
              return state
    } 
}