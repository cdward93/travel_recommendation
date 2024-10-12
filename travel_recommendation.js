// JavaScript Document
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");


 
   fetch('./travel_recommendation_api.json')
   .then(response => response.json())
   .then(data => {
     console.log(data);
     // You can now work with the JSON data here
   })
   .catch(error => console.error('Error fetching JSON:', error));	   
	   

console.log("Here is the extracted data: ",data);

