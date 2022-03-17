// URL: https://quera.org/college/8565/chapter/30563/lesson/111610/

let word = readline();

word
  .split("")
  .map((letter, index) =>
    console.log(letter.repeat(index) + word.slice(index))
  );
