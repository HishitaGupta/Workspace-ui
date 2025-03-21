import React from "react";

const Button = ({ children, className,icon, ...props }) => {
  return (
    <button
      className={`relative overflow-hidden rounded ${className}`}
      {...props}
    >
      {/* Inner content with fill effect on hover */}
      <div className="relative px-6 py-2 lg:px-8 lg:py-2 bg-white text-black overflow-hidden rounded-full text-md group poppins hover:border-white ">
        {/* The fill effect element */}
        <span className="absolute inset-0 bg-black w-0 group-hover:w-full transition-all duration-300 ease-in-out  "></span>
        
        {/* Text that changes color on hover */}
        <span className="relative z-10 group-hover:text-white font-medium transition-colors duration-300 ease-in-out flex justify-center items-center gap-2">
          {children}
          {icon}
        </span>
      </div>
    </button>
  );
};

export default Button;