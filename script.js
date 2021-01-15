// Assignment Code
var generateBtn = document.querySelector("#generate");

function question(){

  var params = prompt("What characters should be included in your password? Must be at 8 characters long and contain at leaseone number, please do not include spaces", "ab%*x!2...");

  paramArray = params.toUpperCase();
  
  if (paramArray.length > 8 || paramArray < 8){

      alert ("Please enter a valid response");

      return;

  };

  var jumbler = [
    paramArray[2],
    paramArray[4],
    paramArray[0],
    paramArray[6],
    paramArray[1],
    paramArray[3],
    paramArray[5],
    paramArray[7]
    ];

  return jumbler;
  
};


//Write password on HTML
function writePassword() {  

  var mix = [question()];

  var password = mix.join('');

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);