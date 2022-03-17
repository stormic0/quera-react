// URL: https://quera.org/college/8565/chapter/30563/lesson/111609/

const ingredients = readline();

redCount = (ingredients.match(/R/g) || []).length;
yellowCount = (ingredients.match(/Y/g) || []).length;
greenCount = (ingredients.match(/G/g) || []).length;

if (redCount >= 3 || (redCount >= 2 && yellowCount >= 2) || greenCount === 0) {
  console.log("nakhor abdolah");
} else {
  console.log("nosh");
}
