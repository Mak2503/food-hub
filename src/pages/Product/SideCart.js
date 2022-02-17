import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartAddButton from "../Landing/Cart/CartAddButton";
import { CartContext } from "./CartProvider";
import "../Landing/Cart/Cart.css";

export default function SideCart(props) {
  const [scrolled, setScrolled] = useState(false);
  const { restaurantInfo } = props;
  const { cart } = useContext(CartContext);
  const totalCartPrice = cart.items.reduce(
    (a, b) => a + b.menuPrice * b.quantity,
    0
  );

  useEffect(() => {
    const changeNavbarSize = () => {
      if (window.scrollY >= 80) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", changeNavbarSize);
  }, []);

  return (
    <div className={scrolled ? "SideCart-scrolled" : "SideCart"}>
      {cart.items.length > 0 ? (
        <div>
          <div className="SideCart-head">Cart</div>
          <div className="SideCart-totalItem">
            {cart.items.length} ITEM{cart.items.length > 1 && "S"}
          </div>
          {cart.items.map((c) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "20px 0px",
                }}
              >
                <div style={{ fontSize: "14px", width: "40%" }}>
                  {c.menuName}
                </div>
                <div style={{ width: "40%" }}>
                  <CartAddButton
                    restaurantInfo={restaurantInfo}
                    menuName={c.menuName}
                    menuPrice={c.menuPrice}
                  />
                </div>
                <div style={{ width: "20%", textAlign: "right" }}>
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
              fontSize: "16px",
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
            <Link to="/cart">
              <button
                className="SideCart-button"
                style={{ backgroundColor: "rgb(96 178 70)" }}
              >
                CHECKOUT
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="SideCart-head">Cart Empty</div>
          <div className="SideCart-img"></div>
          <h2>Your cart is empty</h2>
          <p>
            Good food is always cooking! Go ahead, order some yummy items from
            the menu.
          </p>
        </div>
      )}
    </div>
  );
}
