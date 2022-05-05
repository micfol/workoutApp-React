import axios from 'axios';
const baseURL = `${process.env.REACT_APP_WORKOUT_API}/api`;
const fitnessURL= `${process.env.REACT_APP_X_RAPIDAPI_API}`;

// USER ROUTES ---------------------------------------------

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

// USER DATA ROUTES ---------------------------------------------

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

export const upload = (uploadData) => {
    return axios.post(`${baseURL}/upload`, uploadData)
}

export const addExercise = (addExercise) => {
    return axios.post(`${baseURL}/exerciseType`, addExercise);
}

export const exerciseEntry = (exerciseEntry) => {
    return axios.post(`${baseURL}/exerciseentry`, exerciseEntry);
}

// EXTERNAL API ROUTES ---------------------------------------------

export const referenceWorkOutByBodyType = () => {
    return axios.get(`${fitnessURL}/bodyPartList`);
}

export const referenceWorkOutByBodyPart = () => {
    return axios.get(`${fitnessURL}/bodyPart/%7BbodyPart%7D`);
}

export const referenceWorkOutById = () => {
    return axios.get(`${fitnessURL}/%7Bid%7D`);
}

export const referenceWorkOutByName = () => {
    return axios.get(`${fitnessURL}/name/%7Bname%7D`);
}

export const referenceWorkOutTargetMuscles = () => {
    return axios.get(`${fitnessURL}/targetList`);
}

export const referenceWorkOutTargetMuscle = () => {
    return axios.get(`${fitnessURL}/target/%7Btarget%7D`);
}

export const referenceWorkOutAllExercises = () => {
    return axios.get(`${fitnessURL}`);
}
