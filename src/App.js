import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';
import Copyright from './components/utilities/Copyright';
import { Home } from './pages/Home';
import { AddExercise } from './pages/AddExercise';
import TopBar from './components/TopBar';
import { Container, CssBaseline, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { themeOptions } from './components/utilities/theme';
import BottomNav from './components/BottomNav';
import Loading from './components/utilities/Loading';
import { ExerciseEntry } from './pages/ExerciseEntry';

function App() {
  
  const customTheme = createTheme(themeOptions)
  return (
    <ThemeProvider theme={customTheme}>

      <div className="App">

        <Navbar />
        <TopBar />
        <Toolbar />
        <Container maxWidth='xs'>

        <Routes>
   
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Home />} />
          <Route path="/workout-entry" element={<ExerciseEntry />} />
          <Route path="/addexercise" element={<AddExercise />} />
          <Route path="/loading" element={<Loading />} />

        </Routes>
        </Container>
        <Copyright />
        <BottomNav/>
      </div>        
      </ThemeProvider>

      );
}
      export default App;