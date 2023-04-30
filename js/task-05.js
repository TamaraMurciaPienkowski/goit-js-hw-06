const userNameOutput = document.getElementById('name-output');
const userNameInput = document.getElementById('name-input');
function inputChange() {
  userNameOutput.textContent = userNameInput.value;
  if (userNameInput.value === ``) {
    userNameOutput.textContent = `Anonymous`;
  }
}

userNameInput.addEventListener('input', inputChange);
