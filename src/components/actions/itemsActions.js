import { ITEM_DETAILS_FAIL, ITEM_DETAILS_REQUEST, ITEM_DETAILS_SUCCESS } from "../constants/itemsConstants"
import axios from 'axios'

export const getItemDetails = () => async (dispatch,getState) => {
    try {
      dispatch({
        type: ITEM_DETAILS_REQUEST,
      })

      // const {userLogin: {userInfo}} = getState()
  
      // const config = {
      //   headers: {
      //     'Content-Type': 'application/json',
      //     Authorization : `Bearer ${userInfo.token}`
      //   },
      // }
  
      const { data } = await axios.get(
       'https://localhost:50000/b1s/v1/Items?$select=ItemCode,ItemName',
       {withCredentials: true}
     
      )

  
      dispatch({
        type: ITEM_DETAILS_SUCCESS,
        payload: data.value,
      })

      
    } catch (error) {
      dispatch({
        type: ITEM_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }