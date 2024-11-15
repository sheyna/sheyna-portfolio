import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.siteFooter} id="footerTarget">
      <section id="social-footer" className="icon-links--horizontal">
        <h2 hidden>Social Media Links</h2>
        {/* <a href="https://www.behance.net/SheynaWatkins" title="Behance" target="_blank"><span className="icon-behance"></span></a>
        <a href="https://github.com/sheyna/" title="GitHub" target="_blank"><span className="icon-github"></span></a>
        <a href="https://twitter.com/SheynaW" title="Twitter" target="_blank"><span className="icon-twitter"></span></a>
        <a href="https://www.linkedin.com/in/sheynawatkins" title="LinkedIn" target="_blank"><span className="icon-linkedin"></span></a> */}
      </section>
      <p className={styles.copyrightNote}>&copy; 2024, Sheyna Watkins</p>
  </footer>
  )
}
