// URL: https://quera.org/college/8565/chapter/30563/lesson/115735/

const count = parseInt(readline());

const passwords = [];

for (let i = 0; i < count; i++) {
  passwords.push(readline());
}

const lengthValidator = (word) => word.length >= 8;

const engNumValidator = (word) => /\d/.test(word) && /[a-zA-Z]/.test(word);

const isUnique = (str, index, strList) => strList.indexOf(str) === index;

const validPasswords = passwords
  .filter(lengthValidator)
  .filter(engNumValidator)
  .filter(isUnique);

const lengthRuleInvalid = passwords
  .filter((pass) => !lengthValidator(pass))
  .filter(isUnique);

const engNumRuleInvalid = passwords
  .filter((pass) => !engNumValidator(pass))
  .filter(isUnique);

const repeatedRuleInvalid = passwords.filter((...args) => !isUnique(...args));

const uniqueRepeatedRuleInvalid = repeatedRuleInvalid.filter(isUnique);

console.log("All:", passwords.length);
console.log("Valid:", validPasswords.length);
console.log("Invalid:", passwords.length - validPasswords.length);
console.log("Valid List:", validPasswords.join(" "));
console.log("Length Rule:", lengthRuleInvalid.join(" "));
console.log("EngNum Rule:", engNumRuleInvalid.join(" "));
console.log("Repeated:", uniqueRepeatedRuleInvalid.join(" "));
console.log(
  "Unique:",
  passwords.length -
    repeatedRuleInvalid.length -
    uniqueRepeatedRuleInvalid.length
);
