import React, { Component } from 'react'
import AddButton from './AddButton'

class Cart extends Component{
  constructor(props){
    super(props)
  };
  render(){
    return (
      <div className="cart">
          <div>
            <h2>Cart Empty</h2>
            <div className="cart-img"></div>
            <p>Good food is always cooking!<br/>Go ahead, order some yummy items<br/>from the menu</p>
          </div>
          <div>
            <h2>Cart</h2>
            <p></p>
            <div>
              <p></p>
              <div><AddButton /></div>
              <div></div>
            <div>
            </div>
              <p>Subtotal<br/>Extra charges may apply</p>
              <div></div>
            </div>
            <div>CHECKOUT</div>
          </div>
      </div>
    )
  }
}

export default Cart;
