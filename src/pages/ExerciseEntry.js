import { useState } from "react";
import { exerciseEntry } from "../api";
import { useNavigate } from "react-router";

export const ExerciseEntry = () => {

    const setObj = {
        set1: 5,
        set2: 5,
        set3: 5,
        set4: 5,
        set5: 5
    };

    const [exerciseType, setExerciseType] = useState("");
    const [sets, setSets] = useState(setObj);
    const [weight, setWeight] = useState(20);

    const navigate = useNavigate();

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        await exerciseEntry({ exerciseName: exerciseType, sets: Object.values(sets), weight: Number(weight) });
        console.log({ exerciseType, sets: Object.values(sets), weight: Number(weight) })
        // navigate("/");
    };

    return (
        <>
            <h1>Workout Entry</h1>
            <form onSubmit={handleSubmitForm}>
                <label>Exercise Name</label>
                <input type="text" value={exerciseType} onChange={(e) => setExerciseType(e.target.value)}/>

                <label>Set 1</label>
                <input type="number" value={sets.set1} onChange={(e) => setSets({...sets, set1: e.target.value})}/>
                <label>Set 2</label>
                <input type="number" value={sets.set2} onChange={(e) => setSets({...sets, set2: e.target.value, })}/>
                <label>Set 3</label>
                <input type="number" value={sets.set3} onChange={(e) => setSets({...sets, set3: e.target.value, })}/>
                <label>Set 4</label>
                <input type="number" value={sets.set4} onChange={(e) => setSets({...sets, set4: e.target.value, })}/>
                <label>Set 5</label>
                <input type="number" value={sets.set5} onChange={(e) => setSets({...sets, set5: e.target.value, })}/>

                <label>Weight Per Rep</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)}/>

                <button type="submit">Log Workout</button>
            </form>
        </>
    );
}