import Logo from "../../assets/Logo/Logo"
import { Link } from "react-router-dom"
import SocialMedia from '../SocialMedia/SocialMedia';
import styles from "./Header.module.css"

type headerProps = {
  additionalClass?: string
}

export default function Header({ additionalClass }: headerProps) {
  let headerStyles = styles.siteHeader;
  if (additionalClass) headerStyles += ` ${styles[additionalClass]}`;
  
  return (
    <header role="banner" className={headerStyles} id="headerTarget">
      <Link to="#mainContent" className="visually-hidden">Skip to main content
  </Link>
      
      {/* <a id="responsive-menu-button" href="#sidr-main">
        <span className="icon-mobilemenu"></span>
      </a> */}
      <Logo/>
      <section id="social-header" className="icon-links--horizontal">
        <h2 className="visually-hidden">Social Media Links</h2>
        <SocialMedia/>
      </section>
    </header>
  )
}
