// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
var Dname = "Kalvian-1";
// 1.2 Print `"The driver's name is XXXX"`.
console.log("The driver's name is " + Dname);
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
var Nname = "Kalvian-2";
// 1.4 Print `"The navigator's name is YYYY"`.
console.log("The navigator's name is " + Nname);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.

var Dname = "Kalvian-1";
var Nname = "Kalvian-2";

var DnameLength = 0;
var NnameLength = 0;

// Calculate the length of the driver's name
for (var i = 0; Dname[i] !== undefined; i++) {
  DnameLength++;
}

// Calculate the length of the navigator's name
for (var i = 0; Nname[i] !== undefined; i++) {
  NnameLength++;
}

if (DnameLength > NnameLength) {
  console.log(
    "The driver has the longest name, it has " +
      DnameLength +
      " characters."
  );
} else if (DnameLength < NnameLength) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      NnameLength +
      " characters."
  );
} else {
  console.log(
    "Wow, you both have equally long names, " +
      DnameLength +
      " characters!"
  );
}
// 2.2. Check if the string contains vowel or not.
// - If it contains vowel, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowel
// - for example. In String Kalvian - a and i are vowel. Print Kalvian a i a 1 4 5.
var vowel = ["a", "e", "i", "o", "u"];
var vowelLts = [];

var NToCheck = Dname; // Change this variable to check for the navigator's name

var Vowel = false;

for (var i = 0; NToCheck[i] !== undefined; i++) {
  if (vowel.indexOf(NToCheck[i].toLowerCase()) !== -1) {
    vowelLts.push(NToCheck[i].toLowerCase());
    vowelLts.push(i);
    Vowel = true;
  }
}

if (Vowel) {
  console.log(NToCheck + " " + vowelLts.join(" "));
} else {
  console.log("no vowel");
}
// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
var uppercase = 0;
var lowercase = 0;

for (var i = 0; NToCheck[i] !== undefined; i++) {
  if (NToCheck[i] >= "A" && NToCheck[i] <= "Z") {
    uppercase++;
  } else if (NToCheck[i] >= "a" && NToCheck[i] <= "z") {
    lowercase++;
  }
}

console.log("Number of uppercase characters: " + uppercase);
console.log("Number of lowercase characters: " + lowercase);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
var Dname = "Kalvian-1";

var DnameUpperCase = "";
for (var i = 0; Dname[i] !== undefined; i++) {
  DnameUpperCase += Dname[i].toUpperCase() + " ";
}
console.log(DnameUpperCase.trim());
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"
var Nname = "Kalvian-2";

var NnameReverse = "";
for (var i = Nname.length - 1; i >= 0; i--) {
  NnameReverse += Nname[i];
}
console.log(NnameReverse);

// 3.3 Merge both the characters such that driver is followed by Navigator like "Dname Nname"
var mergedNames = Dname + " " + Nname;
console.log(mergedNames);

// - Now bring the Nname to the start and send Dname to the back like "Nname Dname"
var reversedMergedNames = Nname + " " + Dname;
console.log(reversedMergedNames);

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if (Dname < Nname) {
  console.log("The driver's name goes first.");
} else if (Dname > Nname) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}
// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Generate 3 paragraphs using lorem ipsum text
var loremIpsumText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec metus tellus. Sed consequat, sapien nec malesuada finibus, leo urna gravida sem, sed dapibus arcu nisi et tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi non nunc ligula. Etiam lacinia, dolor non eleifend tempus, tortor turpis consequat est, auctor sollicitudin mi risus eu nulla. Duis tincidunt, neque ut volutpat tincidunt, ipsum lorem pellentesque dui, et sagittis justo tellus a orci. Sed imperdiet ex id sapien consequat, at finibus diam efficitur. Cras malesuada auctor quam in fringilla. Morbi ullamcorper risus id nibh tincidunt finibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Integer gravida est nec odio pharetra, sit amet interdum mi posuere.";

var numberOfWords = 0;
var latinWordCount = 0;

// Count the number of words and occurrences of the Latin word "et"
var words = loremIpsumText.split(" ");
for (var i = 0; i < words.length; i++) {
  var word = words[i];
  if (word.length > 0) {
    numberOfWords++;
    if (word.toLowerCase() === "et") {
      latinWordCount++;
    }
  }
}

console.log("Number of words: " + numberOfWords);
console.log("Occurrences of 'et': " + latinWordCount);

// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".
// Check if a string is a palindrome
var phraseToCheck = "A man, a plan, a canal, Panama!";
var sanitizedPhrase = "";

// Sanitize the phrase by removing non-alphanumeric characters and converting to lowercase
for (var i = 0; i < phraseToCheck.length; i++) {
  var char = phraseToCheck[i];
  if (isAlphanumeric(char)) {
    sanitizedPhrase += char.toLowerCase();
  }
}

// Check if the sanitized phrase is a palindrome
var isPalindrome = true;
for (var i = 0; i < sanitizedPhrase.length / 2; i++) {
  if (sanitizedPhrase[i] !== sanitizedPhrase[sanitizedPhrase.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log("Is palindrome: " + isPalindrome);

// Function to check if a character is alphanumeric
function isAlphanumeric(char) {
  var code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) || // Numeric (0-9)
    (code >= 65 && code <= 90) || // Uppercase letters (A-Z)
    (code >= 97 && code <= 122) // Lowercase letters (a-z)
  );
}

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin'
