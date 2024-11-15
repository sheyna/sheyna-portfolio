import Header from "../../assets/Header/Header"
import SiteNav from "../../assets/SiteNav/SiteNav"
import styles from "./Resume.module.css"

export default function Resume() {
  return (
    <>
      <Header/>
      <SiteNav/>
      <main id="mainContent">
        <h1 className="pageTitle">Resume</h1>
        <p>Experienced Front-End Web Developer with 12+ years of experience designing and coding websites in fast-paced work environments and as an instructor in online academic settings.</p>
        <p>Continuously learning and developing new skills and technologies in web development, coding, and leading teams.</p>
        <p>Strong skills in hand-coding HTML, XML, CSS, and Javascript for responsive websites.</p>
        <p>Graphic Design skills in online and print media, including a lead design position at a daily newspaper.</p>
        <p>Outstanding communication skills with the ability to provide coaching and mentoring, set goals, and plan projects.</p>
        <h2>Expertise</h2>
        <section className={styles.stats}>
          <h3>Languages:</h3>
          <ul>
            <li>React</li>
            <li>Vite</li>
            <li>JavaScript</li>
            <li>CSS/Sass/Less</li>
            <li>TypeScript</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>HTML</li>
          </ul>
        </section>
        <section className={styles.stats}>
          <h3>Technologies:</h3>
          <ul>
            <li>Auth0</li>
            <li>MongoDB</li>
            <li>Axios</li>
            <li>WorkPress</li>
            <li>Redux</li>
            <li>Material UI</li>
          </ul>
        </section>
        <section className={styles.stats}>
          <h3>Tools:</h3>
          <ul>
            <li>Adobe Creative Suite (Photoshop, Illustrator)</li>
            <li>MailChimp</li>
            <li>Sketch/Miro/Familiar with Figma</li>
            <li>Zoom</li>
            <li>Google Suite</li>
            <li>Microsoft Office</li>
          </ul>
        </section>
        <section className={styles.stats}>
          <h3>Skills:</h3>
          <ul>
            <li>Front End Web Development</li>
            <li>UI/UX</li>
            <li>Graphic Design</li>
            <li>Collaboration with Design and Engineering Teams</li>
            <li>Curriculum Development</li>
            <li>Group Training</li>
            <li>Coaching</li>
            <li>Mentoring</li>
            <li>API Development</li>
            <li>eCommerce</li>
            <li>CI/CD</li>
          </ul>
        </section>
        <h2>Education</h2>
        <p className="hangingIndent no-margin-bottom">BACHELOR OF ARTS, Graphic Design</p>
        <p className="indentBlock">Northwest Nazarene University &mdash; Nampa, Idaho, 2001</p>

        <p className="hangingIndent no-margin-bottom">CERTIFICATE, JavaScript</p>
        <p className="indentBlock">University of Washington, Continuum College, Professional & Continuing Education &mdash; Seattle, Wash., 2018</p>

        <p className="hangingIndent no-margin-bottom">CERTIFICATE, Front-End, UX, Design and Development</p>
        <p className="indentBlock">Code Fellows &mdash; Seattle, Wash., 2014
        Certificate, </p>

      </main>
    </>
  )
}
