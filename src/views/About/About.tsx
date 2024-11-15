import Header from "../../assets/Header/Header"
import SiteNav from "../../assets/SiteNav/SiteNav"
import styles from "./About.module.css"

export default function About() {
  return (
    <>
      <Header/>
      <SiteNav/>
      <main id="mainContent">
        <h1 className="pageTitle">About</h1>
        <p>I am an experienced front-end web developer with 12+ years of experience in graphic design, coding, and visual storytelling. As an instructor in web design and development, I keep up to date on changes in technology to deliver the most up-to-date instruction. I bring my design skills, technical understanding, and background in print journalism to every role.</p>
        <p>Most recently, I worked for Code Fellows as the Lead Instructor for Front-End Development in a progressive and accelerated boot camp program. This role required great people skills to address students' needs and concerns, flexibility, and the knowledge to work with technical issues like cloud outages, internet connectivity, and unannounced application updates.</p>
        <p>I started my career working in local newsrooms doing graphic design and page design, where I won six design awards from the Society of Professional Journalists. I hired and trained design staff at The Chronicle of Centralia and created the newspaper's style guide for font treatment, colors, and general design treatments.</p>
        <p>In 2012, I moved to online design, creating banners, slideshows, and other promotions for local automotive dealerships, where my contract was extended multiple times. Since that career pivot, I’ve supported multiple companies in Front-End Development and Responsive Web Design, including mastering CSS.</p>
          <ul className={styles.list}>
            <li>Certified JavaScript Developer</li>
            <li>Graphic Design, UI Development</li>
            <li>React, MongoDB, JavaScript, HTML, CSS</li>
            <li>Companies: Cobalt Group/CDK Global, Sincro, Code Fellows</li>
            <li>Industries: Journalism, Advertising, Marketing, Education</li>
          </ul>
      </main>
    </>
  )
}
