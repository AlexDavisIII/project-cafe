const heading = document.getElementById('fitHead');
const subHeading = document.getElementById('fitSubHead');
const exerciseList = document.getElementById('exerciseContainer');
const exerciseImports = document.getElementById('exerciseImport');
const API_URL = 'https://exerciseapi3.p.rapidapi.com/search/muscles/';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'aedc43239dmshc259d0edc796e1bp181b04jsna6f236e42d2b',
		'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com'
	}
};

//Adds the Title to the page
heading.innerHTML = "Exercise You!";

//insert heading into heading <h1> tags
subHeading.innerHTML = "Don't Quit; Get Fit";

async function searchMuscle() {
    try {
        const response = await fetch(API_URL, options);
        const JSONresponse = await response.json();  
        console.log(JSONresponse[0]);
    
        //Outputs the array of exercises provided by the API to the console;
        for (let i = 0; i < JSONresponse.length; i++){
            //exerciseImports.innerHTML += `<li>Check it! ${JSONresponse[i]}</li>`;
            exerciseList.innerHTML += `<option value="${JSONresponse[i].toLowerCase()}">${JSONresponse[i]}</option>`;
        }
        
        
    } catch (mistake){
        console.error(mistake);
    }
}

searchMuscle();