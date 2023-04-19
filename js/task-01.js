const categArray = document.querySelectorAll('li.item');
console.log(`Number of categories: ${categArray.length}`);

categArray.forEach(item => {
  const names = item.querySelector('h2').textContent;
  console.log(`Category: ${names}`);
  const namesNr = item.querySelectorAll('li').length;
  console.log(`Elements: ${namesNr}`);
});
