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

// export const fetchWorkingWeight = async  () => {
//     const response = await axios.get(`${baseURL}/verify`, { headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }})
//     return  axios.get(`${baseURL}/workingweight/${response.data}`);
// }

export const fetchWorkingWeight =  (user) => {
    return  axios.get(`${baseURL}/workingweight/${user}`);
}

export const setLocalWeight = (workingWeight) => {
    const workingWeightString = JSON.stringify(workingWeight)
    localStorage.setItem("workingWeight", workingWeightString)
};
export const getLocalWeight = () => {
    const workingWeightString = localStorage.getItem("workingWeight")
    return JSON.parse(workingWeightString)
};
export const removeLocalWeight = () => {
    localStorage.removeItem("workingWeight")
};
// PROGRESS ROUTES -------------------------------------------

export const progress = async (user) => {
    const response = await axios.get(`${baseURL}/verify`, { headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` }})
    return axios.get(`${baseURL}/progress/${response.data._id}`)
}

// export const progress = async () => {
//     return axios.get(`${baseURL}/progress/${user}`)
// }

// EDUCATION ROUTES ------------------------------------------

export const education = () => {
    return axios.get(`${baseURL}/education`)
}
