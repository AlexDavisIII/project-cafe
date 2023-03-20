const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const port = 3000; 


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aedc43239dmshc259d0edc796e1bp181b04jsna6f236e42d2b',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};

fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
	.then(response => response.json())
	.then(response => {
        console.log(response.body[0].setup)
        console.log(response.body[0].punchline)})
	.catch(err => console.error(err));


app.get('/',(req, res) => {
    res.send('Hello World');
})

app.listen(port, () =>{
 console.log(`Example app on port ${port}`);
})





//RAWG API Key: d5dad4cbf30741e59079df98b08e5023