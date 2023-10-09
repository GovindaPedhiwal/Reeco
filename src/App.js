import React from 'react'
import Header from './components/header/Header'
import './App.css'
import OrderDetails from './components/order/orderdetails/OrderDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => { 
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<OrderDetails />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App