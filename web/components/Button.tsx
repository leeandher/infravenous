import React from "react";
import Link from "next/link";

interface ButtonProps {
  href?: string;
  children: any;
  type?: "external" | "internal" | "button";
}

const Button = ({ children, href, type = "button" }: ButtonProps) => {
  switch (type) {
    case "external":
      return (
        <a href={href}>
          <button>{children}</button>
        </a>
      );
    case "internal":
      return (
        <Link href={href}>
          <button>{children}</button>
        </Link>
      );
    default:
      return <button>{children}</button>;
  }
};

export default Button;
