import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userLoginReducer,   userDetailsReducer } from './components/reducers/userReducers'
import { orderCreateReducer, orderDetailsReducer,  orderListMyReducer, orderListReducer } from './components/reducers/orderReducers'
import { itemDetailsReducer } from './components/reducers/itemsReducers'
import { lineItemReducer } from './components/reducers/DocReducers'
import { batchDetailReducer, deliveryCreateReducer } from './components/reducers/deliveryReducers'


const reducer = combineReducers({
    //* User Reducers *//
    userLogin: userLoginReducer,
    userDetails: userDetailsReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    orderDetails: orderDetailsReducer,
    orderCreate:orderCreateReducer,
    deliveryCreate:deliveryCreateReducer,
    itemDetails: itemDetailsReducer,
    lineItems: lineItemReducer,
    batchDetails: batchDetailReducer
})


const userInfoFromStorage = localStorage.getItem('userInfo') 
? JSON.parse(localStorage.getItem('userInfo')) : null

const orderInfoFromStorage = localStorage.getItem('orderInfo') 
? JSON.parse(localStorage.getItem('orderInfo')) : null

const initialState = {
    userLogin: {userInfo: userInfoFromStorage },
 
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    )

export default store