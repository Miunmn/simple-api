const axios = require('axios')


const requestBCRPApi = async ( ) => {
    const url = "https://estadisticas.bcrp.gob.pe/estadisticas/series/api/PN01288PM/json";
    const response =  await axios.get(url);
    return response.data;
}
module.exports = requestBCRPApi;