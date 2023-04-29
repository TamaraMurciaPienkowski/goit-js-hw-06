function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const whatColor = document.querySelector('.color');
button.addEventListener('click', () => {
  const colorName = getRandomHexColor();
  document.body.style.backgroundColor = colorName;
  whatColor.textContent = colorName;
});
