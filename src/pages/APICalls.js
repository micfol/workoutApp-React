const axios = require("axios");
const apikey = process.env.REACT_APP_X_RAPIDAPI_KEY;

export const getExerciseAPI = async (exerciseID) => {

const options = {
  method: 'GET',
  url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${exerciseID}`,
  headers: {
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_X_RAPIDAPI_KEY
  }
};

const response = await axios.request(options);
	console.log(response.data);
return response.data;
}