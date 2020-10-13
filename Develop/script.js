// Assignment Code
var generatePasswordButton = document.getElementById("generate");
var copyToClipBoardButton = document.getElementById("copytoclipboard");


// Write password to the #password input
function password_generate(lower, upper, number, symbol, length) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
object.addEventListener("click", myScript);

