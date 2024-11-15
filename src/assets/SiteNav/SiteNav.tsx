import { NavLink } from "react-router-dom"
import styles from "./SiteNav.module.css"

type sitNavProps = {
  additionalClass?: string,
}

export default function SiteNav({ additionalClass }: sitNavProps) {
  let navStyles = `${styles.navItems} navLinks`;
  if (additionalClass) navStyles += ` ${styles[additionalClass]}`;

  return (
    <nav className={navStyles} id="navTarget">
      <ul>
        <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
        </li>
        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  )
}
