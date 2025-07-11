console.log("hello world");
//coding cources used for this javascript are the library demo Pokemon Demo from github
 //async function i want to pull the data and set to margarita to show until its replaced by user input.
 //api request
 //await for api response and json
 //render cocktails to webpage
 //catch to handle errors
async function getCocktailData(drinkName = "margarita") {
  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinkName}`);
    const data = await response.json();
    renderCockTails(data.drinks);
  } catch (error) {
    console.error('Failed to fetch cocktail data:', error);
  }
}
//render function to display it on the page 
function renderCockTails(cocktailData) {
  const drinkContainer = document.getElementById("drink-container");
  drinkContainer.innerHTML = "";

  if (!cocktailData) {
    drinkContainer.innerHTML = "<p>No cocktails found.</p>";
    return;
  }
//added style for container
  cocktailData.forEach((cocktail) => {
    const drinkElm = document.createElement("div");
    drinkElm.className = "flex flex-wrap flex-row justify-center columns-4 gap-4 bg-gradient-to-br from-slate-950 to-teal-950 text-slate-400 rounded-xl text-white p-4 m-2 w-1/3";

    drinkElm.innerHTML = `
      <h2 class="text-xl font-bold text-lime-500 mb-2">${cocktail.strDrink}</h2>
      <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}" class="rounded shadow mb-2 w-full justify-content-center">
      <p class=" flex flex-wrap flex-col gap-4">${cocktail.strInstructions}</p>
      
    `;
     
    drinkContainer.appendChild(drinkElm);
  });
  const cocktailName = document.getElementById("drinkName").value 
  const resultsMessage = document.getElementById("searchresults")
  resultsMessage.innerHTML = `Search results for ${cocktailName}`
  
}
//event handler
function handleSubmitDrinkSearch(event) {
  event.preventDefault();
  const input = document.getElementById("drinkName").value.trim();
  if (input) {
    getCocktailData(input);
  }
}


getCocktailData();