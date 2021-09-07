import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Product/CartProvider";
import "./Cart.css";

class CartEmpty extends React.Component {
  render() {
    const { items } = this.context.cart;
    return (
      <div className="CartEmpty">
        {items.length > 0 ? (
          <div>
              {items.map((c) => {
                  return (
                      <div>{c.menuName}</div>
                  )
              })}
          </div>
        ) : (
          <div>
            <div className="resImg"></div>
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
  }
}

CartEmpty.contextType = CartContext;
export default CartEmpty;
