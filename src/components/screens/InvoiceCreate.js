import { Card, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function InvoiceCreate() {
  return (
    <> 
    <Card>
    <Grid  container containerdirection="row" justifyContent="space-evenly" alignItems="center">   
<TextField
              margin="normal"
              required
              id="Customer"
              label="Select Customer"
              name="Customer"
              autoComplete="Customer"
              autoFocus
            />     
        
<TextField
              margin="normal"
              required   
              id="PostingDate"
              label="Posting Date"
              name="Posting Date"
              autoComplete="PostingDate"
              autoFocus
            />

  </Grid>
   
  
  <Grid  container containerdirection="row" justifyContent="space-evenly" alignItems="center" >
  <TextField
              margin="normal"
              required   
              id="Name"
              label="Name"
              name="Name"
              autoComplete="Name"
              autoFocus
            />
   
   <TextField
              margin="normal"
              required     
              id="deliveryDate"
              label="Delivery Date"
              name="deliveryDate"
              autoComplete="deliveryDate"
              autoFocus
            />
  </Grid>
 
 
  <Grid  container containerdirection="row" justifyContent="space-evenly" alignItems="center"  >
  <TextField
              margin="normal"
              required   
              id="contactPerson"
              label="contact Person"
              name="contactPerson"
              autoComplete="contactPerson"
              autoFocus
            />
   
   <TextField
              margin="normal"
              required     
              id="documentDate"
              label="document Date"
              name="documentDate"
              autoComplete="documentDate"
              autoFocus
            />
  </Grid>
  </Card>
  <Grid container containerdirection='column' justifyContent="space-evenly" alignItems="center" mt={2}>
    <Card  sx={{boxShadow: 1, borderRadius: 2, px: 8}}>
  <Typography variant="h6" component="h2" >
  Item Code
</Typography>
     </Card>
     <Card sx={{boxShadow: 1, borderRadius: 2, px: 8}}>
  <Typography variant="h6" component="h2">
  Unit Price
</Typography>
     </Card>
     <Card sx={{boxShadow: 1, borderRadius: 2, px: 8}}>
  <Typography variant="h6" component="h2">
    Quantity
</Typography>
     </Card>
     <Card sx={{boxShadow: 1, borderRadius: 2, px: 8}}>
  <Typography variant="h6" component="h2">
  Tax Code
</Typography>
     </Card>
  </Grid>
  <Grid container containerdirection='column' justifyContent="space-evenly" alignItems="center" mt={2}>
  <TextField
              margin="normal"
              required
              id="itemCode"
              label="Select itemCode"
              name="itemCode"
              autoComplete="itemCode"
              autoFocus
            />     
            <TextField
              margin="normal"
              required
              id="unitPrice"
              label="Select unitPrice"
              name="unitPrice"
              autoComplete="unitPrice"
              autoFocus
            />     
            <TextField
              margin="normal"
              required
              id="quantity"
              label="Select quantity"
              name="quantity"
              autoComplete="quantity"
              autoFocus
            />     
            <TextField
              margin="small"
              required
              id="texCode"
              label="Select texCode"
              name="texCode"
              autoComplete="texCode"
              autoFocus
            />     
  </Grid>
  </>
  )
}

export default InvoiceCreate 