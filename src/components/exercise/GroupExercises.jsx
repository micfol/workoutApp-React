import { React, useState } from 'react'
import { SingleExercise } from "./SingleExercise";
import { workoutA, workoutB } from './workouts';

export const GroupExercises = (props) => {

    const {isWorkoutA} = props

    console.log('isWorkoutA :>> ', isWorkoutA);

    
    const [workout, setWorkout] = useState(null);

    isWorkoutA 
    ? setWorkout(workoutA)
    : setWorkout(workoutB)


    const handleClick = () => {
        console.log("You clicked a button.");
    };

    return (
        <>
        <SingleExercise exerciseName='Squats' workingWeight='20' onClick={handleClick} />
        <SingleExercise exerciseName='Bench Press' workingWeight='20' onClick={handleClick} />
        <SingleExercise exerciseName='Dead Lift' workingWeight='20' onClick={handleClick} />
            {/* <form onSubmit={handleSubmitForm}>
                <button type="submit">Finish Workout & Log</button>
            </form> */}
        </>
    );
};