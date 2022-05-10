// import { useContext, useState } from "react";
// import { exerciseEntry } from "../api";
// import { useNavigate } from "react-router";
// import { Button, Stack, Typography} from "@mui/material";
// import { UserContext } from "../context/user.context";

// export const ExerciseEntry = () => {

//     const setObj = {
//         set1: 5,
//         set2: 5,
//         set3: 5,
//         set4: 5,
//         set5: 5
//     };

//     const value = useContext(UserContext);
//     const [exerciseName, setExerciseName] = useState("Squats");
//     const [sets, setSets] = useState(setObj);
//     const [weight, setWeight] = useState(20);

//     const navigate = useNavigate();

//     const handleClick = (e, param) => {
//         e.preventDefault()
//         let setName= 'set'.concat(param)
//         sets[setName] > 0
//             ? setSets({ ...sets, [setName]: sets[setName] - 1 })
//             : setSets({ ...sets, [setName]: 5 })
//     }

//     const handleSubmitForm = async (e) => {
//         e.preventDefault();
//         await exerciseEntry({ exerciseName, sets: Object.values(sets), weight: Number(weight), user: value.user._id });
//         console.log({ exerciseName, sets: Object.values(sets), weight: Number(weight), user: value.user._id})
//         navigate("/");
//     };

//     return (
//         <>
//         <Stack direction='column' spacing={3} sx={{justifyContent: 'space-evenly'}}>
//             <Typography variant='h3'>{exerciseName}</Typography>
//             <Typography variant='h5'>Working Weight: {weight}kg</Typography>
                    
//             <Stack direction='row' spacing={2}>

//                     <Button key="first-set" variant='outlined' color={"secondary"} onClick={(e) => handleClick(e, 1)}>{sets.set1}</Button>
                
//                     <Button key='second-set' variant='contained' onClick={(e) => handleClick(e, 2)}>{sets.set2}</Button>

//                     <Button key='third-set' variant='contained' onClick={(e) => handleClick(e, 3)}>{sets.set3}</Button>

//                     <Button key='fourth-set' variant='contained' onClick={(e) => handleClick(e, 4)}>{sets.set4}</Button>

//                     <Button key='fifth-set' variant='contained' onClick={(e) => handleClick(e, 5)}>{sets.set5}</Button>
//             </Stack>
//             <form onSubmit={handleSubmitForm}>
//                 <button type="submit">Finish Workout & Log</button>
//             </form>
//         </Stack>
//         </>
//     );
// };