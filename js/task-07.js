const fontSize = document.getElementById('font-size-control');
const text = document.getElementById('text');

fontSize.addEventListener('input', () => (text.style.fontSize = `${fontSize.value}px`));
