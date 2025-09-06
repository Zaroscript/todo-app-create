import NavLink from './NavLink'

const NavBar = () => {
  return (
    <nav>
        <div className="logo">
            <img src="" alt="" />
        </div>

        <ul>
            <NavLink text="Home" href="/" />
            <NavLink text="About" href="/about" />
            <NavLink text="Contact" href="/contact" />
            <NavLink text="Todo" href="/todo" />
        </ul>
    </nav>
  )
}

export default NavBar