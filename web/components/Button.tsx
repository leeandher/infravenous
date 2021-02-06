import React from "react";
import Link from "next/link";

interface Props {
  href?: string;
  children: any;
  type?: "external" | "internal" | "button";
}

const Button = ({ children, href, type = "button" }: Props) => {
  let styling = `
    w-full
    flex
    items-center
    justify-center
    px-8
    py-3
    border-transparent
    text-base
    font-medium
    rounded-md
    text-pink-700
    bg-pink-100
    hover:bg-pink-200
  `;
  switch (type) {
    case "external":
      return (
        <a href={href} className={styling}>
          <button>{children}</button>
        </a>
      );
    case "internal":
      return (
        <Link href={href}>
          <button className={styling}>{children}</button>
        </Link>
      );
    default:
      return <button className={styling}>{children}</button>;
  }
};

export default Button;
