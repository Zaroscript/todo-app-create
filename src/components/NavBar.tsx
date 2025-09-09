import { Link } from "react-router";
import NavLink from "./NavLink";

const navLinks = [
  {
    text: "Todo",
    href: "/todo",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "blogs",
    href: "/blogs",
  },
  {
    text: "Contact",
    href: "/contact",
  },
];

const NavBar = () => {
  return (
    <nav className="bg-gray-400 flex justify-around items-center py-2">
      <div className="text-green-600 text-3xl ">
        <Link
         to="/todo">Todo<span className="text-white">s</span></Link>
      </div>

      <ul className="flex justify-between items-center">
        {
          // Home
          navLinks.map((link) => (
            <NavLink text={link.text} href={link.href} />
          ))
        }
      </ul>
    </nav>
  );
};

export default NavBar;
