import React from "react";

const Button = ({ title }: any) => {
  return (
    <button
      className="bg-[#15151f] hover:bg-[#383849] text-white rounded-full px-8 py-4 duration-300 ease-in"
      type="submit"
    >
      {title}
    </button>
  );
};

export default Button;
