import React, { Component } from 'react'
import CartEmpty from '../Landing/NavBar/Cart/CartEmpty';
import CartProvider from './CartProvider';
import DemoRes from './DemoRes';

class AppWIthContext extends Component {
  render(){
    return (
      <CartProvider>
        <div className="AppWithContext">
          <DemoRes /> 
          <CartEmpty />
        </div>
      </CartProvider>
    )
  }
}

export default AppWIthContext;
