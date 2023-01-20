import React, {useState, useEffect} from 'react'
import {  Col, Row, FormControl, Button } from 'react-bootstrap'
import ItemCodeModal from '../ItemCodeModal'
import { useDispatch, useSelector } from 'react-redux'
import { getItemDetails } from '../actions/itemsActions'
import FormContainer from '../FormContainer'
import { LinkContainer } from 'react-router-bootstrap'
import { getLineItems } from '../actions/docActions'

const SaleOrderItem = (props) => {
    const {onInputChange, handleInvoiceDelete ,  DocumentLines, order} = props
    
   
    const { ItemCode,
     
         BaseEntry  ,
    Price,
    RemainingOpenQuantity,
    Quantity ,
    RemainingOpenInventoryQuantity,
    //  RemainingOpenQuantity,
    TaxCode} = props

    DocumentLines.BaseEntry = order.DocEntry
    DocumentLines.BaseType = 17
    DocumentLines.BaseLine = 0
    let line = DocumentLines.LineNum 
    

    let Base = RemainingOpenInventoryQuantity

    const dispatch = useDispatch()
    function handleChange(changes) {
        
        onInputChange(TaxCode ,{...DocumentLines, ...changes})

       
    }

    function handleLineItem(item){
       // let LineItem = Object.values(item)
       
       dispatch(getLineItems(item))
      localStorage.setItem('orderInfo', JSON.stringify(order))
       //history.push(`/order/lineitem/${LineItem[0]}`) 
   
    }
    
    
    return (
     <>
        <Row  style={{padding: '10px'}} key={ItemCode}>
         <Col >
             <FormControl
              
            type='text'
            placeholder='ItemCode'
            onInput={e => handleChange({ItemCode: e.target.value})} value={ItemCode}
          
           />
            </Col>
            <Col style={{paddingLeft: '8%'}}>
            <FormControl
        
            type='text'
            placeholder='UnitPrice'
            onInput={e => handleChange({Price: e.target.value})} value={Price}
           /> 
           </Col>
           <Col style={{paddingLeft: '8%'}}>
<FormControl
        
            type='number'
            placeholder='Quantity'
            onInput={e => handleChange({Quantity: e.target.value})} value={Quantity }
           /> 
           </Col>
           <Col style={{paddingLeft: '8%'}}>
<FormControl
         
            type='text'
            placeholder='TaxCode'
            onInput={e => handleChange({TaxCode: e.target.value})} value={TaxCode}
           /> 
          </Col>
          <Col style={{paddingLeft: '5%'}}>
          <LinkContainer to={`/editorderitem/${line}`}>
          <Button type='submit' onClick={() => handleLineItem(DocumentLines)}  variant='danger' >
          Edit
        </Button> 
        </LinkContainer>
          </Col>
          <Col>
          
          <Button type='submit' onClick={() => handleInvoiceDelete(ItemCode)} variant='primary' >
          Delete
        </Button> 
        
          </Col>
          
        </Row>

        
  </>
           
    )

}

export default SaleOrderItem