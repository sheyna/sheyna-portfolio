import Header from "../../assets/Header/Header"
import SiteNav from "../../assets/SiteNav/SiteNav"
import PortfolioCard from "../../assets/PortfolioCard/PortfolioCard.tsx"
import Grid from "@mui/material/Grid"
import styles from "./Portfolio.module.css"

import data from "../../portfolioData.json";

export default function Portfolio() {
  return (
    <>
      <Header/>
      <SiteNav/>
      <main id="main-content">
      <h1 className="pageTitle">Portfolio</h1>
        <Grid container spacing={2} alignItems="stretch">
          {data.map(item => <Grid item xs={12} sm={6} md={5} lg={4} key={item.id} className={styles.stretch}><PortfolioCard item={item}/></Grid>)}
        </Grid>
      </main>
    </>
  )
}
