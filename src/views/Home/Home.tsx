import Header from "../../assets/Header/Header"
import SiteNav from "../../assets/SiteNav/SiteNav"
// import styles from "./Home.module.css"


export default function Home() {
  return (
    <>
      <Header additionalClass="siteHeaderOnHome"/>
      <SiteNav additionalClass="navItemsOnHome"/>
    </>
  );
}
