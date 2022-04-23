import './App.css';
// import { ListProjects } from './Pages/ListProjects';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
// import { AddProject } from './Pages/AddProject';
// import { ProjectDetail } from "./Pages/ProjectDetail";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { EditProject } from './Pages/EditProject';
import { UserContext } from "./context/user.context";
import { useContext } from 'react';
import { Signup } from './pages/Signup';
import { Login } from './pages/Login';
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
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;