import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: "primary";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  buttonType = "primary",
  children,
  ...props
}) => {
  return (
    <button className={`button button--${buttonType}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
