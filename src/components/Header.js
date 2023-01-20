import React from 'react'
import { Route } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
//import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'

import { logout } from './actions/userActions'
import {  AppBar, Badge, CssBaseline, Grid, IconButton, Paper, Toolbar, Typography } from '@mui/material'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './screens/Dashboard/listItems';

const mdTheme = createTheme();

const Header = () => {
  
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () => {
    if(userInfo){
      dispatch(logout())
    }
  }

    return (
      <ThemeProvider theme={mdTheme}>
        
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
      <AppBar position="absolute" >
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
             // onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
               //  ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              SAP 
            </Typography>
            <IconButton color="inherit">
              {userInfo ? ( 
                <IconButton onClick={logoutHandler}>
                      <LogoutIcon /> 
                  </IconButton>
                ) : (<LinkContainer to='/login'>
               <LoginIcon />
                </LinkContainer>)
                }

            </IconButton>
          </Toolbar>
        </AppBar>
        
        </Box>
   
      </ThemeProvider>
//         <header>
//            <Navbar style={{backgroundColor: "whitesmoke"}} variant="grey" expand="sm" collapseOnSelect>
//                <Container fluid >
//                  <LinkContainer to="/">
//                  <Navbar.Brand>SAP B1 </Navbar.Brand>
//                  </LinkContainer>
  
//   <Navbar.Toggle aria-controls="basic-navbar-nav" />
//    <Navbar.Collapse id="basic-navbar-nav">
//   {/* <Route render={({ history }) => <SearchBox history={history} />} />  */}
//     <Nav  className="ml-auto ">
//       {userInfo  ? (
//            <NavDropdown title={userInfo.SessionId} id='username' >
//               <LinkContainer to="/profile">
//                  <NavDropdown.Item>Profile</NavDropdown.Item>
//               </LinkContainer>
//               <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
//            </NavDropdown>
//       ) : (<LinkContainer to="/login">
//       <Nav.Link><i className="fas fa-user"></i> Sign In</Nav.Link> 
//    </LinkContainer> )}
//    {userInfo && userInfo.isAdmin && (
//                 <NavDropdown title='Admin' id='adminmenu'>
//                   <LinkContainer to='/admin/userlist'>
//                     <NavDropdown.Item>Users</NavDropdown.Item>
//                   </LinkContainer>
//                   <LinkContainer to='/admin/distributorlist'>
//                     <NavDropdown.Item>Distributors</NavDropdown.Item>
//                   </LinkContainer>
//                   <LinkContainer to='/admin/productlist'>
//                     <NavDropdown.Item>Products</NavDropdown.Item>
//                   </LinkContainer>
//                   <LinkContainer to='/admin/orderlist'>
//                     <NavDropdown.Item>Orders</NavDropdown.Item>
//                   </LinkContainer>
//                 </NavDropdown>
//               )}    
//     </Nav> 
//   </Navbar.Collapse>
//   </Container>
// </Navbar>
//         </header>
    )
}

export default Header
