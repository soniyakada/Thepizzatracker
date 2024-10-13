// components/Cart.js
import React,{useContext}from 'react';
import cartlogo from '../../assets/orangecartlogo.png';
import { CartContext } from '../../context/CartContext.jsx';
import Navbar from '../../components/Navbar.jsx';

function Cart() {
  const { cart } = useContext(CartContext); 

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);
  return (
    <>
    <Navbar/>
      <div className='w-full flex justify-center items-center gap-5 p-4 '>
        <h1 className='text-xl'>Order Summary</h1>
        <img src={cartlogo} className='h-10 w-10' alt="cart logo" />
      </div>
   
      <div className="p-4">
        
        {/* Display cart items */}
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between p-2 border-b">
                <img  src={item.image} className='h-28 w-28' />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-600">Size: {item.size}</p>
                </div>
                <div>
                  <p className="font-semibold">₹{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
     <div className='flex flex-col justify-center items-center'>
      <div className='flex  gap-4 p-4 '>Total Amount:<strong>₹{totalAmount}</strong></div>
      <form className='flex flex-col gap-3 '>
        <input type="text" placeholder='phonenumber'/>
        <input type="Address" placeholder='Address'/>
        <button className=' bg-orange-600 rounded-md py-2 text-white mb-5'>Order now</button>

      </form>
      </div> 
         </>
  );
}

export default Cart;
