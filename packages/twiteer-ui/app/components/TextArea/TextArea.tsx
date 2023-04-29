"use client";

import React from "react";

interface TextAreaProps {
  name: string;
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  minRows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  handleChange,
  value,
  minRows = 3,
}) => {
  return (
    <div className="text-box__container">
      <textarea
        id={name}
        className="text-box"
        name={name}
        value={value}
        onChange={handleChange}
        rows={3}
        cols={40}
      />
      <label className="text-box__label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default TextArea;
