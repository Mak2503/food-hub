import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useLocalStorage from "../libs/useLocalStorage";
import "./Logout.css";
import Modal from "./modal";

const Logout = (props) => {
  const [tokenData, _] = useLocalStorage("tokenData");
  const history = useHistory();
  const logoutHandle = () => {
    localStorage.removeItem("tokenData");
    props.onClose();
    history.go(0);
  };
  return (
    <Modal onClose={props.onClose}>
      <div className="Logout">
        <div>Are you sure to logout ?</div>
        <div className="Logout-buttons">
          <button
            onClick={() => logoutHandle()}
            style={{ backgroundColor: "#fc8019", color: "white" }}
          >
            Yes
          </button>
          <button onClick={props.onClose}>No</button>
        </div>
      </div>
      {!tokenData && <Redirect to="/login" />}
    </Modal>
  );
};
export default Logout;
