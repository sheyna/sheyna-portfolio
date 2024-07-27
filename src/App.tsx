// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
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

const theme = createTheme({
  palette: {
    primary: {
      main: '#C3DB67',
      light: '#d0d5ba',
      dark: '#aeb490',
      contrastText: '#242a2e',
    },
    secondary: {
      light: '#e29dae',
      main: '#D0627E',
      dark: '#ca4e6e',
      contrastText: '#242a2e',
    },
    text: {
      main: '#aaa',
      primary: '#242a2e',
      seconardy: '#aaa',
    },
    overrides: {
      MuiIconButton: {
        root: {
          '&:hover': {
            backgroundColor: 'inherit',
            color: '#C3DB67',
          }
        }
      }
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
      <ThemeProvider theme={theme}>
        <Suspense fallback={<SpinnerFullPage/>}>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/portfolio" element={<Portfolio/>}/>
          </Routes>
          <Footer/>
        </Suspense>
      </ThemeProvider>
    </Router>
  )
}

export default App
