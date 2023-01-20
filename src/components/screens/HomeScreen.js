import React, { useEffect} from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {  Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Meta from '../Meta'
import { listMyOrders } from '../actions/orderActions'
import Barcharts from './Barcharts'

const HomeScreen = ({ match }) => {

  const SaleOrder = 762
  const OpenDocument = 67
  const ClosesDocument = 456
  const dispatch = useDispatch()

    const orderListMy = useSelector((state) => state.orderListMy)
    const { loading, error, orders, dashboardData } = orderListMy
   
console.log(dashboardData)
  useEffect(() => {
    dispatch(listMyOrders())
  }, [dispatch])
  return (
    <>
     <Meta />
    
      <h1>Welcome to Sap Business One </h1>
      
      <Row style={{margin: '20px', alignItems: 'center', justifyContent:'center'}}>
        <div style={{display: 'flex'}}>
          <Link to='/ordersale'>
      <Card className='card-group ' >
  <Card.Body>
    <Card.Title style={{textAlign:'center', fontSize:'18px',fontFamily:'verdana',color: 'blue', borderBottom: '1px solid darkgrey'}}>Sales Orders</Card.Title>
    <Card.Text style={{textAlign:'center', color: 'black', fontWeight: 'bolder',fontSize:'18px', borderColor:'none' }}>
      {SaleOrder}
    </Card.Text>
  </Card.Body>
  
</Card>
</Link>
<Card className='card-group' style={{ width: '18rem',  backgroundColor: 'white' }}>
  <Card.Body>
    <Card.Title style={{textAlign:'center', fontSize:'18px',fontFamily:'verdana',color: 'blue', borderBottom: '1px solid darkgrey'}}>Open Orders</Card.Title>
    <Card.Text style={{textAlign:'center', color: 'black', fontWeight: 'bolder',fontSize:'18px', borderColor:'none' }}>
      {OpenDocument}
    </Card.Text>
  </Card.Body>
  
</Card>
<Card className='card-group' style={{ width: '18rem',  backgroundColor: 'white' }}>
  <Card.Body>
    <Card.Title style={{textAlign:'center', fontSize:'18px',fontFamily:'verdana',color: 'blue', borderBottom: '1px solid darkgrey'}}>Closed Orders</Card.Title>
    <Card.Text style={{textAlign:'center', color: 'black', fontWeight: 'bolder',fontSize:'18px', borderColor:'none' }}>
      {ClosesDocument}
    </Card.Text>
  </Card.Body>
  
</Card>
</div>

</Row>
<Barcharts />
    </>
  )
}

export default HomeScreen
