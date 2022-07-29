import "./index";
import "./index.css";
import { Switch, Route } from "react-router-dom";
import Cart from "./pages/Landing/Cart/Cart";
import Navbar from "./pages/Landing/NavBar/Navbar";
import LoginPage from "./pages/Login/LoginPage";
import SignupPage from "./pages/SignUp/SignupPage";
import BodyGrid from "./pages/Landing/Body/BodyGrid";
import Product from "./pages/Product/Product";
import ProductMenu from "./pages/Product/ProductMenu";
import CartProvider from "./pages/Product/CartProvider";
import Search from "./pages/Landing/NavBar/Search";
import Logout from "./components/Logout";
import { useEffect, useState } from "react";
import Banner from "./pages/Landing/Banner/Banner";
import useLocalStorage from "./libs/useLocalStorage";
import Footer from "./pages/Landing/Footer/Footer";
import ReactGA from "react-ga";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [cartId, _] = useLocalStorage("cartId");
  const [userCartItems, setUserCartItems] = useState([]);
  const setModal = () => {
    setOpenModal(!openModal);
  };

  // setup Google Analytics
  const setGA = () => {
    ReactGA.initialize("G-047X8PHLPR");
    ReactGA.pageview("Init page view");
  };

  useEffect(() => {
    setGA();
    const url = `https://food-power.glitch.me/cart/${cartId}`;
    const tokenData = JSON.parse(localStorage.getItem("tokenData"));
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenData?.token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => setUserCartItems(res.cart))
      .catch((err) => console.log(err));
  }, []);

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
          <Route path="/checkout">
            <Navbar onOpen={setModal} position="fixed" />
            <Cart userCartItems={userCartItems || []} onOpen={setModal} />
            <Footer />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route exact path="/restaurant/:id">
            <Navbar onOpen={setModal} position="static" />
            <Product />
            <ProductMenu userCartItems={userCartItems || []} />
            <Footer />
          </Route>
          <Route exact path="/">
            <Navbar onOpen={setModal} position="fixed" />
            <Banner />
            <BodyGrid />
            <Footer />
          </Route>
        </Switch>
      </CartProvider>
    </div>
  );
}

export default App;
