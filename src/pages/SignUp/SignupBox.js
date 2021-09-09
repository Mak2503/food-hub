import React, { useState } from "react";

const SignupBox = () => {
  const [num, setNum] = useState("");
  const [pwd, setPwd] = useState("");

  const handle = () => {
    localStorage.setItem("Number", num);
    localStorage.setItem("Password", pwd);
  };
  return (
    <div className="SignupBox">
      <input type="tel" placeholder="Phone Number" value={num} onChange={(e) => setNum(e.target.value)}></input>
      <input type="text" placeholder="Name"></input>
      <input type="email" placeholder="Email"></input>
      <input type="password" placeholder="Password" className="signupPass" />
    </div>
  );
};
export default SignupBox;
