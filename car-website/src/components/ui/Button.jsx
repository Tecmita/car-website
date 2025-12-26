import React from "react";

const Button = ({ icon: Icon, label, onClick, className, active }) => {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center justify-center
        gap-6
        px-4 py-2
        font-semibold   
        rounded-lg
        ${
          active
            ? "bg-[#4177DC] text-white"
            : "bg-[#111213] text-white hover:opacity-100"
        }
        hover:bg-[#4177DC]
        transition-colors duration-200
        ${className || ""}
        `}
    >
      {Icon && <Icon className="h-5 w-5" />}
      {label && <span>{label} </span>}
    </button>
  );
};

export default Button;
