import React from "react"
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from "./pages/home";
import Cart from "./pages/customers/Cart";


function App() {
  

  return (
   <>
   <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart />}/>

      </Routes>
    </div>
   </Router>
   </>
  )
}

export default App
