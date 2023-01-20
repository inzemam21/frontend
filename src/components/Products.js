import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Products = ({product }) => {
    return (
        <Card border="light-grey" className="my-3 p-3 box-shadow-hover">
            <Link to={`product/${product._id}`}>
               <Card.Img src={product.image} variant='top' />
            </Link>

            <Card.Body>
            <Link to={`product/${product._id}`}>
               <Card.Title as="div">
                  <bold>{product.name}</bold>
               </Card.Title>
            </Link>

            <Card.Text as="div">
                      <Rating 
                      value={product.rating} 
                      text={`${product.numReviews} reviews`}
                      />
            </Card.Text>
             <Card.Text as="h3">Pkr {product.price}</Card.Text>

            </Card.Body>
        </Card>
    )
}

export default Products
