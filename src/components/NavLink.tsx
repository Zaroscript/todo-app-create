
interface NavLinkProps {
    text: string;
    href: string;
}

const NavLink = ({text, href}: NavLinkProps) => {
  return (
    <li>
        <a href={href}>{text}</a>
    </li>
  )
}

export default NavLink