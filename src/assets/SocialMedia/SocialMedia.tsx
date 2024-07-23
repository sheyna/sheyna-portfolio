import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';

export default function SocialMedia() {
  return (
    <>
      <IconButton
        color="text"
        size="large"
        sx={{ "&:hover": { color: "primary" } }}
        aria-label="LinkedIn"
        onClick={() => window.open('https://www.linkedin.com/in/sheynawatkins')}
      >
        <LinkedInIcon fontSize="large"/>
      </IconButton>

      <IconButton
        color="text"
        size="large"
        sx={{ "&:hover": { color: "primary" } }}
        aria-label="GitHub"
        onClick={() => window.open('https://github.com/sheyna')}
      >
        <GitHubIcon fontSize="large"/>
      </IconButton>

      <IconButton
        color="text"
        size="large"
        sx={{ "&:hover": { color: "primary" } }}
        aria-label="Twitter"
        onClick={() => window.open('https://twitter.com/sheynaw')}
      >
        <TwitterIcon fontSize="large"/>
      </IconButton>
    </>
    );
}
