import React from "react";
import "./Product.css";
import { CartContext } from "./CartProvider";

class AddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    const { menuPrice, menuName } = this.props;
    const { cart, updateCart } = this.context;
    const newCart = [...cart.items];
    const newItemLoc = cart.items.findIndex((c) => c.menuName === menuName);
    if (newItemLoc > -1) {
      newCart[newItemLoc].quantity = cart.items[newItemLoc].quantity + 1;
    } else {
      newCart.push({ menuName, menuPrice, quantity: 1 });
    }
    updateCart({ items: newCart });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
    const { menuPrice, menuName } = this.props;
    const { cart, updateCart } = this.context;
    const newCart = [...cart.items];
    const newItemLoc = cart.items.findIndex((c) => c.menuName === menuName);
    if (newCart[newItemLoc].quantity === 1){
      newCart.splice(newItemLoc, 1);
    }
    else if (newCart[newItemLoc].quantity > 1) {
      newCart[newItemLoc].quantity = cart.items[newItemLoc].quantity - 1;
    }
  };

  render() {
    const { count } = this.state;
    return (
      <div className="AddButton">
        {count <= 0 ? (
          <div className="initial" onClick={this.increment}>
            ADD
          </div>
        ) : (
          <div className="increment" style={{ display: "flex" }}>
            <div onClick={this.decrement}>-</div>
            <div>{count}</div>
            <div onClick={this.increment}>+</div>
          </div>
        )}
      </div>
    );
  }
}
AddButton.contextType = CartContext;
export default AddButton;
