import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../../../../libs/useLocalStorage";
import AddButton from "../../../Product/AddButton";
import { CartContext } from "../../../Product/CartProvider";
import "./Cart.css";
import CartAddButton from "./CartAddButton";

const Cart = (props) => {
  const [cartId, _] = useLocalStorage("cartId");
  const [tokenData, setTokenData] = useLocalStorage("tokenData");
  const { cart } = useContext(CartContext);
  console.log(tokenData);

  useEffect(() => {
    const url = `https://food-power.glitch.me/cart/${cartId}`;
    // const tokenData = JSON.parse(localStorage.getItem("tokenData"));
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenData.token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res.cart));
  }, []);

  let totalPrice = 0;

  return (
    <div className="Cart">
      <div className="cart-nav">
        <div className="cart-nav-head">Secure Checkout</div>
        <div>
          <ul>
            <li>
              <Link to="/">Help</Link>
            </li>
            <li>
              <Link to="/login">Sign In</Link>
            </li>
          </ul>
        </div>
      </div>
      {cart.items.length > 0 ? (
        <div className="cart-items">
          {cart.items.map((c) => {
            return (
              <div
                style={{
                  width: "250px",
                  display: "flex",
                  justifyContent: "space-around",
                  margin: "20px 0px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div>{c.menuName}</div>
                  <div>
                    {"\u20B9"}
                    {c.menuPrice / 100}
                  </div>
                </div>
                <div>
                  <CartAddButton
                    menuName={c.menuName}
                    menuPrice={c.menuPrice}
                  />
                </div>
                <div>
                  {"\u20B9"}
                  {(c.menuPrice / 100) * c.quantity}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <div className="cartImg"></div>
          <div></div>
          <h2>Your cart is empty</h2>
          <p>You can go home page to view more restaurants</p>
          <div className="resButton">
            <Link to="/">SEE RESTAURANTS NEAR YOU</Link>
          </div>
        </div>
      )}
    </div>
  );
};

Cart.contextType = CartContext;
export default Cart;
