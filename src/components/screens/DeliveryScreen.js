import React, { useEffect, useState } from 'react'
import { Col, Form, Row,Modal,Card,Button, Container, Table, FormControl } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderDetails } from '../actions/orderActions'
import { batchDetailAction, createDelivery } from '../actions/deiveryActions'
import Loader from '../Loader'
import SaleOrderItem from './SaleOrderItem'
import Message from '../Message'

const DeliveryScreen = ({match}) => {
  
    var today = new Date().toISOString().slice(0, 10)
    

    const idd = match.params.id
    const dispatch = useDispatch()

   const orderDetails = useSelector((state) => state.orderDetails)
  const { orderInfo: order , loading, error } = orderDetails

  const deliveryCreate = useSelector((state) => state.deliveryCreate)
  const { order: ordr, loading:loadd } = deliveryCreate

  

 
  const [name,setName] = useState('')
 // const [saleOrder, setsaleOrder] = useState(orderr)
  
  const [CardCode, setCardCode] = useState('')
  const [DocDate, setDocDate] = useState(`${today}`)
  const [DocDueDate, setDocDueDate] = useState(`${today}`)

  
    const [DocumentLines, setDocumentLines] =  useState()

    const onInputChange = (TaxCode,invoicee) => {
      const newInvioces = [...DocumentLines]
      const index = newInvioces.findIndex(r => r.TaxCode === TaxCode)
      newInvioces[index] = invoicee
      setDocumentLines(newInvioces)
      localStorage.setItem('orderInfo', JSON.stringify(order))
      };
 
      function handleInvoiceDelete(ItemCode){
         setDocumentLines(DocumentLines.filter(invoice => invoice.ItemCode !== ItemCode ))
       }
      const submitHandler = (e) => {
        e.preventDefault()
       
          dispatch(createDelivery(order.CardCode,order.DocDate, order.DocDueDate,DocumentLines))
          // setCardCode('') 
          // setDocumentLines([])
      }

    


  useEffect(() => {
    // setsaleOrder(order)
    dispatch(batchDetailAction()) 
    const ordd = localStorage.getItem('orderInfo')
        if(!ordd || idd !== order.DocEntry){
        dispatch(getOrderDetails(idd))
        
       }
       setDocumentLines(order.DocumentLines)
  }, [dispatch,idd])

  

   
    return loading ? (
      <Loader />
    ) : error ? (
      <Message variant='danger'>{error}</Message>
    ) : (
        <Container>
          <h2>Delivery Screen</h2>
            
          <h3>{order?.DocEntry ?? ''}</h3>
          <h3>{order?.DocumentStatus ?? ''}</h3>
          <Form onSubmit={submitHandler} >
         <Col md={12} >
          <Row style={{alignItems: "center",justifyItems: "center"}}>
              <Form.Label  style={{marginRight: '6.1%'}} >Customer</Form.Label>
              <Form.Control
          style={{width:'30%'}}
            type='text'
            placeholder='Enter CardCode'
            value={order?.CardCode ?? ''}
            onChange={(e) => setCardCode(order.CardCode)}
           />
                    
              <Form.Label style={{marginRight: '8.9%',paddingLeft:'8%'}}>Posting Date</Form.Label>
              <Form.Control
          style={{width:'30%'}}
            type='text'
            placeholder='Enter DocDate'
            value={DocDate}
            onChange={(e) => setDocDate(e.target.value)}
           />
              </Row>
              <Row style={{alignItems: "center",justifyItems: "center"}}>
          <Form.Label style={{marginRight: '8.5%'}}>Name</Form.Label>
          <Form.Control
          style={{width:'30%'}}
            type='text'
            placeholder='Name'
            value={order?.CardName ?? ''}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
       
          
          <Form.Label style={{marginRight: '8.4%',paddingLeft:'8%'}}>Delivery Date</Form.Label>
          <Form.Control
      style={{width:'30%'}}
        type='text'
        placeholder='Enter CardCode'
        value={DocDueDate}
        onChange={(e) => setDocDueDate(e.target.value)}
       />
             </Row> 
             <Row style={{alignItems: "center",justifyItems: "center"}}> 
          <Form.Label style={{marginRight: '2.5%'}}>Contact Person</Form.Label>
          <Form.Control
      style={{width:'30%'}}
        type='text'
        placeholder='Enter DocDate'
        value={order?.CardName ?? ''}
        onChange={(e) => setName(e.target.value)}
       />
          
      <Form.Label style={{marginRight: '7.2%',paddingLeft:'8%' }}>Document Date</Form.Label>
      <Form.Control
      style={{width:'30%'}}
        type='text'
        placeholder='Enter Document Date'
        value={DocDueDate}
        onChange={(e) => setDocDate(e.target.value)}
      ></Form.Control>

</Row> 

          </Col>
        
      </Form>
      <Table bordered className='table-sm' style={{backgroundColor: 'white', fontFamily: 'verdana', marginTop: '15px'}} >
            <thead>
            <tr  >
              <th style={{border:'1px solid black'}}>Item Code</th>
              <th style={{border:'1px solid black'}}>Unit Price</th>
              <th style={{border:'1px solid black'}}>Quantity</th>
              <th style={{border:'1px solid black'}}>Tax Code</th>
              <th style={{border:'1px solid black'}}>Edit</th>
              <th style={{border:'1px solid black'}}>Delete</th>
            </tr>
          </thead>
          </Table>
          {DocumentLines === undefined ? "" : DocumentLines.map((DocumentLines, i) => {
            return (
              <>   
              <SaleOrderItem key={DocumentLines.ItemCode}  DocumentLines={DocumentLines} order={order} handleInvoiceDelete={handleInvoiceDelete}  onInputChange={onInputChange} {...DocumentLines} />
              </>
            )
          })}

{/* <i  className='fa fa-plus fa-lg' style={{marginLeft: '105%',Color: 'green'}}  onClick={handleInvoiceAdd} >
            </i> */}
            
            <Button type='submit' onClick={submitHandler} variant='primary' style={{marginTop: '75px', marginLeft: '105%'}}>
          Create Delivery Order
        </Button>
        </Container>
        
    )
}


export default DeliveryScreen
