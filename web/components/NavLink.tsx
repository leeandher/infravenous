import Link from "next/link";

function NavLink() {
  const wrapperStyles = `
    whitespace-nowrap
    self-center
    rounded-full
    px-5
    py-2
    text-xl
    font-semibold
    hover:bg-pink-100
    cursor-pointer
  `;
  return (
    <Link href="/about">
      <div className={wrapperStyles}>Sign Up</div>
    </Link>
  );
}

export default NavLink;
