import React, { useEffect } from 'react'
import { Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderDetails } from '../actions/orderActions'
import Message from '../Message'
import './invoice.css';
import Loader from '../Loader'
import { useState } from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { getLineItems } from '../actions/docActions'
import '../../bootstrap.min.css'

const OrderDetailsScreen = ({match, history}) => {
   const DoctEntry = match.params.id
   const [DocumentNum, setDocumentNum] = useState([])

   
   const dispatch = useDispatch()

   const orderDetails = useSelector((state) => state.orderDetails)
  const { orderInfo, loading, error } = orderDetails

  
 function handleLineItem(item){
     let LineItem = Object.values(item)
    setDocumentNum(LineItem)
    dispatch(getLineItems(LineItem))
    //history.push(`/order/lineitem/${LineItem[0]}`)

     

 }

  useEffect(() => {
     
        dispatch(getOrderDetails(DoctEntry)) 
    
  },[dispatch,DoctEntry])

    return loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) :(
        <>
<div class="page-content container">
    <div class="page-header text-blue-d2">
        <h1 class="page-title text-secondary-d1">
            Sale Order
            <small class="page-info">
                <i class="fa fa-angle-double-right text-80"></i>
                ID: {orderInfo.DocEntry}
            </small>
        </h1>

        <div class="page-tools">
            <div class="action-buttons">
                <a class="btn bg-white btn-light mx-1px text-95" href="#" data-title="Print">
                    <i class="mr-1 fa fa-print text-primary-m1 text-120 w-2"></i>
                    Print
                </a>
                <a class="btn bg-white btn-light mx-1px text-95" href="#" data-title="PDF">
                    <i class="mr-1 fa fa-file-pdf-o text-danger-m1 text-120 w-2"></i>
                    Export
                </a>
            </div>
        </div>
    </div>

    <div className="container px-0">
        <div className="row mt-4">
            <div className="col-12 col-lg-10 offset-lg-1">

                <hr className="row brc-default-l1 mx-n1 mb-4" />

                <div className="row">
                    <div className="col-sm-6">
                        <div>
                            <span className="text-sm text-grey-m2 align-middle">To:</span>
                            <span className="text-600 text-110 text-blue align-middle">{orderInfo.CardName}</span>
                        </div>
                        <div className="text-grey-m2">
                            <div className="my-1">
                                Street, City {orderInfo.ShipToDescription}
                            </div>
                            <div className="my-1">
                                State, Country
                            </div>
                            <div className="my-1"><i className="fa fa-phone fa-flip-horizontal text-secondary"></i> <b class="text-600">111-111-111</b></div>
                        </div>
                    </div>

                    <div className="text-95 col-sm-6 align-self-start d-sm-flex justify-content-end">
                        <hr className="d-sm-none" />
                        <div className="text-grey-m2">
                            <div className="mt-1 mb-2 text-secondary-m1 text-600 text-125">
                                Sale Order
                            </div>

                            <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">ID:</span> #111-222</div>

                            <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Issue Date:</span> {orderInfo.CreationDate}</div>

                            <div className="my-2"><i className="fa fa-circle text-blue-m2 text-xs mr-1"></i> <span class="text-600 text-90">Status:</span> <span class="badge backgroud badge-warning badge-pill px-25">{orderInfo.DocumentStatus ==='bost_Close' ? 'Closed' : 'Open'}</span></div>
                        </div>
                    </div>
                 
                </div>
                <div class="table-responsive">
                <table class="table table-striped table-borderless border-0 border-b-2 brc-default-l1">
                    <thead class="bg-none bgc-default-tp1">
                        <tr class="text-white">
                            <th class="opacity-2">#</th>
                            <th>Item Code</th>
                            <th>Description</th>
                            <th>Qty</th>
                            <th>Unit Price</th>
                            <th width="140">Amount</th>
                            <th >Details</th>
                        </tr>
                    </thead>

                    <tbody class="text-95 text-secondary-d3">
                    {orderInfo.DocumentLines.map((item, index) => (
                       
                        <React.Fragment key={index} >
                        <tr></tr>
                        <tr onClick={() => handleLineItem(item)} className='ghug' >
                            <td>{item.LineNum}</td>
                            <td>{item.ItemCode}</td>
                            <td>{item.ItemDescription}</td>
                            <td class="text-95">{item.Quantity}</td>
                            <td class="text-secondary-d2">$ {item.Price}</td>
                            <td class="text-secondary-d2">$ {item.Quantity * item.Price}</td>
                            <td>
                     <LinkContainer to={`/lineitem/${item.LineNum}`}>
                    <Button variant='light' className='btn-sm'>
                      Details
                    </Button>
                  </LinkContainer>
                </td>          
                        </tr> 
                        </React.Fragment>    
                    ))}
                    </tbody>
                </table>
            </div>
                    <div class="text-95 text-secondary-d3">
                    <div class="row border-b-2 brc-default-l2"></div>
                    <div class="row mt-3">
                        <div class="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
                            Extra note such as company or payment information...
                        </div>
                        <div class="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
                            <div class="row my-2">
                                <div class="col-7 text-right">
                                    SubTotal
                                </div>
                                <div class="col-5">
                                    <span class="text-120 text-secondary-d1">$ {orderInfo.DocTotal - orderInfo.VatSum}</span>
                                </div>
                            </div>
                            <div class="row my-2">
                                <div class="col-7 text-right">
                                    Tax 
                                </div>
                                <div class="col-5">
                                    <span class="text-110 text-secondary-d1">$ {orderInfo.VatSum}</span>
                                </div>
                            </div>
                            <div class="row my-2 align-items-center bgc-primary-l3 p-2">
                                <div class="col-7 text-right">
                                    Total Amount
                                </div>
                                <div class="col-5">
                                    <span class="text-150 text-success-d3 opacity-2">{orderInfo.DocTotal}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <span class="text-secondary-d1 text-105">Thank you for your business</span>
                        <LinkContainer to={`/delivery/${DoctEntry}`}>
                        <Button  bsPrefix="btn btn-info btn-bold px-4 float-right mt-3 mt-lg-0">Delivery Order</Button>
                        </LinkContainer>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>    
    </>
    )
}

export default OrderDetailsScreen
