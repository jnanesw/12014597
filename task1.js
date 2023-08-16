const express = require('express');
const axios = require('axios');

const app = express();
const port = 8008;

app.get('/numbers', async function(req, res) {
    const paramsUrl = req.query.url; 
    console.log(paramsUrl);
    
    try {
        const response = await axios.get(paramsUrl); 
        if (response.status === 200) {
            res.send(response.data); 
        } else {
            res.status(response.status).send('Request failed');
        }
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, function() {
    console.log("Successfully running the server");
});
