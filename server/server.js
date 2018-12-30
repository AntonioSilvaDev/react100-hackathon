const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
require('dotenv').config()

const app = express();
const lmt = 20;
const API_KEY = process.env.REACT_APP_APIKEY;

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));


app.get('/api', function(req, res){
    axios.get("https://api.tenor.com/v1/search?tag=" + req.query.searchTerm + "&key=" + API_KEY + "&limit=" + lmt)
        .then(function(response){
            res.send(response.data);
            })
        .catch(function(error){
            console.log(error);
            }) 
})

module.exports = app;
