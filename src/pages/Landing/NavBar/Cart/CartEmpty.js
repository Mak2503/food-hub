import React from 'react'
import './Cart.css'

class CartEmpty extends React.Component {
    render(){
        return (
            <div className="CartEmpty">
                <div></div>
                <h2>Your cart is empty</h2>
                <p>You can go home page to view more restaurants</p>
                <button type="button">SEE RESTAURANTS NEAR YOU</button>
            </div>
        )
    }
}
export default CartEmpty;
