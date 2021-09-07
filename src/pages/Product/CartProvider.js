import React, { createContext, useState } from "react";

const CartContext = createContext({});

const defCart = {
  items: []
};

const CartProvider = (props) => {
  const [cart, setCart] = useState(defCart);

  return (
    <CartContext.Provider value={{ cart: cart, updateCart: setCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export { CartContext };
