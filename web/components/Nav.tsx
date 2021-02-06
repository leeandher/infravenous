import Link from "next/link";
import NavLink from "./NavLink";
import { useUser } from "./User";

function Nav() {
  const user = useUser();
  console.log(user);
  return (
    <nav className="flex">
      <NavLink />
    </nav>
  );
}

export default Nav;
