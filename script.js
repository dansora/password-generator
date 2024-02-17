// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  var pwLength = prompt(
    "How long should your password be? Please choose a length between 8 and 128 characters"
  );
  pwLength = parseInt(pwLength);

  if (isNaN(pwLength) || pwLength < 8 || pwLength > 128) {
    alert("please make sure you input a wp length between 8 and 128");
    return;
  }

  var isSpecial = confirm("Do you want your pw to contain special characters?");
  var isNumber = confirm("Do you want your pw to contain number characters?");
  var isLowerCase = confirm(
    "Do you want your pw to contain lowercase characters?"
  );
  var isUpperCase = confirm(
    "Do you want your pw to contain uppercase characters?"
  );

}

// Function for getting a random element from an array
function getRandom(arr) {
  var allCharacters = specialCharacters.concat(
    numericCharacters,
    lowerCasedCharacters,
    upperCasedCharacters
  );
  var listOfChar = demoPassword.chars();
}

// create a list of Char that stores all the characters, numbers and special characters

// use shuffle() method of the Collections to shuffle the list elements

//generate a random string(secure password) by using list stream() method and collect() method

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
