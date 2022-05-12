import axios from 'axios';
const baseURL = `${process.env.REACT_APP_WORKOUT_API}/api`;


// USER ROUTES ---------------------------------------------

export const signup = (user) => {
    return axios.post(`${baseURL}/signup`, user);
}

export const updateUser = (user) => {
    return axios.post(`${baseURL}/updateuser`, user);
}

export const login = (user) => {
    return axios.post(`${baseURL}/login`, user);
}

export const verify = (storedToken) => {
    return axios.get(`${baseURL}/verify`, { headers: { Authorization: `Bearer ${storedToken}` }
    });
}

// USER DATA ROUTES ------------------------------------------

export const getAllWorkouts = async (user) => {
    const response = await axios.get(`${baseURL}/workout/${user}`);
    console.log('getAllWorkouts Response', response)
    return (response.data)
}
export const addWorkout =  (workoutObj) => {
     return axios.post(`${baseURL}/workout`, workoutObj);
}
export const deleteWorkout =  (workoutId) => {
    return axios.delete(`${baseURL}/workout/${workoutId}`)
}


// EDUCATION ROUTES ------------------------------------------

export const education = () => {
    return axios.get(`${baseURL}/education`)
}
