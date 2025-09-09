import { Link } from "react-router";

interface NavLinkProps {
    text: string;
    href: string;
}

const NavLink = ({text, href}: NavLinkProps) => {
  return (
    <li className="py-2 px-4 hover:bg-gray-200 hover:text-gray-800 transition">
        <Link to={href}>{text}</Link>
    </li>
  )
}

export default NavLink