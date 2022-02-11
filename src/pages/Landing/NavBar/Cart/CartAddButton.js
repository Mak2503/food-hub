import React, { useContext } from "react";
import { CartContext } from "../../../Product/CartProvider";
import "../../../Product/Product.css";

const CartAddButton = (props) => {
  const { menuPrice, menuName } = props;
  const { cart, updateCart } = useContext(CartContext);

  const increment = () => {
    const newCart = [...cart.items];
    const newItemLoc = cart.items.findIndex((c) => c.menuName === menuName);
    if (newItemLoc > -1) {
      newCart[newItemLoc].quantity = cart.items[newItemLoc].quantity + 1;
    } else {
      newCart.push({ menuName, menuPrice, quantity: 1 });
    }
    updateCart({ items: newCart });
  };

  const decrement = () => {
    const newCart = [...cart.items];
    const newItemLoc = cart.items.findIndex((c) => c.menuName === menuName);
    if (newCart[newItemLoc].quantity === 1) {
      newCart.splice(newItemLoc, 1);
    } else if (newCart[newItemLoc].quantity > 1) {
      newCart[newItemLoc].quantity = cart.items[newItemLoc].quantity - 1;
    }
    updateCart({ items: newCart });
  };

  const { items } = cart;
  let selectedItem = items.find((item) => item.menuName === menuName);
  const quantity = selectedItem ? selectedItem.quantity : 0;
  return (
    <div className="AddButton">
      {quantity <= 0 ? (
        <div className="initial" onClick={() => increment()}>
          ADD
        </div>
      ) : (
        <div className="increment" style={{ display: "flex" }}>
          <div onClick={() => decrement()}>-</div>
          {quantity}
          <div onClick={() => increment()}>+</div>
        </div>
      )}
    </div>
  );
};

CartAddButton.contextType = CartContext;
export default CartAddButton;
