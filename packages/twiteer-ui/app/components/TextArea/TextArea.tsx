"use client";

import React, { useCallback } from "react";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import useAutoFocus from "../../hooks/useAutoFocus";

interface TextAreaProps {
  name: string;
  placeholder: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  minRows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  placeholder,
  handleChange,
  value,
  minRows = 3,
}) => {
  const retweetInput = useAutoFocus();
  return (
    <TextareaAutosize
      placeholder={placeholder}
      ref={retweetInput}
      onChange={handleChange}
      className="bg-black mt-12 w-full text-xl text-white outline-none resize-none"
    />
  );
};

export default TextArea;
