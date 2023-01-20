import React, { useEffect } from 'react'

import { Card, Col, ListGroup, Row } from 'react-bootstrap'
import {  useSelector } from 'react-redux'
import LineCharts from './LineCharts'

const LineItemScreen = ({match}) => {
    // const idd = match.params.id
    // const dispatch = useDispatch()

    const lineItems = useSelector((state) => state.lineItems)
  const { LineItem } = lineItems

  useEffect(() => {
     
  },[])

  console.log(LineItem)
    return (
        <>
      <h1>Line Item {LineItem[0]}</h1>
      <ListGroup.Item className='itemcode'>
              <h3>
                <strong>Item Code: </strong> {LineItem[1]}
              </h3>
              <h3>
                <strong>Item Name: </strong>{' '} {LineItem[2]}
                
              </h3>
            </ListGroup.Item>
      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
          <ListGroup.Item className='itemcode'>
              <h2>Warehouse & Stocks</h2>
              <p>
                <strong>Warehouse: </strong> {LineItem[12]}
              </p>
              <p>
                <strong>In Stock Quantity: </strong>{' '} 56
                
              </p>
              <p>
                <strong>Commited Quantity:</strong>
                 455
              </p>
              <p>
                <strong>Planned Quantity:</strong>
                 766
              </p>
              
            </ListGroup.Item>
            <ListGroup.Item className='itemcode'>
              <h2>Shipping</h2>
              
              <p>
                <strong>Address:</strong>
                 {LineItem[199]}
                
              </p>
              <p>
                <strong>WareHouse Code:</strong>
                 {LineItem[12]}
              </p>
            </ListGroup.Item>

            {/* <ListGroup.Item>
              <h2>Payment Method</h2>
             
                <strong>Method: </strong>
                
            </ListGroup.Item> */}
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush' >
              <ListGroup.Item className='itemcode'>
                <h2>UOM & Price</h2>
              </ListGroup.Item>
              <ListGroup.Item className='itemcode'>
                <Row>
                  <Col>UOM Code</Col>
                  <Col>{LineItem[171]}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className='itemcode'>
                <Row>
                  <Col>Item Per Unit</Col>
                  <Col>434.5</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className='itemcode'>
                <Row>
                  <Col>Price</Col>
                  <Col>$ {LineItem[5]}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className='itemcode'>
                <Row>
                  <Col>Discount</Col>
                  <Col>$ 567.76</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className='itemcode'>
                <Row>
                  <Col>Price After Discount</Col>
                  <Col>$ 435.77</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className='itemcode'>
                <Row>
                  <Col>Line Total</Col>
                  <Col>$ {LineItem[129]}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className='itemcode'>
                <Row>
                  <Col>Tax Code</Col>
                  <Col>{LineItem[49]} 987</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className='itemcode'>
                <Row>
                  <Col>Tax Amount</Col>
                  <Col>{LineItem[81]}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item  className='itemcode'>
                <Row>
                  <Col>Gross Total</Col>
                  <Col>$ {LineItem[190]}</Col>
                </Row>
              </ListGroup.Item>
              

            </ListGroup>
          </Card>
        </Col>
      </Row>
      <LineCharts />
    </>
    )
}



export default LineItemScreen
