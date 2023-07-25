function generatePassword() {
  var passwordLength = document.getElementById("passwordLength").value;
  let password = "";
  var variable =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}[]|;:,.<>?";
  for (let i = 0; i <= passwordLength - 1; i++) {
    const randomIndex = Math.floor(Math.random() * passwordLength);
    password += variable[randomIndex];
  }
  document.getElementById("password").textContent = password;
}
