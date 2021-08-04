var generateBtn = document.querySelector("#generate");


function writePassword() {
  console.log("connect")
  var password = document.getElementById("password");
  var length = 8;
  var passwd = '';
  const care = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  for (i = 1; i < 8; i++) {
    var c = Math.floor(Math.random() * care.length + 1);
    passwd += care.charAt(c)
  }

  var You = care[Math.floor((Math.random()))];
  console.log(You)
  console.log(passwd)
  password.innerHTML = passwd;
};

generateBtn.addEventListener("click", writePassword);





function makePasswd() {
  var passwd = '';
  var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (i=1;i<8;i++) {
    var c = Math.floor(Math.random()*chars.length + 1);
    passwd += chars.charAt(c)
  }

  return passwd;
}

