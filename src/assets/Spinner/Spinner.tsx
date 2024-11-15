
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import "./Spinner.css";

export default function Spinner() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}
