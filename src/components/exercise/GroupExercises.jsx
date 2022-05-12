import { React, useState, useEffect, useContext } from 'react';
import { workoutA, workoutB } from './workouts';
import { UserContext, getLocalUser } from '../../context/user.context.js';
import { exerciseEntry, getAllWorkouts } from '../../api.js';
import { Button, Divider, Stack, Typography } from '@mui/material';
import Loading from '../utilities/Loading';
import Icons from '../utilities/Icons';
import styled from '@emotion/styled';
import { useNavigate } from "react-router";


export const GroupExercises = () => {

    const value = useContext(UserContext);
    const [workout, setWorkout] = useState(null);
    const [isWorkoutA, setIsWorkoutA] = useState(true)
    const [workoutData, setWorkoutData] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const user = getLocalUser();
        const allWorkouts =  getAllWorkouts(user._id)
        setWorkoutData(allWorkouts) 
        const wasWorkoutA = workoutData[0] ? workoutData[0].isWorkouA : true
        setIsWorkoutA(!wasWorkoutA)
        isWorkoutA
            ? setWorkout(workoutA)
            : setWorkout(workoutB)
    }, [isWorkoutA]);

    const handleClick = (e, exercise, i) => {
        e.preventDefault();
        const copy = { ...workout[exercise] };
        copy.sets[i] > 0 ? copy.sets[i]-- : copy.sets[i] = 5;
        setWorkout({ ...workout, [exercise]: copy });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const workoutExercises = Object.values(workout);
        exerciseEntry({ isWorkoutA, workoutExercises, user: value.user._id });
        navigate("/");
    }

    const SetButton = styled(Button)(() => ({
        fontFamily: 'Permanent Marker',
        fontSize: '1.3rem',
    }));

    return (
        !value.user
            ? <Loading />
            : <Stack spacing={2} sx={{ py: 2 }}  divider={<Divider/>} justifyContent='space-evenly'>
                {
                    Object.entries(workout).map((exercise) => {
                        const { exerciseName, weight, sets } = exercise[1]
                        return (
                            <Stack key={exercise[0]} spacing={1}>
                                <Stack direction='row' sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                    {Icons[exercise[0]]}
                                    <Typography variant='h5'>{exerciseName}</Typography>
                                    <Typography variant='h6'>{weight}kg</Typography>
                                </Stack>

                                <Stack direction='row' justifyContent='space-around'>
                                    {sets.map((set, index, array) => {

                                        const switchColor = (num) => {
                                            if (num === 0) {
                                                return {color: 'error', variant: 'text'}
                                            } else if (num === 5) {
                                                return {color: 'primary', variant: 'contained'}
                                            } else {
                                                return {color: 'secondary', variant: 'contained'}
                                            }
                                        }
                                        return (
                                            <SetButton
                                                key={`${exercise[0]}-${index}`}
                                                
                                                onClick={(e) => handleClick(e, exercise[0], index)}
                                                {...switchColor(set)}
                                            >
                                                {set}
                                            </SetButton>
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
            </Stack>
    );
}

