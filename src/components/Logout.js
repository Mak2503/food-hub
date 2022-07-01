import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Logout.css";
import Modal from "./modal";

const Logout = (props) => {
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
    </Modal>
  );
};
export default Logout;
