import React from "react";

type ButtonType = "primary" | "secondary" | "ghost";

const Button = ({
  type = "primary",
  className,
  children,
}: {
  type?: ButtonType;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <button
      className={`text-xs ${
        type === "primary"
          ? "bg-sky-700"
          : type === "secondary"
          ? "bg-orange-500"
          : "border-2 border-neutral-300 text-neutral-600 font-semibold"
      }  text-neutral-100 rounded-sm px-6 py-2 tracking-wide font-medium cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
