const axios = require('axios')


const requestPokeApi = async ( ) => {
    const url = "https://pokeapi.co/api/v2/pokemon/ditto";
    const response =  await axios.get(url);
    return response.data;
}
module.exports= requestPokeApi;