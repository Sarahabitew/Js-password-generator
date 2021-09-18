// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//presented with a series of prompts for password criteria

function generatePassword() {
  var passwordLength = prompt( Password must be a length of at least 8 characters and no more than 128 characters);
  var numbers = prompt( Password must include at least 1 number);
  varminimumCount = (8);
  
}

//validate

var numbers = /[0 - 9 /g;

if(myInput.value.length >=8) {
  length.classList.remove ("invalid");
  length.classlist.add("valid");

} else {
  length.classList.remove("valid");
  length.classList.add("invalid");
}
if(myInput.value.length <=128) {
  length.classList.remove('invalid');
  length.classlist.add('valid');

} else {
  length.classlist.remove('valid');
  length.classlist.add('valid');
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function clickHandler(event) {
  console.log('Button Clicked');
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', clickHandler);


</script> 