import Header from "../../assets/Header/Header"
import SiteNav from "../../assets/SiteNav/SiteNav"
import styles from "./About.module.css"

export default function About() {
  return (
    <>
      <Header/>
      <SiteNav page="about"/>
      <main id="mainContent">
        <h1 tabindex="0" className="pageTitle">About</h1>
        <p tabindex="0">I am a front-end web developer and graphic designer with a background in journalism. As a visual storyteller I marry code, copy and images to bring promotions and web applications to life.</p>
        <h2 tabindex="0">Technical Skills</h2>
        <section className={styles.stats}>
          <h3 tabindex="0">Languages:</h3>
          <ul>
            <li tabindex="0">React</li>
            <li tabindex="0">Vite</li>
            <li tabindex="0">JavaScript</li>
            <li tabindex="0">CSS/Sass/Less</li>
            <li tabindex="0">TypeScript</li>
            <li tabindex="0">Express.js</li>
            <li tabindex="0">Node.js</li>
            <li tabindex="0">HTML</li>
          </ul>
        </section>
        <section className={styles.stats}>
          <h3 tabindex="0">Technologies:</h3>
          <ul>
            <li tabindex="0">Auth0</li>
            <li tabindex="0">MongoDB</li>
            <li tabindex="0">Axios</li>
            <li tabindex="0">WorkPress</li>
            <li tabindex="0">Redux</li>
            <li tabindex="0">Material UI</li>
          </ul>
        </section>
        <section className={styles.stats}>
          <h3 tabindex="0">Tools:</h3>
          <ul>
            <li tabindex="0">Adobe Creative Suite (Photoshop, Illustrator)</li>
            <li tabindex="0">MailChimp</li>
            <li tabindex="0">Sketch/Miro</li>
            <li tabindex="0">Zoom</li>
            <li tabindex="0">Google Suite</li>
            <li tabindex="0">Microsoft Office</li>
          </ul>
        </section>
        <section className={styles.stats}>
          <h3 tabindex="0">Skills:</h3>
          <ul>
            <li tabindex="0">Front End Web Development</li>
            <li tabindex="0">UI/UX</li>
            <li tabindex="0">Graphic Design</li>
            <li tabindex="0">Collaboration with Design and Engineering Teams</li>
            <li tabindex="0">Curriculum Development</li>
            <li tabindex="0">Group Training</li>
            <li tabindex="0">Coaching</li>
            <li tabindex="0">Mentoring</li>
            <li tabindex="0">API Development</li>
            <li tabindex="0">eCommerce</li>
            <li tabindex="0">CI/CD</li>
          </ul>
        </section>
        <h2 tabindex="0">Education</h2>
        <p className="hangingIndent no-margin-bottom" tabindex="0">BACHELOR OF ARTS, Graphic Design</p>
        <p className="indentBlock">Northwest Nazarene University &mdash; Nampa, Idaho, 2001</p>

        <p className="hangingIndent no-margin-bottom" tabindex="0">CERTIFICATE, JavaScript</p>
        <p className="indentBlock">University of Washington, Continuum College, Professional & Continuing Education &mdash; Seattle, Wash., 2018</p>

        <p className="hangingIndent no-margin-bottom" tabindex="0">CERTIFICATE, Front-End, UX, Design and Development</p>
        <p className="indentBlock">Code Fellows &mdash; Seattle, Wash., 2014
        Certificate, </p>

        
      </main>
    </>
  )
}
