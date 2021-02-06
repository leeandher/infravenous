import React from "react";

interface Props {
  children: any;
}

const Text = ({ children }: Props) => {
  const styling = `
    text-base 
    text-gray-600 
    mt-3  
    sm:mt-5 
    sm:text-lg 
    sm:max-w-xl 
    sm:mx-auto 
    md:mt-5 
    md:text-xl 
    lg:mx-0
  `;
  return <p className={styling}>{children}</p>;
};

export default Text;
