import { UserContext } from "../context/user.context";
import { useContext } from 'react';
import ProgressBar from '../components/home/ProgressBar';
import UpNextBox from '../components/home/UpNextBox';
import Button from '@mui/material/Button';
import BoltIcon from '@mui/icons-material/Bolt';
import { useNavigate } from "react-router";

export const Home = () => {
 
    const navigate = useNavigate();
    const value = useContext(UserContext)
    
    return (
        <>
        <h4>Welcome to StrongLiftr</h4>
        <h2>{value.user? `${value.user.firstName} ${value.user.lastName}` : null}</h2>
        <ProgressBar />
        <br></br>
        <p>Next Workout Exercises:</p>
        <UpNextBox />
        <br></br>
        <Button variant="contained" startIcon={<BoltIcon />} href={'/workout-entry'}>Start Workout</Button>
        </>
    )
}