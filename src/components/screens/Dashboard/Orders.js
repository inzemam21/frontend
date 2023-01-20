import React, {useEffect} from 'react'
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { useDispatch, useSelector } from 'react-redux'
import {  listMyOrders } from '../../actions/orderActions'
import Loader from '../../Loader';
import { Button, Chip } from '@mui/material';
import { LinkContainer } from 'react-router-bootstrap';

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const dispatch = useDispatch()
    
    const orderListMy = useSelector((state) => state.orderListMy)
    const { loading, error, orders } = orderListMy


  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
 
  useEffect(() => {
    if(userInfo){
      dispatch(listMyOrders())
    }if(!userInfo){
      
    } 
  },[userInfo, dispatch])

  return loading ? (
    <Loader />
  ) :  (
    <React.Fragment>
      <Title>Sales Orders</Title>
      
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Doc Num</TableCell>
            <TableCell>Doc Date</TableCell>
            <TableCell>Document Status</TableCell>
            <TableCell>NumAtCard</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.value === undefined ? "" : orders.value.map((order) => (
            <TableRow key={order.DocEntry}>
              <TableCell>{order.DocNum}</TableCell>
              <TableCell>{order.DocDate}</TableCell>
              <TableCell>{order.DocumentStatus === 'bost_Close' ? <Chip label="CLOSED" color="error" clickable />
                   : <Chip label="OPEN" color="success" clickable />}</TableCell>
              <TableCell>{order.CardName}</TableCell>
              <TableCell align="right"> 
              <LinkContainer to={`/order/${order.DocEntry}`}>
                     <Button bsPrefix='btn btn-info btn-bold px-4 float-right mt-3 mt-lg-0' variant='light' className='btn-sm'>
                      Details
                    </Button>
                    </LinkContainer>
                    </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}