let counterValue = 0;
const rest = document.querySelector('[data-action="decrement"]');
const add = document.querySelector('[data-action="increment"]');
const result = document.getElementById('value');

add.addEventListener('click', () => {
  counterValue++;
  updateResult();
});

rest.addEventListener('click', () => {
  counterValue--;
  updateResult();
});

function updateResult() {
  result.textContent = counterValue;
}
