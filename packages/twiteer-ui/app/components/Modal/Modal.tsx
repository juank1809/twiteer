"use client";

import React from "react";
import ReactModal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

if (process.env.NODE_ENV !== "test") ReactModal.setAppElement("#modals");

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, setIsOpen }) => {
  return (
    <ReactModal
      className="p-5 absolute md:w-[38rem] md:top-6 left-2/4 translate-x-[-50%] md:min-w-min my-0 mx-auto md:h-min h-full bottom-10 inline-block rounded-3xl bg-black overflow-hidden"
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
    >
      <div className="flex flex-col gap-5">
        <AiOutlineClose className="fill-white cursor-pointer !w-5 !h-5" />
        {children}
      </div>
    </ReactModal>
  );
};

export default Modal;
