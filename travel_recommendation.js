// JavaScript Document
console.log("Starting javascript.....");

document.addEventListener("DOMContentLoaded", function() {
  const searchButton = document.getElementById("search-btn");
  const searchInput = document.getElementById("search-input");

  searchButton.addEventListener("click", () => {
		fetch("./travel_recommendation.json")
		   .then(response => response.json())
		   .then(data => { 
const searchTerm = document.getElementById("search-input").value.toLowerCase();

			   console.log(data);
               console.log(searchTerm);
			
			if (searchTerm === "countries" || searchTerm === "country" || searchTerm === "brazil" || searchTerm === "australia" || searchTerm === "japan") {
			   const countryData = data.countries;
			   let id1 = Math.floor(Math.random() * countryData.length);
			   if (searchTerm === "brazil") id1 = 2;
			   if (searchTerm === "japan") id1 = 1;
			   if (searchTerm === "australia") id1 = 0;
			   console.log("Found countries... id1 is "+id1);
			   document.getElementById("image-1").src = countryData[id1].cities[0].imageUrl;
			   document.getElementById("name-1").textContent = countryData[id1].cities[0].name;
			   document.getElementById("desciption-1").textContent = countryData[id1].cities[0].description;
						
			   document.getElementById("image-2").src = countryData[id1].cities[1].imageUrl;
			   document.getElementById("name-2").textContent = countryData[id1].cities[1].name;
			   document.getElementById("desciption-2").textContent = countryData[id1].cities[1].description;
		}
	
	
	       else if (searchTerm === "temple" || searchTerm === "temples") {
			   const templeData = data.temples;
			   const id1 = 0;
			   const id2 = 1;
			   console.log("Found Temples... id1 is "+id1);
			
			   document.getElementById("image-1").src = templeData[id1].imageUrl;
			   document.getElementById("name-1").textContent = templeData[id1].name;
			   document.getElementById("desciption-1").textContent = templeData[id1].description;
						
			   document.getElementById("image-2").src = templeData[id2].imageUrl;
			   document.getElementById("name-2").textContent = templeData[id2].name;
			   document.getElementById("desciption-2").textContent = templeData[id2].description;
		}
		
	
	       else if (searchTerm === "beach" || searchTerm === "beaches") {
			   console.log("33333333333");
			   const beachData = data.beaches;
			   const id1 = 0;
			   const id2 = 1;
			   console.log("Found beaches... id1 is "+id1);
			
			   document.getElementById("image-1").src = beachData[id1].imageUrl;
			   document.getElementById("name-1").textContent = beachData[id1].name;
			   document.getElementById("desciption-1").textContent = beachData[id1].description;
						
			   document.getElementById("image-2").src = beachData[id2].imageUrl;
			   document.getElementById("name-2").textContent = beachData[id2].name;
			   document.getElementById("desciption-2").textContent = beachData[id2].description;
		}
		
    
          else console.log("NONENONENONENONE");
 
    }    ) }  ) } );

