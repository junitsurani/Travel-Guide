import React from "react";

const Button = ({ text, styleType = "primary", onClick, className = "" }) => {
  const styles = {
    primary: `
      bg-blue-500 text-white py-2 px-6 rounded-full shadow-lg 
      hover:bg-primary-dark hover:shadow-xl hover:bg-opacity-90 transition-transform transform hover:scale-105 duration-300 ease-in-out
    `,
    secondary: `
      border border-[blue] text-primary py-2 px-6 rounded-full 
      hover:shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out
    `,
  };

  return (
    <button
        className={`${styles[styleType]} ${className}`}
        onClick={onClick}
    >
        {text}
    </button>
  );
};

export default Button;
