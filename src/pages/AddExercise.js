// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { addExercise } from "../api";

// export const AddExercise = () => {
//     const [exerciseName, setexerciseName] = useState("");

//     const navigate = useNavigate();

//     const handleFormSubmit = async (e) => {
//         e.preventDefault();
//         await addExercise({ exerciseName });
//         navigate("/");
//     };

//     return (
//         <>
//         <form onSubmit={handleFormSubmit} >
//             <label labelfor="exerciseName">Exercise Name</label>
//             <input id="exerciseName" type="text" value={exerciseName}
//                 onChange={(e) => setexerciseName(e.target.value)} />

//             <button type="submit">Add Exercise</button>
//         </form>
//         </>
//     )
// }