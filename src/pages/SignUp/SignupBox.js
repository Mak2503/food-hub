import React, { useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

const SignupBox = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [toRedirect, setToRedirect] = useState(false);

  console.log("name", userName, "email", email, "passw", pwd);

  const handleSubmit = () => {
    const signupData = {
      name: userName,
      email: email,
      password: pwd,
      secret: "jsfac",
    };
    fetch("https://food-power.glitch.me/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signupData),
    })
      .then((res) => res.json())
      .then((res) => {
        setToRedirect(true);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="SignupBox">
      {toRedirect && <Redirect to="/login" />}
      <input
        type="text"
        value={userName}
        placeholder="Name"
        onChange={(e) => setUserName(e.target.value)}
      ></input>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="Password"
        value={pwd}
        className="signupPass"
        onChange={(e) => setPwd(e.target.value)}
      />
      <br />
      {/* <a href="/" style={{ color: "#5d8ed5" }}>
        Have a referral code?
      </a> */}
      <div className="SignupButton">
        <button type="submit" onClick={() => handleSubmit()}>
          CONTINUE
        </button>
      </div>
    </div>
  );
};
export default SignupBox;
