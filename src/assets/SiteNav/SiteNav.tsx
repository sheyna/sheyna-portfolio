import { Link } from "react-router-dom"
import styles from "./SiteNav.module.css"

export default function SiteNav(props) {
  let navStyles = styles.navItems;
  if (props.additionalClass) navStyles += ` ${styles[props.additionalClass]}`;

  return (
    <nav className={navStyles} id="navTarget">
      <ul>
        <li>
          <Link to="/portfolio" className={props.page === 'portfolio' && styles.currentPage}>Portfolio</Link>
        </li>
        <li>
          <Link to="/resume" className={props.page === 'resume' && styles.currentPage}>Resume</Link>
        </li>
        <li>
          <Link to="/about" className={props.page === 'about' && styles.currentPage}>About</Link>
        </li>
      </ul>
    </nav>
  )
}
