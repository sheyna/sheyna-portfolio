import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Header from "../../assets/Header/Header"
import SiteNav from "../../assets/SiteNav/SiteNav"
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Spinner from '../../assets/Spinner/Spinner';

import data from "../../portfolioData.json";
import { portfolioItemData } from '../../@types/portfolio';

import styles from "./PortfolioItem.module.css"

type portfolioParams = {
  id: string
};

const startObj = {
  id: 0,
  title: '',
  gitRepo: [{url: '', name: ''}],
  liveSite: '',
  description: '',
  features: [''],
  Array: [''],
  projectDate: '',
  techStack: [''],
  images: [{src: '', alt: ''}]
}


export default function PortfolioItem() {
  const navigate = useNavigate();
  const [ portfolioInfo, setPortfolioInfo ] = useState<portfolioItemData>(startObj);
  const [ isLoading, setIsLoading ] = useState<boolean>(true);
  const { id } = useParams<portfolioParams>();

  useEffect(() => {
    if (typeof(id) === 'string') {
      const itemData: portfolioItemData = data[parseInt(id)];
      setPortfolioInfo(itemData);
      setIsLoading(false);
    }
  }, [id]);

  if (isLoading) return <Spinner/>


  const { title,  description, projectDate, images, gitRepo, liveSite, techStack, features } = portfolioInfo;

  const imageComponent: React.ReactElement[] = images.map((image, idx) => {
    return (
      <img
        key={idx}
        src={`../${image.src}`}
        title={image.alt}
        alt={image.alt}
        className={styles.screenshots}
      />
    )
  })

  return (
    <>
    <Header/>
      <SiteNav/>
      <main id="main-content" className={styles.portfolioItem}>
        <h1 className={`pageTitle ${styles.pageTitle}`}>{title}</h1>
        <Typography variant="subtitle1" gutterBottom className={styles.projectDate}>{projectDate}
          </Typography>
        <Grid container spacing={2}>

          <Grid item xs={12} sm={6} md={8} lg={6}>
            { imageComponent }
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={6}>
          
          <Typography variant="body2" color="text" >
            GitHub repo: 
            {gitRepo.map((repo, idx) => {
              return (
                <Link className={styles.linkListItem} key={idx} href={repo.url} color="secondary">{repo.name}</Link>
              )
            })}
          </Typography>

          <Typography variant="body2" color="text" >
            Live site: <Link className={styles.linkListItem} href={liveSite} color="secondary">{title}</Link>
          </Typography>

          <Typography variant="body2" color="text" >
            Tech stack used:&nbsp;
            {techStack.map((str, idx) => {
              return (
                <span className={styles.stackList} key={idx}>{`${str}${idx + 1 === techStack.length ? ' ' : ', '}`}</span>
              )
            })}
          </Typography>

          <Typography variant="h3" color="text" className={styles.subhead}>
            Features
          </Typography>

          <List dense={true}>
            {features.map((item, idx) => {
              return (
              <ListItem key={idx}>
                <ListItemText
                  primary={item}
                />
              </ListItem>
              );
            })}
          </List>

          <Typography variant="body2" color="text" className={styles.bodyText}>
            {description}
          </Typography>

          <Button 
            size="large"
            variant="outlined"
            color="secondary"
            onClick={(e) => {
              e.preventDefault();
              navigate(-1);
            }}
          >back</Button>
          </Grid>
        </Grid>
      </main>
    </>
  );
}
