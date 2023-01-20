import React, {useState} from 'react'
import { Form } from 'react-bootstrap'

const SelectBatches = ({it, batchDetai}) => {
let quan = batchDetai.map(i => i.Quantity)
 const [quantity, setQuantity] = useState( quan)
 //console.log(quantity)
 let filteredQty = (quantity.filter(i => i == it.Quantity))
 
  const [selectedQty, setSelectedQty] = useState('1')
    return (
        <>
          <tbody>
          <tr >
                
                <td>{it.BatchNum}</td>
                <td>{it.Quantity}</td>
                <td><Form.Control
        style={{width:'30%'}}
        type='text'
        placeholder='Enter Quantity'
        value={selectedQty > filteredQty[0] ? filteredQty[0] : it.Quantity = selectedQty}
        onChange={(e) => setSelectedQty(e.target.value)}
       /></td>
                </tr>
          </tbody>
         
       
        </>
    )
}

export default SelectBatches
