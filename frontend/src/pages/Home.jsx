import React,{useContext}from 'react'
import Navbar from '../components/Navbar'
import { CartContext } from '../context/CartContext.jsx';
import PizzaCard from '../components/Pizzacard';
import pizza1 from '../assets/pizza1.webp'
import pizza2 from '../assets/pizza2.webp'
import pizza3 from '../assets/pizza3.jpeg'
import pizza4 from '../assets/pizza4.png'
import pizza5 from '../assets/pizza5.png'
import pizza6 from '../assets/pizza6.png'
import pizza7 from '../assets/pizza7.png'
import pizza9 from '../assets/pizza9.png'
import pizza10 from '../assets/img1.webp'



function Home() {

  const { addToCart } = useContext(CartContext);

 const pizzaData = [
    { name: 'Margherita', size: 'Medium', price: 200, image: pizza1 },
    { name: 'Pepperoni', size: 'Large', price: 150, image: pizza2 },
    { name: 'Veggie', size: 'Small', price: 200, image: pizza3},
    { name: 'Veggie', size: 'Medium', price: 300, image: pizza5 },
    { name: 'Hawaiian', size: 'Large', price: 250, image: pizza4 },
    { name: 'Mushroom Delight', size: 'Small', price: 180, image: pizza6 },
    { name: 'Four Cheese', size: 'Medium', price: 250, image: pizza7 },
    { name: 'Veggie', size: 'Large', price: 300, image: pizza9 },
    { name: 'Mexican Fiesta', size: 'Small', price: 180, image: pizza10 },
    { name: 'Spinach & Feta', size: 'Medium', price: 250, image: pizza2 }
  ];
  
  

  return (
    <>
    <div className='h-screen w-full'>
    <Navbar/>
   <div className='flex justify-around'>
        <div className='flex flex-col mt-36 gap-6'>
            
            <h3 className='italic text-2xl'>Are you hungry ?</h3>
            <h1 className='text-7xl font-semibold'>Don't wait</h1>

        </div>
        <div className='mt-10'><img className='h-96' src={pizza10}/></div>
    </div>
    </div>
   
    <div className='h-screen w-full'>
    <div className="flex justify-center items-center py-3">
    <h1 className="text-3xl font-bold">All Pizzas</h1>
  </div>
      
  <div className="grid grid-cols-4 gap-x-12 gap-y-16">
  {pizzaData.map((pizza, index) => (
    <PizzaCard
      key={index}
      image={pizza.image}
      name={pizza.name}
      size={pizza.size}
      price={pizza.price}
      addToCart={addToCart}
    />
  ))}
</div>

    </div>
    </>
  )
}

export default Home