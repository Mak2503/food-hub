import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { onOpen } = props;
  const tokenData = JSON.parse(localStorage.getItem("tokenData"));
  return (
    <div className="Navbar">
      <div className="Navbar-head">SWIGGY</div>
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
            <Link to="/cart">Cart</Link>
          </li>
          <li className="Navbar-li">
            {tokenData ? (
              <span
                onClick={onOpen}
                style={{ cursor: "pointer", fontWeight: "bold" }}
              >
                &#xf406;
                {tokenData.userName}
              </span>
            ) : (
              <a href="/signup">Sign in</a>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
