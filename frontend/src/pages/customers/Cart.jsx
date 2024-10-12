// components/Cart.js
import React,{useContext}from 'react';
import cartlogo from '../../assets/orangecartlogo.png';
import { CartContext } from '../../context/CartContext.jsx';

function Cart() {
  const { cart } = useContext(CartContext); 
  const {name} = useContext(CartContext)
  
  return (
    <>
      <div className='w-full flex justify-center items-center gap-5 p-4 shadow-md '>
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
                <img  src={item.image} className='h-32 w-36' />
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
    </>
  );
}

export default Cart;
