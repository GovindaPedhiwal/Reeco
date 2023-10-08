// import React from 'react'
// import Header from './components/header/Header'
// import './App.css'
// import OrderDetails from './components/order/orderdetails/OrderDetails'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// const App = () => { 
//   return (
//     <div>
//       <Header />
//       <Router>
//         <Routes>
//           <Route exact path="/" element={<OrderDetails />}/>
//         </Routes>
//       </Router>
//     </div>
//   )
// }

// export default App





import React, { useEffect } from 'react'
import Header from './components/header/Header'
import './App.css'
import OrderDetails from './components/order/orderdetails/OrderDetails'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  useEffect(() => {
    const orders = [
      {
        "id": 1,
        "product_name": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        "brand": "This is first",
        "price": "1200",
        "quantity": 13,
        "status": "Missing",
        "comments": "Other",
        "product_decline_reason": [
          "Missing product",
          "Quantity is not the same",
          "Price is not the same",
          "Other"
        ]
      },
      {
        "id": 2,
        "product_name": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        "brand": "This is Second",
        "price": "200",
        "quantity": 5,
        "status": "Missing",
        "comments": "Other",
        "product_decline_reason": [
          "Missing product",
          "Quantity is not the same",
          "Price is not the same",
          "Other"
        ]
      },
      {
        "id": 3,
        "product_name": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        "brand": "This is third",
        "price": "1200",
        "quantity": 3,
        "status": "Missing",
        "comments": "Other",
        "product_decline_reason": [
          "Missing product",
          "Quantity is not the same",
          "Price is not the same",
          "Other"
        ]
      },
      {
        "id": 4,
        "product_name": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        "brand": "This is fourth",
        "price": "400",
        "quantity": 5,
        "status": "Missing",
        "comments": "Other",
        "product_decline_reason": [
          "Missing product",
          "Quantity is not the same",
          "Price is not the same",
          "Other"
        ]
      },
      {
        "id": 5,
        "product_name": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        "brand": "This is fifth",
        "price": "1200",
        "quantity": 23,
        "status": "Missing",
        "comments": "Other",
        "product_decline_reason": [
          "Missing product",
          "Quantity is not the same",
          "Price is not the same",
          "Other"
        ]
      },
      {
        "id": 6,
        "product_name": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        "brand": "This is Sixth",
        "price": "240",
        "quantity": 4,
        "total": "2000",
        "status": "Missing",
        "comments": "Other",
        "product_decline_reason": [
          "Missing product",
          "Quantity is not the same",
          "Price is not the same",
          "Other"
        ]
      },
      {
        "id": 7,
        "product_name": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        "brand": "This is seventh",
        "price": "1200",
        "quantity": 13,
        "status": "Missing",
        "comments": "Other",
        "product_decline_reason": [
          "Missing product",
          "Quantity is not the same",
          "Price is not the same",
          "Other"
        ]
      },
      {
        "id": 8,
        "product_name": "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        "brand": "This is Eight",
        "price": "250",
        "quantity": 7,
        "status": "Missing",
        "comments": "Other",
        "product_decline_reason": [
          "Missing product",
          "Quantity is not the same",
          "Price is not the same",
          "Other"
        ]
      }
    ]  
    const url = "https://65231175f43b1793841531c8.mockapi.io/api/orders"
    // for(let i = 0;i < orders.length; i++) {
    //   const options = {
    //     method: 'POST',
    //     body: JSON.stringify(orders[i]),
    //     headers: {
    //       'Content-type': 'application/json'
    //     }
    //   }
    //   fetch(url,options).then(res => res.json())
    //   .then(res => {
    //     console.log(res);
    //   })
    // }
  },[])
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
