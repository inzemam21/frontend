import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Message'
import Loader from '../Loader'
import FormContainer from '../FormContainer'
import { sapLLogin } from '../actions/userActions'

const SapLogin = ({ location, history }) => {
  const [companyDb, setCompanyDB] = useState('')
  const [Password, setPassword] = useState('')
  const [userName, setUserName] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
      dispatch(sapLLogin(companyDb, Password, userName))
      console.log(companyDb, Password, userName)

  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='email'>
          <Form.Label>companyDb</Form.Label>
          <Form.Control
            type='text'
            placeholder='companyDb'
            value={companyDb}
            onChange={(e) => setCompanyDB(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='password'>
          <Form.Label>Password Address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter password'
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="userName" >
          <Form.Label>UserName</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter userName'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          >
            
          </Form.Control>
        </Form.Group>

        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>
    </FormContainer>
  )
}

export default SapLogin