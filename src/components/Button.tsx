import React from "react";

interface Props {
  classes?: string;
  type?: "button" | "submit" | "reset";
  label: string;
}

const Button: React.FC<Props> = ({ classes, type, label }) => {
  return (
    <button
      type={type}
      className={`bg-blue-500 hover:bg-blue-600 text-sm font-semibold py-2 px-4 rounded ${classes}`}>
      {label}
    </button>
  );
};

export default Button;
