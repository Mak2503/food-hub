import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { onOpen, position } = props;
  const tokenData = JSON.parse(localStorage.getItem("tokenData"));
  return (
    <div style={{ position, width: "100%", zIndex: 2 }}>
      <div className="Navbar">
        <Link href="/" style={{ textDecoration: "none" }}>
          <div className="Navbar-head">Food Hub</div>
        </Link>
        <div className="Navbar-mobile-menu">
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? (
              <img src="assets/icons8-close-24.png" alt="closeMenu" />
            ) : (
              <img src="assets/icons8-menu-32.png" alt="openMenu" />
            )}
          </button>
        </div>
        <div className="Navbar-page">
          <ul className="Navbar-ul">
            <li className="Navbar-li">
              <a href="/search">Search</a>
            </li>
            <li className="Navbar-li">
              <a href="/">Offers</a>
            </li>
            <li className="Navbar-li">
              <a href="/">Help</a>
            </li>
            <li className="Navbar-li">
              <Link to="/checkout">Cart</Link>
            </li>
            <li className="Navbar-li">
              {tokenData ? (
                <span
                  onClick={onOpen}
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                >
                  {tokenData.userName}
                </span>
              ) : (
                <a href="/login">Sign in</a>
              )}
            </li>
          </ul>
        </div>
      </div>

      {mobileMenu ? (
        <div className="Navbar-mobile-menu-list">
          <a href="/search">Search</a>
          <a href="/">Offers</a>
          <a href="/">Help</a>
          <Link to="/cart">Cart</Link>
          {tokenData ? (
            <span
              onClick={onOpen}
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              {tokenData.userName}
            </span>
          ) : (
            <a href="/login">Sign in</a>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Navbar;
