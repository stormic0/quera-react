// URL: https://quera.org/college/8565/chapter/30563/lesson/111606/

const weekDays = [
  "shanbe",
  "1shanbe",
  "2shanbe",
  "3shanbe",
  "4shanbe",
  "5shanbe",
  "jome",
];

const yousefDaysCount = readline();
const yousefDays = readline().split(" ");
const salibDaysCount = readline();
const salibDays = readline().split(" ");

abdollahDays = weekDays.filter(
  (day) => !yousefDays.includes(day) && !salibDays.includes(day)
);

console.log(abdollahDays.length);
