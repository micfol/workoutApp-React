import { React, useState, useEffect, useContext } from 'react'
import { SingleExercise } from "./SingleExercise";
import { workoutA, workoutB } from './workouts';
import {UserContext} from '../../context/user.context.js';
import { exerciseEntry } from '../../api.js';
import Button from '@mui/material/Button';;

export const GroupExercises = (props) => {
   
    const value = useContext(UserContext)

    const {isWorkoutA} = props

    const [workout, setWorkout] = useState(null);

    useEffect(() => {
        isWorkoutA 
            ? setWorkout(workoutA)
            : setWorkout(workoutB)
    }, [isWorkoutA])
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const workoutExercises = Object.values(workout)
        console.log('workoutExercises', workoutExercises) //Array of the three exercise objects
        
        const response = await exerciseEntry({isWorkoutA, workoutExercises, user: value.user._id })
        console.log('response', response)
    }

    const handleClick = (e) => {
        console.log("You clicked a button.");
    };


    return (
        <>
        <SingleExercise exerciseName='Squats' workingWeight='20' onClick={handleClick} />
        <SingleExercise exerciseName='Bench Press' workingWeight='20' onClick={handleClick} />
        <SingleExercise exerciseName='Dead Lift' workingWeight='20' onClick={handleClick} />
        
        <form onSubmit={handleSubmit}>
        <Button variant="contained" type="submit">Finish Workout & Log</Button>
        </form>
        </>
    );
};