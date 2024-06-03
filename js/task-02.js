const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.getElementById("ingredients");

const allZuzamen =  document.createDocumentFragment();

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  ingredientsList.appendChild(li);
});

ingredientsList.appendChild(allZuzamen);