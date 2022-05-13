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

// USER WORKOUT ROUTES ------------------------------------------

export const getAllWorkouts = () => {
    return axios.get(`${baseURL}/workout`);
}

export const getWorkout = (id) => {
    return axios.get(`${baseURL}/workout/${id}`)
}

export const deleteWorkout = (id) => {
    return axios.delete(`${baseURL}/workout/${id}`);
}

export const addWorkout = (project) => {
    return axios.post(`${baseURL}/workout`, project);
}

export const exerciseEntry = (exerciseEntry) => {
    return axios.post(`${baseURL}/exerciseentry`, exerciseEntry);
}

// PROGRESS ROUTES -------------------------------------------

export const progress = (user) => {
    return axios.get(`${baseURL}/progress/${user}`)
}

// EDUCATION ROUTES ------------------------------------------

export const education = () => {
    return axios.get(`${baseURL}/education`)
}
