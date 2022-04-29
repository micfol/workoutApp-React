import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { WorkoutEntry } from './pages/WorkoutEntry';
import { Home } from './pages/Home';
import { AddExercise } from './pages/AddExercise';
// import { IsPrivate } from "./components/IsPrivate";

function App() {
 
  return (
    <div className="App">
      {/* Example of how context works line below...
      Logged In user is: {value.user} */}
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/workout-entry" element={<WorkoutEntry />} />
        <Route path="/addexercise" element={<AddExercise />} />
      </Routes>
    </div>
  );
}

export default App;