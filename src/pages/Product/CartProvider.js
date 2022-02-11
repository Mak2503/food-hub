import React, { createContext, useEffect, useState } from "react";
import useLocalStorage from "../../libs/useLocalStorage";

const CartContext = createContext({});

let defCart = {
  items: [],
};

const CartProvider = (props) => {
  const [cart, setCart] = useState(defCart);
  const [cartId, setCartId] = useLocalStorage("cartId", "");
  if (defCart.items.length === 0) {
    let lsData = localStorage.getItem("cartItems");
    if (lsData) {
      const parsedData = JSON.parse(lsData);
      defCart = parsedData;
    }
  }

  const handleUpdate = (data) => {
    localStorage.setItem("cartItems", JSON.stringify(data));
    setCart(data);
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    const tokenData = JSON.parse(localStorage.getItem("tokenData"));
    const url = "https://food-power.glitch.me/cart";
    console.log("cartItems", cart.items);
    console.log("defcart", cartItems.items);
    fetch(`${url}/${cartId ? cartId : ""}`, {
      method: `${cartId ? "PUT" : "POST"}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenData.token}`,
      },
      body: JSON.stringify({ cart: cartItems.items }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res, res.cartid);
        setCartId(res.cartid);
      })
      .catch((err) => console.log(err));
  };

  return (
    <CartContext.Provider value={{ cart: cart, updateCart: handleUpdate }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export { CartContext };
