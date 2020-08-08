var generateBtn = document.querySelector("#generate");

//Establish Character Options
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var symbols = "~`!@#$%^&*()_-+={}[]|\:;<>.,?/".split("");

//Prompt and Confirm Password Choices
var length = prompt("How many characters would you like your password to be? (8-128 characters)");
var confirmNumbers = confirm("Would you like to include numbers in your password?");
var confirmUppercase = confirm("Would you like to include uppercase letters in your password?");
var confirmLowercase = confirm("Would you like to include lowercase letters in your password?");
var confirmSymbols = confirm("Would you like to include symbols in your password?");

//Log user choices to console for reference
console.log(length);
console.log(confirmNumbers);
console.log(confirmUppercase);
console.log(confirmLowercase);
console.log(confirmSymbols);

//Restrict length of password (8-128 characters)

//Generate Password
function generatePassword() {
  var characterOptions = "";
  var password = "";

  if (confirmNumbers === true) {
    characterOptions = characterOptions + numbers;
  }
  if (confirmUppercase === true) {
    characterOptions = characterOptions + uppercase;
  }
  if (confirmLowercase === true) {
    characterOptions = characterOptions + lowercase;
  }
  if (confirmSymbols === true) {
    characterOptions = characterOptions + symbols;
  }

  for (i = 0; i < length; i++) {
    var randomCharacter = characterOptions[Math.floor(Math.random() * characterOptions.length)]
    password += randomCharacter
    
    console.log("Your new password: " + password);
  }
  return password;
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to the 'Generate Button'
generateBtn.addEventListener("click", writePassword);
