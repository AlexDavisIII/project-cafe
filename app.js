const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const port = 3000; 
const API_URL = 'https://exerciseapi3.p.rapidapi.com/search/muscles/';



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aedc43239dmshc259d0edc796e1bp181b04jsna6f236e42d2b',
		'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com'
	}
};


async function searchMuscle() {
    try {
        const response = await fetch(API_URL, options);
        const JSONresponse = await response.json();    
        console.log(JSONresponse);
    } catch (mistake){
        console.error(mistake);
    }
}

const finalStuff = searchMuscle().then(finalData => 
    `<p>Here is the finaldata: ${finalData}</p>`
    );


app.get('/',(req, res) => {
    res.send(`Hello there! <p>${finalStuff}`);
})

app.listen(port, () =>{
 console.log(`Example app on port ${port}`);
})





//RAWG API Key: d5dad4cbf30741e59079df98b08e5023