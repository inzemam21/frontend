import React, {useState} from 'react'
import { Modal, Card, Button, Row } from 'react-bootstrap'

const ItemCodeModal = ({handleClose, show, itemCode, handleChange, ItemCode}) => {
  const [filter, setFilter] = useState('')

  let filteredData = itemCode.filter(item =>{ 
    return Object.keys(item).some(key =>
      item[key].toLowerCase().includes(filter.toLowerCase())
    )
  })
  function cardCodeSelect(card){
    handleChange({ItemCode: card}) 
    handleClose(true)
  }
    return (
        <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Items</Modal.Title>
        </Modal.Header>
        
        <Modal.Body>
          <input  value={filter} onChange={(e) => setFilter(e.target.value)}/>
          <Row>
          <h5 style={{margin: '10px',paddingLeft:'10%', color: 'blue', fontWeight: 'bolder'}}>Item Code</h5>
          <h5 style={{margin: '10px',paddingLeft:'10%', color: 'blue', fontWeight: 'bolder'}}>Item Name</h5>
          </Row>
          {filteredData.map(card => {
            return (
            <div>
              <Card onClick={() => cardCodeSelect(card.ItemCode) } className='cardd'>
              <Row>
                
            <p style={{margin: '10px',paddingLeft:'10%', color: 'black'}} >{card.ItemCode}</p>
            <p style={{margin: '10px',paddingLeft:'15%', color: 'black'}}>{card.ItemName}</p>
            
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
    )
}

export default ItemCodeModal
