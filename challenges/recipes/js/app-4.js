function saveRecipe(){
  let recipeName = document.getElementById("rname").value
  let recipe_ingredients_HTML = document.getElementById("ingredients").value
  let recipe_instructions_HTML = document.getElementById("ingredients").value

  localStorage.setItem(recipeName, recipe_ingredients_HTML, recipe_instructions_HTML)
}