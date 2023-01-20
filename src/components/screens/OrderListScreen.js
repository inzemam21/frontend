import React, {useEffect} from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Message'
import Loader from '../Loader'
import {  listMyOrders } from '../actions/orderActions'

const OrderListScreen = ({ history }) => {
    const dispatch = useDispatch()
    
    const orderListMy = useSelector((state) => state.orderListMy)
    const { loading, error, orders } = orderListMy


  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
 
  useEffect(() => {
    if(userInfo){
      dispatch(listMyOrders())
    }else{
      window.location ='/'
    } 
  },[userInfo, dispatch])
    return loading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error}</Message>
    ) : (
        <>
         <h1>Sales Orders</h1>
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>DocEntry</th>
              <th>DocNum</th>
              <th>DocDate</th>
              <th>DocumentStatus</th>
              <th>NumAtCard</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.value === undefined ? "" : orders.value.map((order) => (
              <tr key={order.DocEntry}>
                
                <td>{order.DocEntry}</td>
                <td>{order.DocNum}</td>
                <td>{order.DocDate}</td>
                <td>{order.DocumentStatus}</td> 
                <td>{order.CardName}</td>
               
                <td>
                  <LinkContainer to={`/order/${order.DocEntry}`}>
                    <Button bsPrefix='btn btn-info btn-bold px-4 float-right mt-3 mt-lg-0' variant='light' className='btn-sm'>
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
          
        </>
    )
}

export default OrderListScreen
