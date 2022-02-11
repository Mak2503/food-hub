import { CloseIcon } from "../libs/icons";
import "./modal.css";

const Modal = ({ children, onClose }) => {
  const handleClose = () => {
    return onClose();
  };

  return (
    <div className="modal" style={{ backdropFilter: "blur(0.8px)" }}>
      {/* className="bg-white p-4 border border-accent-2 md:max-w-md inset-x-0 fixed md:relative m-2 md:m-6 rounded-md" */}
      <div className="modal-inner" role="dialog">
        <div className="modal-content">
          <div></div>
          <button
            onClick={() => handleClose()}
            aria-label="Close panel"
            className="modal-close"
          >
            <CloseIcon h="24" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
