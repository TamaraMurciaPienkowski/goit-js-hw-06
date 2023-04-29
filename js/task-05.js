const userNameOutput = document.getElementById('name-output');
const userNameInput = document.getElementById('name-input');
function inputChange() {
  userNameOutput.textContent = userNameInput.value;
}

userNameInput.addEventListener('change', inputChange);
