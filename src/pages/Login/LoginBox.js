import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import useLocalStorage from "../../libs/useLocalStorage";

const LoginBox = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [tokenData, setTokenData] = useLocalStorage("tokenData", {});
  const [resMessage, setResMessage] = useState({});
  const handleSubmit = () => {
    const signupData = {
      email: email,
      password: pwd,
    };
    fetch("https://food-power.glitch.me/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
      .then((res) => res.json())
      .then((res) => {
        res.authenticated
          ? setTokenData({
              token: res.token,
              userName: res.name,
              toRedirect: true,
            })
          : setResMessage(res);
      })
      .catch((err) => setResMessage(err));
  };

  return (
    <div className="SignupBox">
      <input
        type="email"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        value={pwd}
        placeholder="Password"
        onChange={(e) => setPwd(e.target.value)}
      ></input>
      <p id="Login-error"></p>
      <div className="SignupButton">
        <button type="submit" onClick={() => handleSubmit()}>
          LOGIN
        </button>
        {tokenData.toRedirect && <Redirect to="/" />}
      </div>
    </div>
  );
};
export default LoginBox;
