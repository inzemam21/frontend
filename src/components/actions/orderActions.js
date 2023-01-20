import axios from 'axios'
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_FAIL,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_REQUEST,
  ORDER_LIST_MY_REQUEST,
  ORDER_LIST_MY_SUCCESS,
  ORDER_DASHBOARD_MY_SUCCESS,
  ORDER_LIST_MY_FAIL,
  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,
  ORDER_DELIVER_FAIL,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_REQUEST,
  ORDER_DISTRIBUTOR_LIST_FAIL,
  ORDER_DISTRIBUTOR_LIST_SUCCESS,
  ORDER_DISTRIBUTOR_LIST_REQUEST,
} from '../constants/orderConstants'

const URL = 'https://localhost:50000/b1s/v1/'
//const URL = 'http://localhost:50001/b1s/v1/'

export const createOrder = (CardCode,DocDate, DocDueDate,DocumentLines) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    })


    
     
    // const {
    //   userLogin: { userInfo },
    // } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        
      }
    }

   const {data} = await axios.post(`/b1s/v1/Orders`,
   {CardCode,DocDate, DocDueDate,DocumentLines},
   {withCredentials: true}
   ) 
   dispatch({
    type: ORDER_CREATE_SUCCESS,
    payload: data,
  })


    
  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_DETAILS_REQUEST,
    })


    const { data } = await axios.get(`${URL}Orders(${id})`, {withCredentials:true})

    localStorage.setItem('orderInfo', JSON.stringify(data))

    
    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data,
    })

  
    
    
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}


export const listMyOrders = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_LIST_MY_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      'Content-Type': 'application/json,odata=minimalmetadata',
      headers: {
        Cookie:`B1SESSION=ROUTEID=.node5`,
      },
    }

    const { data } = await axios.get(`${URL}Orders?$select=DocEntry
    ,DocNum,DocDate,DocumentStatus,NumAtCard,CardCode,CardName,DocTotal`,{withCredentials:true})

    //  const {dashboard} = await axios.get(`${URL}view.svc/DashboardB1SLQuery`,{withCredentials:true})

    
    dispatch({
      type: ORDER_LIST_MY_SUCCESS,
      payload: data,
    })
    console.log(data)

    // dispatch({
    //   type: ORDER_DASHBOARD_MY_SUCCESS,
    //   payload: dashboard.value,
    // })
   
  } catch (error) {
    dispatch({
      type: ORDER_LIST_MY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}



