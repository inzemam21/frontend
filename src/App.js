import React from 'react'
import Container from '@mui/material/Container';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './components/screens/HomeScreen'
import OrderListScreen from './components/screens/OrderListScreen'
import SapLogin from './components/screens/SapLogin'
import CreateSaleOrderScreen from './components/screens/CreateSaleOrderScreen'
import OrderDetailsScreen from './components/screens/OrderDetailsScreen'
import LineItemScreen from './components/screens/LineItemScreen'
import DeliveryScreen from './components/screens/DeliveryScreen'
import EditOrderItemScreen from './components/screens/EditOrderItemScreen'
import Login from './components/screens/Login'
import Dashboard from './components/screens/Dashboard/DashBoard'
import InvoiceCreate from './components/screens/InvoiceCreate'
import {  createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

const mdTheme = createTheme();

const  App = () => {
  return (
    <Router>
       <ThemeProvider theme={mdTheme}>
       <Header />
       <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            //width: '100vw',
            overflow: 'auto',
                   
          }}
       >  
    <Container fluid maxWidth sx={{paddingTop:'5%'}}>
         {/* <Route path="/order/:id" component={OrderScreen}/> */}
         <Route path="/login" component={SapLogin}/>
         <Route path="/mlogin" component={Login}/>
         <Route path="/createorder" component={CreateSaleOrderScreen}/>
         <Route path="/saplogin" component={SapLogin}/>
         <Route path='/ordersale' component={OrderListScreen} />
         <Route path='/editorderitem/:id' component={EditOrderItemScreen} />
         
         <Route path='/order/:id' component={OrderDetailsScreen} />
         <Route path='/createinvoice' component={InvoiceCreate} />
         <Route path='/delivery/:id' component={DeliveryScreen} />
         <Route path='/lineitem/:id' component={LineItemScreen} />
         
         {/* <Route path="/xe" component={HomeScreen} exact /> */}
         <Route path="/" component={Dashboard} exact/>
         
         </Container>  
         <Footer />
      </Box> 
      
      
      </ThemeProvider>
      
    </Router>
  );
}

export default App;
