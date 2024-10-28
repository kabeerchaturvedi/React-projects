import "../styles.css";
import { useRef } from "react";
import useClickOutside from "../hooks/use-click-outside";

function Modal({ isOpen, closeModal }) {
  const modalRef = useRef();
  useClickOutside(modalRef, closeModal);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-container" ref={modalRef}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum
      </p>
      <button onClick={closeModal}>Close Modal</button>
    </div>
  );
}

export default Modal;
