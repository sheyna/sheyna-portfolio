import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Footer from './assets/Footer/Footer'
import SpinnerFullPage from "./assets/Spinner/SpinnerFullPage";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css'

const Home = lazy(() => import('./views/Home/Home'));
const About = lazy(() => import('./views/About/About'));
const Resume = lazy(() => import('./views/Resume/Resume'));
const Portfolio = lazy(() => import('./views/Portfolio/Portfolio'));
const PortfolioItem = lazy(() => import('./views/PortfolioItem/PortfolioItem'));
const NotFound = lazy(() => import('./views/NotFound/NotFound'))

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#C3DB67',
      light: '#d0d5ba',
      dark: '#aeb490',
      contrastText: '#242a2e',
    },
    secondary: {
      light: '#C3DB67',
      main: '#4B5B0B',
      dark: '#ca4e6e',
      contrastText: '#242a2e',
    },
    success: {
      light: '#e29dae',
      main: '#D0627E',
      dark: '#ca4e6e',
      contrastText: '#242a2e',
    },
    info: {
      main: '#aaa'
    }    
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: ({theme}) => ({
          '&:hover': {
            backgroundColor: 'inherit',
            color: theme.palette.primary.main
          }
        })
      }
    },
    MuiButton: {
      styleOverrides: {
        root: ({theme}) => ({
          '&:hover': {
            backgroundColor: `${theme.palette.primary.main}30`, //https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
          }
      }),
      },
    }
  },
  typography: {
    fontFamily: [
      'Vollkorn', 
      'serif'
    ].join(','),
  },
});

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <ThemeProvider theme={customTheme}>
        <Suspense fallback={<SpinnerFullPage/>}>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path='portfolio/:id' element={
                <PortfolioItem/>
              }/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
          <Footer/>
        </Suspense>
      </ThemeProvider>
    </Router>
  )
}

export default App
