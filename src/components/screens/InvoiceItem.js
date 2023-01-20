import React, {useState, useEffect} from 'react'
import {  Col, Row, FormControl } from 'react-bootstrap'
import ItemCodeModal from '../ItemCodeModal'
import { useDispatch, useSelector } from 'react-redux'
import { getItemDetails } from '../actions/itemsActions'
import FormContainer from '../FormContainer'

const InvoiceItem = (props) => {

    const {onInputChange, handleInvoiceDelete ,  DocumentLines} = props
    const { ItemCode,
    UnitPrice,
    Quantity,
    TaxCode} = props
    const dispatch = useDispatch()
    const itemDetails = useSelector((state) => state.itemDetails)
     const { itemCode } = itemDetails
     console.log(itemCode)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)
    const [show, setShow] = useState(false);
    function handleChange(changes) {
        
        onInputChange(TaxCode ,{...DocumentLines, ...changes})
    }
    
    useEffect(() => {
      dispatch(getItemDetails())
    },[])
    return (
     <>
        <Row md={4} style={{padding: '15px'}}>
         <Col>
             <FormControl
     
            type='text'
            placeholder='ItemCode'
            onInput={e => handleChange({ItemCode: e.target.value})} value={ItemCode}
            onClick={handleShow}
           />
            </Col>
            <Col>
            <FormControl
        
            type='text'
            placeholder='UnitPrice'
            onInput={e => handleChange({UnitPrice: e.target.value})} value={UnitPrice }
           /> 
           </Col>
           <Col>
<FormControl
        
            type='number'
            placeholder='Quantity'
            onInput={e => handleChange({Quantity: e.target.value})} value={Quantity}
           /> 
           </Col>
           <Col>
<FormControl
         
            type='text'
            placeholder='TaxCode'
            onInput={e => handleChange({TaxCode: e.target.value})} value={TaxCode}
           /> 
          </Col>
          
        </Row>
        <ItemCodeModal handleChange={handleChange} DocumentLines={DocumentLines}  ItemCode={ItemCode} itemCode={itemCode} show={show} handleClose={handleClose}/>

        
  </>
    )
}

export default InvoiceItem
