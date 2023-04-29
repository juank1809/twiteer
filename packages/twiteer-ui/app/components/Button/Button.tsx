"use client";

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
    <button
      className={`
        font-bold
        py-2.5
        px-4
        no-underline
        text-center
        leading-5
        inline-block
        rounded-3xl
        ${buttonType === "primary" ? "bg-primary text-white" : ""}
        `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
