import { React, useState, useEffect, useContext } from 'react'
import { workoutA, workoutB } from './workouts';
import { UserContext } from '../../context/user.context.js';
import { exerciseEntry } from '../../api.js';
import { Button, Container, Stack, Typography } from '@mui/material';
import Loading from '../utilities/Loading';


export const GroupExercises = (props) => {

    const { isWorkoutA } = props
    const value = useContext(UserContext)
    const [workout, setWorkout] = useState(null);

    useEffect(() => {
        isWorkoutA
            ? setWorkout(workoutA)
            : setWorkout(workoutB)
    }, [isWorkoutA])

    const handleClick = (e, exercise, i) => {
        e.preventDefault();
        const copy= {...workout[exercise]};
        copy.sets[i] > 0 ? copy.sets[i] -- : copy.sets[i] = 5
        setWorkout({...workout, [exercise]: copy})
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        const workoutExercises = Object.values(workout)
        const response = await exerciseEntry({ isWorkoutA, workoutExercises, user: value.user._id })
        console.log('response', response)

    }

    




    return (
            !value.user
                ? <Loading />
                : <Container>
                    {
                        Object.entries(workout).map((exercise) => {
                            const {exerciseName, weight, sets} = exercise[1]
                            return (
                                <Stack key={exercise[0]} spacing={2}>
                                    <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography variant='h5'>{exerciseName}</Typography>
                                        <Typography variant='h6'>{weight}kg</Typography>
                                    </Stack>

                                    <Stack direction='row' spacing={1}>
                                        {sets.map((set, index, array) => {
                                            return (
                                                <>
                                                <Button key={`${exercise[0]}-${index}`} fullWidth variant='outlined' onClick={(e) => handleClick(e, exercise[0], index)}>{set}</Button>
                                    
                                                </>
                                            )
                                        })}
                                    </Stack>
                                </Stack>
                            );
                        })
                    }

                    <form onSubmit={handleSubmit}>
                        <Button variant="contained" type="submit" sx={{ m: 2 }}>Finish Workout & Log</Button>
                    </form>
                </Container>
            
    );
};