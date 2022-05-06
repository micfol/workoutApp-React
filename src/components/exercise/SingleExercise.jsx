import { useState } from "react";
import { Button, Stack, Typography} from "@mui/material";

export const SingleExercise = (props) => {

    const { onClick, exerciseName, workingWeight } = props;

    const setObj = {
        set1: 5,
        set2: 5,
        set3: 5,
        set4: 5,
        set5: 5
    };

    // const [exerciseName, setExerciseName] = useState("Squats");
    // const [weight, setWeight] = useState(20);
    // const [sets, setSets] = useState(setObj);

    return (
        <>
        <Stack direction='column' spacing={3} sx={{justifyContent: 'space-evenly'}}>
            <Typography variant='h3'>{exerciseName}</Typography>
            <Typography variant='h5'>Working Weight: {workingWeight}kg</Typography>
                    
            <Stack direction='row' spacing={2}>
                    <Button key="first-set" variant='contained' onClick={(e) => onClick(e, 1)}>{sets[exerciseName].set1}</Button>
                    <Button key='second-set' variant='contained' onClick={(e) => onClick(e, 2)}>{sets[exerciseName].set2}</Button>
                    <Button key='third-set' variant='contained' onClick={(e) => onClick(e, 3)}>{sets[exerciseName].set3}</Button>
                    <Button key='fourth-set' variant='contained' onClick={(e) => onClick(e, 4)}>{sets[exerciseName].set4}</Button>
                    <Button key='fifth-set' variant='contained' onClick={(e) => onClick(e, 5)}>{sets[exerciseName].set5}</Button>
                    
                    <Button key="test" onClick={props.onClick}>Test Button</Button>
            </Stack>
        </Stack>
        </>
    );
}