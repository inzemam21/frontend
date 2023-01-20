import React, { useEffect, useState } from 'react'
import {  useSelector, useDispatch } from 'react-redux'
import {Col, Row, Table,Container, Button,Modal, Form} from 'react-bootstrap'
import SelectBatches from './SelectBatches';
import { batchDetailAction } from '../actions/deiveryActions';
import Loader from '../Loader';

const EditOrderItemScreen = () => {
    const [show, setShow] = useState(false);

    const dispatch = useDispatch()
    const [batchDetai, setBatchDetai] = useState([])


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const batchDetails = useSelector((state) => state.batchDetails)
  const { batchDetail, loading: load } = batchDetails

    const lineItems = useSelector((state) => state.lineItems)
    const { LineItem } = lineItems

    const orderDetails = useSelector((state) => state.orderDetails)
  const { orderInfo:order, loading, error } = orderDetails
  
    console.log(order.DocumentLines)
    const [batch, setBatch] = useState([])

    order.DocumentLines.forEach((it, i) => {
      it.BatchNumbers = batch


 })
    localStorage.setItem('orderInfo', JSON.stringify(order))

    function handleClick(item){
      //let BatchNum = item.BatchNum
      //let Quantity = item.Quantity
      let obj = {
        BatchNumber: item.BatchNum,
        Quantity: Number(item.Quantity) 
      }
      
      console.log(obj)
        setBatch([...batch,obj])
        handleClose()
        //window.location = 'delivery/:id'
    }
    var quann = batch.reduce((prev, cur) => (prev + cur.Quantity), 0) 
console.log(quann)
    useEffect(() => { 
      //dispatch(batchDetailAction())
      setBatchDetai(batchDetail)
      
    },[dispatch,order])

    return load ? ( <Loader />) : (
      
        <Container fluid>
            <h1>Edit Line Num</h1>
            <Row>
            <Col md={6}>
            <h2>itemcode: {LineItem.ItemCode}</h2>
            <h2>Item Name: {LineItem.ItemDescription}</h2>
            </Col>
            <Col md={6}>
            <h2> Type: {LineItem.BaseType}</h2>
             <Row >
             <h2> WareHouse Code: {LineItem.Quantity}</h2>
             <h2 style={{paddingLeft: "12%"}}> Qty:{  } </h2>
             </Row>
            </Col>
            
            </Row>
            <Button variant="primary" onClick={handleShow}>
            Select Batch
      </Button>
      <Col>
        <h2>seLected Batch</h2>
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>Batch</th>
              <th>Quantity</th>
              <th>SelectedQuantity</th>
              <th></th>
            </tr>
          </thead>
          
            
          {batch.map(it=> {return(
            
              <SelectBatches key={Math.random()} it={it} batchDetai={batchDetai} />
             
          )
      })}
      
          </Table>
        
        
      </Col>
          
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Batches</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h3>Batch Quantity</h3>
            <Table  bordered className='table-sm' style={{backgroundColor: 'white', fontFamily: 'verdana', marginTop: '15px'}} >
            <thead>
            <tr >
              <th style={{border:'1px solid black'}}>Batch</th>
              <th style={{border:'1px solid black'}}>Quantity</th>
              <th style={{border:'1px solid black'}}>Selected Qtuantity</th>
            </tr>
          </thead>
          <tbody>
           
             
              { 
               batchDetai.map(item => {
                  return (
                      <tr onClick={() => handleClick(item)} style={{backgroundColor: 'blanchedalmond'}}>
                    <td>{item.BatchNum}</td>
                    <td>{item.Quantity}</td>
                    <td>
                      {/* <Form.Control style={{width:'30%'}}
                            type='text'
                            placeholder='Enter Quantity'
                            value={item.Quantity}
                            onChange={(e) => setBatchDetai( e.target.value)}
                                         /> */}

                     
                      </td>
                    </tr>
                  )
                  })
                }
            
          </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </Container>

    
    )
}

export default EditOrderItemScreen
