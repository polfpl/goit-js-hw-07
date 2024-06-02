// Policzenie i wyświetlenie liczby kategorii
const categories = document.querySelectorAll("ul#categories li.item");
console.log(`Number of categories: ${categories.length}`);

// Dla każdej kategorii wyświetlenie tytułu i liczby elementów
categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const items = category.querySelectorAll("ul li");
  console.log(`Category: ${title}`);
  console.log(`Elements: ${items.length}`);
});
