import axios from 'axios'
import { BATCH_DETAIL_FAIL, BATCH_DETAIL_REQUEST, BATCH_DETAIL_SUCCESS, DELIVERY_CREATE_FAIL, DELIVERY_CREATE_REQUEST, DELIVERY_CREATE_SUCCESS } from "../constants/deliveryConstants"

const URL = 'https://localhost:50000/b1s/v1/'
//const URL = 'http://localhost:50001/b1s/v1/'

export const createDelivery = (CardCode,DocDate, DocDueDate,DocumentLines) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELIVERY_CREATE_REQUEST,
    })

    
     
    // const {
    //   userLogin: { userInfo },
    // } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        
      }
    }
    console.log({CardCode,DocumentLines})

   const {data} = await axios.post(`/b1s/v1/DeliveryNotes`,
   {CardCode,DocDate, DocDueDate,DocumentLines},
   {withCredentials: true}
   ) 
   dispatch({
    type: DELIVERY_CREATE_SUCCESS,
    payload: data,
  })


    
  } catch (error) {
    dispatch({
      type: DELIVERY_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}



export const batchDetailAction = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: BATCH_DETAIL_REQUEST,
      
    })
    // const {
    //   userLogin: { userInfo },
    // } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        
      }
    }

   const {data} = await axios.get(`${URL}view.svc/BatchDetailB1SLQuery`,
   {withCredentials: true}
   ) 
   
   dispatch({
    type: BATCH_DETAIL_SUCCESS,
    payload: data.value,
  })


    
  } catch (error) {
    dispatch({
      type: BATCH_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

