import WorkoutSessionCard from "../components/progress/WorkoutSessionCard";
import { useEffect, useContext } from 'react';
import { UserContext } from "../context/user.context";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { IsPrivate } from "../components/IsPrivate";


export const Progress = () => {

    const value = useContext(UserContext);
    
    useEffect(() => {
        value.getWorkoutHistory()
        console.log('value.sessionData', value.sessionData)
    }, [value, value.user, value.sessionData]);

    const list = value.sessionData.map((exercise) => {
        return <WorkoutSessionCard info={exercise} key={exercise._id}/>
    });
    
    return (
        <>
        <IsPrivate>
            <Box m={'2rem'}>
                <Typography 
                variant="p2" 
                >
                    {value.user? `${value.user.firstName} ${value.user.lastName}'s ` : null}Workout Entries
                </Typography>
            </Box>
            {list}
        </IsPrivate>
        </>
    );
}