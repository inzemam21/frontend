import React, {useEffect, useState} from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Table, Button, Col, Row, Form,ListGroup,FormControl, Modal, Card, Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Message'
import Loader from '../Loader'
import InvoiceItem from './InvoiceItem'
import { createOrder } from '../actions/orderActions'
import { getUserDetails } from '../actions/userActions'
import { Link } from 'react-router-dom'
import ItemCodeModal from '../ItemCodeModal'


const CreateSaleOrderScreen = ({ history }) => {
  var today = new Date().toISOString().slice(0, 10)
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

  const [name, setName] = useState('')
  //const [contactPerson, setcontactPerson] = useState('')
  const [CardCode, setCardCode] = useState('')
  const [DocDate, setDocDate] = useState(`${today}`)
  const [DocDueDate, setDocDueDate] = useState(`${today}`)
  const [fiilter, setFilter] = useState('')

    const [DocumentLines, setDocumentLines] = useState([])

    const dispatch = useDispatch()
    const orderCreate = useSelector((state) => state.orderCreate)
     const { order,success,  error } = orderCreate
     const userDetails = useSelector((state) => state.userDetails)
     const { loading, businessPartners } = userDetails
    function handleInvoiceAdd() {
      const newItem ={
        ItemCode: '',
        UnitPrice: 0.00 ,
        Quantity: 0,
        TaxCode: `${Math.random()}`,
      }
      setDocumentLines([ ...DocumentLines, newItem])
    }

    const onInputChange = (TaxCode,invoicee) => {
      const newInvioces = [...DocumentLines]
      const index = newInvioces.findIndex(r => r.TaxCode === TaxCode)
      newInvioces[index] = invoicee
      setDocumentLines(newInvioces)
      };
 
      function handleInvoiceDelete(id){
         setDocumentLines(DocumentLines.filter(invoice => invoice.id !== id))
       }
      const submitHandler = (e) => {
        e.preventDefault()
          dispatch(createOrder(CardCode,DocDate, DocDueDate,DocumentLines))
          setCardCode('') 
          setDocumentLines([])
      }
      function cardCodeSelect(card){
        setCardCode(card.CardCode)
        setName(card.CardName)
        handleClose(true)
      }

    let filteredData = businessPartners.filter(item =>{ 
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(fiilter.toLowerCase())
      );

    });

  useEffect(() => {
    dispatch(getUserDetails())
    
   }, [dispatch])
    return (
        <Container>
         <h2>Create Sales Orders</h2>
         {error && <Message>{error}</Message>}
         {success &&  <Message variant='success'>{success}</Message>}
         <Form onSubmit={submitHandler} >
         <Col md={12} >
          <Row style={{alignItems: "center",justifyItems: "center"}}>
              <Form.Label  style={{marginRight: '6.1%'}} >Customer</Form.Label>
              <Form.Control
          style={{width:'30%'}}
            type='text'
            placeholder='Enter CardCode'
            value={CardCode}
            onChange={(e) => setCardCode(e.target.value)}
            onClick={handleShow}
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
            value={name}
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
        value={name}
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
     
          <Modal show={show} onHide={handleClose} animation={true}>
<Modal.Header closeButton>
  <Modal.Title>Business Partners</Modal.Title>
</Modal.Header>

<Modal.Body>
  <input  value={fiilter} onChange={(e) => setFilter(e.target.value)}/>
  <Row>
  <h5 style={{margin: '10px',paddingLeft:'10%', color: 'blue', fontWeight: 'bolder'}}>B.P Code</h5>
  <h5 style={{margin: '10px',paddingLeft:'10%', color: 'blue', fontWeight: 'bolder'}}>B.P Name</h5>
  </Row>
  {filteredData.map(card => {
    return (
    <div>
      <Card onClick={() => cardCodeSelect(card)} className='cardd'>
      <Row>
        
    <p style={{margin: '10px',paddingLeft:'10%', color:'black'}} >{card.CardCode}</p>
    <p style={{margin: '10px',paddingLeft:'15%', color:'black'}}>{card.CardName}</p>
    
    </Row>
    </Card>
    </div>
  )
 
}) }
 </Modal.Body>

<Modal.Footer>
  <Button variant="secondary" onClick={handleClose} >
    Close
  </Button>
</Modal.Footer>
</Modal>
        
      </Form>
      <Table bordered className='table-md' style={{backgroundColor: 'white', fontFamily: 'verdana', marginTop: '10px'}} >
            <thead>
            <tr >
              <th style={{border:'1px solid black'}}>Item Code</th>
              <th style={{border:'1px solid black'}}>Unit Price</th>
              <th style={{border:'1px solid black'}}>Quantity</th>
              <th style={{border:'1px solid black'}}>Tax Code</th>
            </tr>
          </thead>
          </Table>

      {DocumentLines.map((DocumentLines, i) => {
          return (
            <>
           
            <InvoiceItem key={DocumentLines[i]} DocumentLines={DocumentLines} handleInvoiceDelete={handleInvoiceDelete} onInputChange={onInputChange} {...DocumentLines} />
            </>
          )
        })}
         
         <i  className='fa fa-plus fa-lg' style={{marginLeft: '105%',Color: 'green'}}  onClick={handleInvoiceAdd} >
            </i> 
            <Button type='submit' onClick={submitHandler} variant='primary' style={{marginTop: '75px', marginLeft: '105%'}}>
          Create Sale Order
        </Button>
            
            </Container>
    )
}

export default CreateSaleOrderScreen
