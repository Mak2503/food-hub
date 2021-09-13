import React from "react";
import "../../../Product/Product.css";

class CartAddButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.quantity,
    };
  }

  increment = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  decrement = () => {
    this.setState({ quantity: this.state.quantity - 1 });
  };

  render() {
    const { quantity } = this.state;
    return (
      <div className="AddButton">
        <div className="increment" style={{ display: "flex" }}>
          <div onClick={this.decrement}>-</div>
          <div>{quantity}</div>
          <div onClick={this.increment}>+</div>
        </div>
      </div>
    );
  }
}
export default CartAddButton;
