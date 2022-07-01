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
