import { React, useState, useEffect, useContext } from 'react'
import { SingleExercise } from "./SingleExercise";
import { workoutA, workoutB } from './workouts';
import { UserContext } from '../../context/user.context.js';
import { exerciseEntry } from '../../api.js';
import {Button, Container} from '@mui/material';
import {IsPrivate} from '../IsPrivate.js'
import Loading from '../utilities/Loading';

export const GroupExercises = (props) => {

    const value = useContext(UserContext)

    console.log('value.user', value.user)
    const { isWorkoutA } = props

    const [workout, setWorkout] = useState(null);

    useEffect(() => {
        isWorkoutA
            ? setWorkout(workoutA)
            : setWorkout(workoutB)
    }, [isWorkoutA])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const workoutExercises = Object.values(workout)
        console.log('Object.entries(workout)', Object.entries(workout)) //Array of the three exercise objects

        const response = await exerciseEntry({ isWorkoutA, workoutExercises, user: value.user._id })
        console.log('response', response)
    }

    const handleClick = (e) => {
        console.log("You clicked a button.");
    };

   


    return (
        <IsPrivate>
            {(!value.user)
                ? <Loading />
                : <Container>
                    {
                        Object.values(workout).map((exercise) => {
                            return (
                                <SingleExercise
                                    exerciseName={exercise.exerciseName}
                                    workingWeight={exercise.weight}
                                    onClick={handleClick}
                                />
                            )
                        })
                    }
                    <form onSubmit={handleSubmit}>
                        <Button variant="contained" type="submit">Finish Workout & Log</Button>
                    </form>
                </Container>
            }
        </IsPrivate>
    );
};