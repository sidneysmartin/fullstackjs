"use strict";
let firstString = "Javascript";
let lastString = "ECMAScript";

// 1. CONCATENATION
let fullString = firstString + lastString;
console.log(fullString);

// 2. APPEND
lastString += " is a standard languages includes JavaScript";
console.log(lastString);

// 3. LENGTH
const alphabet = "AbcdEfghIjklmnOpqrstUvwxyz";
console.log(`Alphabet has ${alphabet.length} letters in the alphabet`);
console.log(`${alphabet}`);

// 4. CASES
console.log(alphabet.toUpperCase());
console.log(alphabet.toLowerCase());

// 5. SLICE
console.log(lastString.slice(0, 4));
// 6. SPLIT & JOIN
const splitted = alphabet.split("");
console.log(splitted);
console.log(splitted.join(","));

// 7. INCLUDES
console.log(lastString.includes("ECMA"));

// 8. TRIM
const exemple =
  "     The method trim() removes whitespace from both ends of a string      ";
console.log(exemple);
console.log(exemple.trim());
console.log("");

// 9. charAt()
console.log(firstString.charAt(0));
console.log(firstString.charAt(1));
console.log(firstString.charAt(2));
console.log(firstString.charAt(3));
console.log(firstString.charAt(4));
console.log(firstString.charAt(5));
console.log(firstString.charAt(6));
console.log(firstString.charAt(7));
console.log(firstString.charAt(8));
console.log(firstString.charAt(9));

// 10. charCodeAt()
console.log(firstString.charCodeAt(0));
console.log(firstString.charCodeAt(1));
console.log(firstString.charCodeAt(2));
console.log(firstString.charCodeAt(3));
console.log(firstString.charCodeAt(4));
console.log(firstString.charCodeAt(5));
console.log(firstString.charCodeAt(6));
console.log(firstString.charCodeAt(7));
console.log(firstString.charCodeAt(8));
console.log(firstString.charCodeAt(9));

// 11. indexOf()
console.log(firstString.indexOf("J"));
console.log(firstString.indexOf("a"));
console.log(firstString.indexOf("v"));
console.log(firstString.indexOf("a"));

// 12. lastIndexOf()
console.log(firstString.lastIndexOf("a"));

// 13. substring()
console.log(firstString.substring(0, 4));

// 14. substr()
console.log(firstString.substr(0, 4));

// 15. replace()
console.log(firstString.replace("a", "@"));

// 16. search()

console.log(firstString.search("a"));

// 17. match()

console.log(firstString.match("a"));

// 18. repeat()

console.log(firstString.repeat(3));
