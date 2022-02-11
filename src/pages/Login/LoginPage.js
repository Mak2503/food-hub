import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import LoginBox from "./LoginBox";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBar: false,
    };
  }
  // showSideBar = () => {
  //   this.setState({ sideBar: !this.state.sideBar });
  // };

  render() {
    return (
      <div className="LoginPage">
        <Link to="/">
          <div className="exit">{"\u2715"}</div>
        </Link>
        <h1>Login</h1>
        <p>
          or{" "}
          <span>
            <Link to="/signup">create an account</Link>
          </span>
        </p>
        <LoginBox />
      </div>
    );
  }
}
export default LoginPage;
