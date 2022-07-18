const breakfastRecipes = "./recipes-1.json";
const recipeBoxes = document.querySelector("#breakfast-info");


fetch(breakfastRecipes)
  .then((response) => response.json())
  .then(function (jsonObject) {
    console.table(jsonObject);
    const recipes = jsonObject["recipes"];
    recipes.forEach(showRecipes);
  });

function showRecipes(recipe) {
  //Elements
  let recipeBox = document.createElement("div");
  let image = document.createElement("img");
  let recipeName = document.createElement("h2");

  //innerHTML
  recipeName.innerHTML = `${recipe.name}`;

  // Recipe Imgs
  image.setAttribute("src", recipe.imageurl);
  image.setAttribute("alt", "Image of " + `${recipe.name}`);
  image.setAttribute('loading', 'lazy');
  
  //Append the items to the container recipeBox
  recipeBox.appendChild(recipeName);
  recipeBox.appendChild(image);

  //Append the recipeBox to the list recipeBoxes
  recipeBoxes.appendChild(recipeBox);
}


//.then((recipes) => showRecipes(recipes.results));

/*
showRecipes = (recipes) => {
  const recipesDiv = document.querySelector("#breakfast-info");
  recipes.forEach((recipe) => {
    const createElements = document.createElement("div");

    createElements.innerHTML =
      `
      <h3>${recipes.name}</h3> 
      `;
    
      recipesDiv.append(createElements);
  })
};*/

/*
fetch("./recipes-1.json")
.then(response => {
  return response.json();
})
.then(data => {
  document.querySelector("#breakfast-info").innerHTML = data.recipes.name;
});*/