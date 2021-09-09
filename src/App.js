import './index';
import "./index.css"
import {
  Switch,
  Route
} from "react-router-dom";
import Cart from './pages/Landing/NavBar/Cart/Cart';
import Navbar from './pages/Landing/NavBar/Navbar';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/SignUp/SignupPage';
import Header from './pages/Landing/Header/Header';
import BodyGrid from './pages/Landing/Body/BodyGrid';
import Product from './pages/Product/Product';
import ProductMenu from './pages/Product/ProductMenu';
import CartProvider from './pages/Product/CartProvider';
function App() {
  return (
    <div className="App">
      <CartProvider>     
      <Switch>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/cart">
          <Cart/>
        </Route>
        <Route path="/restaurant/:id">
          <Product />
          <ProductMenu /> 
      </Route>
      <Route path="/">
        <Navbar />
        <Header />
        <BodyGrid />
      </Route>
      </Switch>
      </CartProvider>
    </div>
  );
}

export default App;
