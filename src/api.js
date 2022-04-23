import axios from 'axios';
const baseURL = `${process.env.REACT_APP_WORKOUT_API}/api`;

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

export const updateWorkout = (updatedWorkout) => {
    return axios.put(`${baseURL}/workout/${updatedWorkout._id}`, updatedWorkout);
}

export const signup = (user) => {
    return axios.post(`${baseURL}/signup`, user);
}

export const login = (user) => {
    return axios.post(`${baseURL}/login`, user);
}

export const verify = (storedToken) => {
    return axios.get(`${baseURL}/verify`, { headers: { Authorization: `Bearer ${storedToken}` }
    });
}

export const upload = (uploadData) => {
    return axios.post(`${baseURL}/upload`, uploadData)
}