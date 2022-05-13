import WorkoutSessionCard from "../components/progress/WorkoutSessionCard";
import { useState, useEffect, useContext } from 'react';
import { UserContext } from "../context/user.context";
import { progress } from "../api";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";


export const Progress = () => {

    const value = useContext(UserContext);
    
    useEffect(() => {
        value.getWorkoutHistory()
        console.log('value.sessionData', value.sessionData)
    }, [value.user, value.sessionData]);

    const list = value.sessionData.map((exercise) => {
        return <WorkoutSessionCard info={exercise} key={exercise._id}/>
    });
    
    return (
        <>
        <Box m={'2rem'}>
            <Typography 
            variant="p1" 
            fontSize="1.5rem"
            >
                {value.user? `${value.user.firstName} ${value.user.lastName}'s ` : null}Progress Page
            </Typography>
        </Box>
        {list}
        </>
    );
}