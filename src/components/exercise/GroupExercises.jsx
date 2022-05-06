import { React, useState, useEffect, useContext } from 'react'
import { SingleExercise } from "./SingleExercise";
import { workoutA, workoutB } from './workouts';
import {UserContext} from '../../context/user.context.js'
import { exerciseEntry } from '../../api.js'

export const GroupExercises = (props) => {
   
    const value = useContext(UserContext)

    const {isWorkoutA} = props

    const [workout, setWorkout] = useState(null);

    useEffect(() => {
        isWorkoutA 
            ? setWorkout({workoutA})
            : setWorkout({workoutB})
    }, [isWorkoutA])
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const workoutType = Object.keys(workout)[0] //workoutA or workoutB
        const workoutExercises = Object.values(workout[workoutType]) //Array of the three exercise objects
        
        workoutExercises.forEach((x) => { 
            x.user = value.user._id         // Adds _id to each exercise object.
        });
        console.log('workoutExercises', workoutExercises)
        await exerciseEntry({workoutType, workoutExercises })
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
        <button type="submit">Finish Workout & Log</button>
        </form>
        </>
    );
};