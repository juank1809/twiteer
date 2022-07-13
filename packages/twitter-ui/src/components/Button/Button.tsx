import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type: "primary";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = "primary",
  children,
  ...props
}) => {
  return (
    <button type="submit" className={`button button--${type}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
