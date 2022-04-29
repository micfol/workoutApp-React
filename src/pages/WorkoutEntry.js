export const WorkoutEntry = () => {
    return (
        <>
            <h1>Workout Entry</h1>
            <form>
                <label>Workout Type</label>
                <input type="text"/>

                <label>Exercise Name</label>
                <input type="text"/>

                <label>Weights Per Rep</label>
                <input type="number"/>

                <label>Sets</label>
                <input type="number"/>

                <button type="submit">Log Workout</button>
            </form>
        </>
    )
}