import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Product/CartProvider";
import "./Cart.css";

class Cart extends React.Component {
  
  render() {
    const { items } = this.context.cart;
    return (
      <div className="Cart">
        {items.length > 0 ? (
          <div>
            {items.map((c) => {
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
                  </div>
                  <div>{}</div>
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

Cart.contextType = CartContext;
export default Cart;
