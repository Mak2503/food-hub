import "./index";
import "./index.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Cart from "./pages/Landing/NavBar/Cart/Cart";
import Navbar from "./pages/Landing/NavBar/Navbar";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/SignUp/SignupPage";
import Header from "./pages/Landing/Header/Header";
import BodyGrid from "./pages/Landing/Body/BodyGrid";
import Product from "./pages/Product/Product";
import ProductMenu from "./pages/Product/ProductMenu";
import CartProvider from "./pages/Product/CartProvider";
import Search from "./pages/Landing/NavBar/Search";
import Logout from "./components/Logout";
import { useState } from "react";
import useLocalStorage from "./libs/useLocalStorage";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [tokenData, _] = useLocalStorage("tokenData");

  const setModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className="App">
      <CartProvider>
        {openModal && <Logout onClose={() => setOpenModal(!openModal)} />}
        <Switch>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route exact path="/restaurant/:id">
            <Navbar />
            <Product />
            <ProductMenu />
          </Route>
          <Route exact path="/">
            <Navbar onOpen={setModal} />
            <Header />
            <BodyGrid />
          </Route>
        </Switch>
      </CartProvider>
    </div>
  );
}

export default App;
