import WorkoutSessionCard from "../components/progress/WorkoutSessionCard";
import { useState, useEffect, useContext } from 'react';
import { UserContext } from "../context/user.context";
import { progress } from "../api";


export const Progress = () => {

    const value = useContext(UserContext);
    const [sessionData, setSessionData] = useState([]);

    async function getWorkoutHistory() {
        const user = value.user._id;
        const response = await progress(user);
        setSessionData(response.data)
        console.log('response.data :>> ', response.data);
    }

    useEffect(() => {
        getWorkoutHistory()
    }, [value.user]);

    const list = sessionData.map((exercise) => {
        return <WorkoutSessionCard info={exercise} key={exercise._id}/>
    });
    
    return (
        <>
        <h4>{value.user? `${value.user.firstName} ${value.user.lastName}'s ` : null}Progress Page</h4>
        {list}
        </>
    );
}