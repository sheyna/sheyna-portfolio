
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import { portfolioItemData } from '../../@types/portfolio';

import styles from "./PortfolioCard.module.css"

// const { title, gitRepo, liveSite, description, projectDate, techStack, images }

export default function PortfolioCard(props: {item: portfolioItemData}) {
  const { title, images, id } = props.item;
  return (
    <Card
      sx={{ maxWidth: 345 }}
      className={styles.portfolioCard}
    >
      <Link to={`/portfolio/${id}`}>
        <CardMedia
          sx={{ height: 220 }}
          image={images[0].src}
          title={title}
        />
      </Link>
      <CardContent>
        <CardHeader
          title={title}
          className={styles.cardTitle}
        />
      </CardContent>
      <CardActions className={styles.actionsBar}>
        <Button 
          size="small"
          color="secondary"
          href={`/portfolio/${id}`}
        >Learn More</Button>
      </CardActions>
    </Card>
  );
}
