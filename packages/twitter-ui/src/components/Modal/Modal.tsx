import React, { useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement("#root");
interface ModalProps {
  // isOpen: boolean;
  // setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
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
