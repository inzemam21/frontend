import { BATCH_DETAIL_FAIL, BATCH_DETAIL_REQUEST, BATCH_DETAIL_SUCCESS, DELIVERY_CREATE_FAIL, DELIVERY_CREATE_REQUEST, DELIVERY_CREATE_RESET, DELIVERY_CREATE_SUCCESS } from "../constants/deliveryConstants"

export const deliveryCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case DELIVERY_CREATE_REQUEST:
        return {
          loading: true,
        }
      case DELIVERY_CREATE_SUCCESS:
        return {
          loading: false,
          success: 'Sales Order Created',
          order: action.payload,
        }
      case DELIVERY_CREATE_FAIL:
        return {
          loading: false,
          error: action.payload,
        }
        case DELIVERY_CREATE_RESET:
         return {}
      default:
        return state
    }
  }

  export const batchDetailReducer = (state = {batchDetail: []}, action) => {
    switch (action.type) {
      case BATCH_DETAIL_REQUEST:
        return {
          loading: true,
        }
      
      case BATCH_DETAIL_SUCCESS:
        return {
          loading: false,
          success: 'batch details',
          batchDetail: action.payload,
        }
      case BATCH_DETAIL_FAIL:
        return {
          loading: false,
          error: action.payload,
        }  
      default:
        return state
    }
  }