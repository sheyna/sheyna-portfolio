
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import styles from "./PortfolioCard.module.css"

type portfolioItem = {
  title: string,
  gitRepo: Array<string>,
  liveSite: string,
  description: string,
  projectDate: string,
  techStack: Array<string>,
  images: Array<string>
}
// const { title, gitRepo, liveSite, description, projectDate, techStack, images }

export default function PortfolioCard(props: {item: portfolioItem}) {
  const { title,  description, projectDate, images } = props.item;
  return (
    <Card
      sx={{ maxWidth: 345 }}
      className={styles.portfolioCard}
    >
      <CardMedia
        sx={{ height: 220 }}
        image={images[0]}
        title={title}
      />
      <CardContent>
        <CardHeader
          title={title}
          subhead={projectDate}
          className={styles.cardTitle}
        />
      
        <Typography variant="body2" color="text">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={styles.actionsBar}>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
