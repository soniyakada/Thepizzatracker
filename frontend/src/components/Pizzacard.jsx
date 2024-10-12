// components/PizzaCard.js
import React from 'react';
import img from '../assets/img1.webp'

function PizzaCard({ name, size, price, image }) {
  

  return (
    <div className=" h-72 w-60 border p-2 rounded-lg shadow-md flex flex-col items-center bg-white">
      <img  src={image} className='h-42 w-44' />
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 mb-2">{size}</p>
      <div className='flex gap-10'>
        <h2>₹{price}</h2>
        <button className='bg-orange-600 text-white rounded-md px-3 py-1 text-xs'>Add to cart</button>
      </div>
    </div>
  );
}

export default PizzaCard;
