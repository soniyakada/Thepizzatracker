import React from 'react';
import cartlogo from '../assets/orangecartlogo.png';
import { Link, NavLink } from 'react-router-dom';
import pizzalogo from '../assets/pizza.jpeg'


function Navbar() {
  return (
    <div className="flex justify-between items-center px-8 py-4 shadow-md">
   
     <Link to="/"> <div className=""><img src={pizzalogo} className='h-10'/></div></Link>

      
      <div className="flex gap-8 text-xl">
        {/* Use NavLink to add active state styling */}
        <NavLink
          to="/menu"
          className={({ isActive }) =>
            `hover:text-orange-500 ${isActive ? 'text-orange-500 font-bold' : 'text-black'}`
          }
        >
          <h3>Menu</h3>
        </NavLink>

        <NavLink
          to="/offers"
          className={({ isActive }) =>
            `hover:text-orange-500 ${isActive ? 'text-orange-500 font-bold' : 'text-black'}`
          }
        >
          <h3>Offers</h3>
        </NavLink>

        <NavLink
          to="/register"
          className={({ isActive }) =>
            `hover:text-orange-500 ${isActive ? 'text-orange-500 font-bold' : 'text-black'}`
          }
        >
          <h3>Register</h3>
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            `hover:text-orange-500 ${isActive ? 'text-orange-500 font-bold' : 'text-black'}`
          }
        >
          <h3>Login</h3>
        </NavLink>

        {/* Cart Link */}
        <Link to="/cart" className="hover:scale-110 transition-transform duration-300">
          <img src={cartlogo} className="h-10 w-10" alt="Cart Logo" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
