import './App.css';
// import { ListProjects } from './Pages/ListProjects';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
// import { AddProject } from './Pages/AddProject';
// import { ProjectDetail } from "./Pages/ProjectDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { EditProject } from './Pages/EditProject';
// import { UserContext } from "./context/user.context";
// import { useContext } from 'react';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
import SignIn from './components/user/SignIn';
import SignUp from './components/user/SignUp';
import Copyright from './components/utilities/Copyright';
import { WorkoutEntry } from './pages/WorkoutEntry';
import { Home } from './pages/Home';
import { AddExercise } from './pages/AddExercise';
// import { IsPrivate } from "./components/IsPrivate";

function App() {
  // For the example on line 23
  // const value = useContext(UserContext);
  // console.log('value from app:>> ', value);
  // next Tuesday we will learn how to get users from the api that will be used on our projects.
  return (
    <div className="App">
      {/* Example of how context works line below...
      Logged In user is: {value.user} */}
      <ToastContainer />
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<ListProjects />} />
        <Route path="/projects" element={<ListProjects />} />
        <Route path="/projects/add" element={<IsPrivate><AddProject /></IsPrivate>} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/projects/:projectId/edit" element={<EditProject />} />*/}
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/signin" element={<SignIn />} />
        <Route path="/" element={<Home />} />
        <Route path="/workout-entry" element={<WorkoutEntry />} />
        <Route path="/addexercise" element={<AddExercise />} /> 
      </Routes>
      <Copyright/>
    </div>
  );
}

export default App;