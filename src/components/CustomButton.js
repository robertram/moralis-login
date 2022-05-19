import React from "react";

const CustomButton = ({ text, onClick, isAuthenticating }) => {
  return (
    <button
      onClick={onClick}
      className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
    >
      {isAuthenticating ? "loading" : text}
    </button>
  );
};

export default CustomButton;
