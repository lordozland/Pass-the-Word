var generateBtn = document.querySelector("#generate");

function writePassword() {
  console.log("connect")
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  console.log(password)
}

generateBtn.addEventListener("click", writePassword);