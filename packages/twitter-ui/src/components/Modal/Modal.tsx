import React from "react";
import ReactModal from "react-modal";

if (process.env.NODE_ENV !== "test") ReactModal.setAppElement("#root");

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, setIsOpen }) => {
  return (
    <ReactModal
      className="modal"
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
