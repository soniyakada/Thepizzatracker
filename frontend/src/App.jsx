import React from "react"
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Home from "./pages/home";
import Cart from "./pages/customers/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";


function App() {
  

  return (
   <>
   <Router>
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        </Routes>
    </div>
   </Router>
   </>
  )
}

export default App
