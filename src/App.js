import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { AddExercise } from './pages/AddExercise';
import { ExerciseEntry } from './pages/ExerciseEntry';
import FitnessByBodyPart from './components/FitnessByBodyPartCard';
import axios from 'axios';
import { EducationHome } from './pages/EducationHome';
import { useEffect, useState } from 'react';
// import { IsPrivate } from "./components/IsPrivate";


function App() {

  const apikey = process.env.REACT_APP_X_RAPIDAPI_KEY;
  const getExerciseAPI = async () => {

    const options = {
      method: 'GET',
      url: `https://exercisedb.p.rapidapi.com/exercises/`,
      headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': apikey
      }
    };
    
    const response = await axios.request(options);
      console.log(response.data);
    return response.data;
    }

    const [fitness, setFitness] = useState([]);

    async function getFitness(query, searchTerm) {
      const queryType = {
      "all" : "/",
      "byId" : "/" + searchTerm,
      "search" : "/search?q=" + searchTerm
      };
      const response = await axios.get("https://exercisedb.p.rapidapi.com/exercises" + queryType[query]);
     setFitness(response.data);
    };
  
    useEffect(() => {
      getFitness("all")
    }, []);

  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/exerciseEntry" element={<ExerciseEntry />} />
        <Route path="/addexercise" element={<AddExercise />} />
        <Route path="/education" element={<EducationHome />} />
      </Routes>
    </div>
  );
}

export default App;