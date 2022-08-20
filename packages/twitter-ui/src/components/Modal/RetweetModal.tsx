import { Modal } from ".";
import React from "react";
import { ITweet } from "../../types/tweet";
import { RetweetForm } from "../Form";

interface RetweetModalProps {
  tweet: ITweet;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const RetweetModal: React.FC<RetweetModalProps> = ({
  tweet,
  isOpen,
  setIsOpen,
}) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <RetweetForm tweet={tweet} />
    </Modal>
  );
};

export default RetweetModal;
