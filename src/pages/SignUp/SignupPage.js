import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import SignupBox from "./SignupBox";

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginToken: null,
    };
  }

  submitLogin = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: null, password: null }),
    };
    fetch("https://food-power.glitch.me/login", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ loginToken: data.token }));
  };

  render() {
    return (
      <div className="SignupPage">
        <Link to="/">
          <div className="exit">{"\u2715"}</div>
        </Link>
        <h1>Sign up</h1>
        <p>
          or{" "}
          <span>
            <Link to="/login">login to your account</Link>
          </span>
        </p>
        <SignupBox />
      </div>
    );
  }
}

export default SignupPage;
