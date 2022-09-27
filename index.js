const express = require('express');
const requestPokeApi = require ('./api/requestPokeApi');
const requestBCRPApi = require ('./api/requestBCRPApi');
const app = express();
const port = 3000;


app.get('/api', async (req, res) => {
    try{
        const pokeApiResponse  =  await requestPokeApi();
        const BCRPAPiResponse = await requestBCRPApi();
        
        const response = {...BCRPAPiResponse, ...pokeApiResponse} 
        res.send(response);
    }
    catch(error){
        console.log(error);
        res.sendStatus(500);
    }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});