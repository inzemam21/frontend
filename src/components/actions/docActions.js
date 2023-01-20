import { DOC_FAIL, DOC_REQUEST, DOC_SUCCESS } from "../constants/DocConstants"

export const getLineItems = (LineItem) =>  (dispatch,getState) => {
    try {
        dispatch({
            type: DOC_REQUEST,
          })

      dispatch({
        type: DOC_SUCCESS,
        payload: LineItem,
      })
      
    } catch (error) {
      dispatch({
        type: DOC_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }