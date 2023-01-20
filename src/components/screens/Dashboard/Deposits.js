import * as React from 'react';
import Title from './Title';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Button } from '@mui/material';
import { LinkContainer } from 'react-router-bootstrap';


export default function Deposits() {
  return (
    <React.Fragment sx={{
      alignItems: 'center',
      justifyContent: 'center',
      alignContent: 'center',
      width: '50%',
      height: '50%',
    }} > 
      <Title>Create Sales Order</Title>
      
      <LinkContainer to={`/createorder`}>
        <Button>
          <AddCircleOutlineIcon fontSize="large" />
          </Button>
          </LinkContainer>
        
    </React.Fragment>
  );
}