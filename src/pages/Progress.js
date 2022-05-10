import WorkoutSessionCard from "../components/progress/WorkoutSessionCard";
import { useState, useEffect, useContext } from 'react';
import { UserContext } from "../context/user.context";
import { progress } from "../api";


export const Progress = () => {

    const value = useContext(UserContext);
    

    useEffect(() => {
        value.getWorkoutHistory()
        console.log('value.sessionData', value.sessionData)
    }, [value.user]);

    const list = value.sessionData.map((exercise) => {
        return <WorkoutSessionCard info={exercise} key={exercise._id}/>
    });
    
    return (
        <>
        <h4>{value.user? `${value.user.firstName} ${value.user.lastName}'s ` : null}Progress Page</h4>
        {list}
        </>
    );
}