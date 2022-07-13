import React from "react";
import TextareaAutosize from "react-textarea-autosize";

interface TweetTextAreaProps {
  name: string;
  label: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  minRows?: number;
}

const TweetTextArea: React.FC<TweetTextAreaProps> = ({
  name,
  label,
  handleChange,
  value,
  minRows = 3,
}) => {
  return (
    <div className="text-box__container">
      <TextareaAutosize
        id={name}
        minRows={minRows}
        maxRows={4}
        className="text-box"
        name={name}
        value={value}
        onChange={handleChange}
        required
        rows={3}
        cols={40}
      />
      <label className="text-box__label" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default TweetTextArea;
