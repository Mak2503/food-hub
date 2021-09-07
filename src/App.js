import './index';
import "./index.css"
import SearchBox from './pages/Landing/Header/SearchBox';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  Redirect
} from "react-router-dom";
import CartEmpty from './pages/Landing/NavBar/Cart/CartEmpty';
import Navbar from './pages/Landing/NavBar/Navbar';
import LoginPage from './pages/Login/LoginPage';
import SignupPage from './pages/SignUp/SignupPage';
import Header from './pages/Landing/Header/Header';
import SearchPage from './pages/Landing/Header/SearchPage';
import Restaurant from './pages/Landing/Body/Restaurant';
import BodyGrid from './pages/Landing/Body/BodyGrid';
import Product from './pages/Product/Product';
import ProductMenu from './pages/Product/ProductMenu';
import DemoRes from './pages/Product/DemoRes'
import AppWIthContext from './pages/Product/AppWIthContext';
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
