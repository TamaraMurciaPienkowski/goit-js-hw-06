const pass = document.getElementById('validation-input');
const dataLength = pass.getAttribute('data-length');

pass.addEventListener('blur', lenghtValidation);
function lenghtValidation() {
  if (this.value.length === parseInt(dataLength)) {
    this.classList.remove('invalid');
    this.classList.add('valid');
  } else {
    this.classList.add('invalid');
  }
}
