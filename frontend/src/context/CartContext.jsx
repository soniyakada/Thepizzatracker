import React, { createContext, useState } from "react";

// Create the context
export const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    setCart((prevCart) => [...prevCart, pizza]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart,name }}>
      {children}
    </CartContext.Provider>
  );
};
