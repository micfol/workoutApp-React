import { getLocalUser, UserContext } from "../context/user.context";
import { useContext, useState, useEffect } from 'react';
import ProgressBar from '../components/home/ProgressBar';
import UpNextBox from '../components/home/UpNextBox';
import Button from '@mui/material/Button';
import BoltIcon from '@mui/icons-material/Bolt';
import { getAllWorkouts,  } from "../api";

export const Home = () => {
 
    const value = useContext(UserContext)
    const [upNext, setUpNext] = useState({isWorkoutA: true, goalProgress: 0})
    const [workoutData, setWorkoutData] = useState([])
   
    useEffect(() => {
        const user = getLocalUser();
        const allWorkouts = getAllWorkouts(user._id)
        setWorkoutData(allWorkouts) 
        const isWorkoutA = true || !workoutData[0].isWorkoutA
        const goalProgress = 0 || Number((workoutData.length/36)*100)
        setUpNext({
            isWorkoutA: isWorkoutA, 
            goalProgress: goalProgress
        });
        }, [])

    return (
        <>
        <h4>Welcome to StrongLiftr</h4>
        <h2>{value.user? `${value.user.firstName} ${value.user.lastName}` : null}</h2>
        <ProgressBar goalProgress={upNext.goalProgress} />
        <br></br>
        <p>Next Workout Exercises:</p>
        <UpNextBox isWorkoutA={upNext.isWorkoutA} />
        <br></br>
        <Button variant="contained" startIcon={<BoltIcon />} href='/workout-entry'>Start Workout</Button>
        </>
    )
}