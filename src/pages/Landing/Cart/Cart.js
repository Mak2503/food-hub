import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../../../libs/useLocalStorage";
import { CartContext } from "../../Product/CartProvider";
import "./Cart.css";
import CartAddButton from "./CartAddButton";

const Cart = (props) => {
  const { onOpen, userCartItems } = props;
  const [tokenData, setTokenData] = useLocalStorage("tokenData");
  const { cart } = useContext(CartContext);

  let totalCartPrice = cart.items.reduce(
    (a, b) => a + b.menuPrice * b.quantity,
    0
  );

  const checkOut = () => {
    cart.items.map((c) => {
      return alert(
        `Your order of ${c.menuName} is placed and will arrive shortly`
      );
    });
  };

  return (
    <div className="Cart">
      {/* if items present in the cart */}
      {cart.items.length > 0 ? (
        <div className="cart-page">
          <div className="cart-address">
            <div style={{ fontSize: "32px", fontWeight: "bold" }}>
              Add a delivery address
            </div>
            <div
              style={{
                border: "1px dashed gray",
                width: "200px",
                padding: "20px",
                marginTop: "30px",
              }}
            >
              <div>
                <div>Add new address</div>
                <div>
                  <button
                    style={{
                      border: "1px solid #60b246",
                      color: "#60b246",
                      backgroundColor: "white",
                      marginTop: "10px",
                      width: "100px",
                      height: "30px",
                    }}
                  >
                    ADD NEW
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-items">
            <a
              style={{ textDecoration: "none" }}
              href={`/restaurant/${cart.restaurantInfo.resId}`}
            >
              <div
                style={{
                  display: "flex",
                  position: "relative",
                }}
              >
                <div>
                  <img
                    style={{
                      width: "50px",
                      objectFit: "cover",
                      height: "50px",
                      boxSizing: "inherit",
                    }}
                    src={cart.restaurantInfo.resImg}
                    alt="res-img"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: "bold",
                      marginLeft: "15px",
                      color: "#535665",
                    }}
                  >
                    {cart.restaurantInfo.resName}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      marginLeft: "15px",
                      marginTop: "2px",
                      color: "#535665",
                    }}
                  >
                    Marathahalli
                  </div>
                </div>
              </div>
            </a>
            {cart.items.map((c) => {
              return (
                <div
                  style={{
                    display: "flex",
                    margin: "20px 0px",
                  }}
                >
                  <div className="list-1">{c.menuName}</div>
                  <div className="list-2">
                    <CartAddButton
                      restaurantInfo={cart.restaurantInfo}
                      menuName={c.menuName}
                      menuPrice={c.menuPrice}
                    />
                  </div>
                  <div className="list-3">
                    {"\u20B9"}
                    {(c.menuPrice / 100) * c.quantity}
                  </div>
                </div>
              );
            })}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "bold",
                fontSize: "15px",
              }}
            >
              <div>Subtotal</div>
              <div>
                {"\u20B9"}
                {totalCartPrice / 100}
              </div>
            </div>
            <div style={{ fontSize: "12px" }}>Extra charges may apply</div>
            <div>
              <button
                onClick={() => checkOut()}
                style={{
                  backgroundColor: "#fc8019",
                  height: "30px",
                  fontSize: "12px",
                }}
                className="SideCart-button"
              >
                CHECKOUT
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {/* if items not present in the cart */}
          <div className="cartImg"></div>
          <div></div>
          <h2 style={{ textAlign: "center" }}>Your cart is empty</h2>
          <p className="Cart-empty-text">
            You can go home page to view more restaurants
          </p>
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
