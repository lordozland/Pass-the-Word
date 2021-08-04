// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// Start

const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*_-+=0123456789";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

const writePassword = (length, characters) => {
  console.log("connected");
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};


// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   // var passwordText = document.getElementById("#password");
//   // var lets = "abcdefghijklmnopqrstuvwxyz";
//   // var numbs = "0123456789"
//   // var puncts = '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
  
//   const generatePassword(length, characters) => {
//     let password = "";
//     for (let i = 0; i < length; i++) {
//       password += characters.charAt(
//         Math.floor(Math.random() * characters.length)
//       );
//     }
//     return password;
//   };

// }

// const generatePassword = (length, characters) => {
//   let password = "";
//   for (let i = 0; i < length; i++) {
//     password += characters.charAt(
//       Math.floor(Math.random() * characters.length)
//     );
//   }
//   return password;
// };


// const copyBtn = document.getElementById("copy");
// copyBtn.addEventListener("click", () => {
//   passwordTxt.select();
//   document.execCommand("copy");
//   alert("Password Copied");
// });


// function bubs() {
//   var length = 8,
//       charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//       retVal = "";
//   for (var i = 0, n = charset.length; i < length; ++i) {
//       retVal += charset.charAt(Math.floor(Math.random() * n));
//   }
//   return retVal;
  
// }