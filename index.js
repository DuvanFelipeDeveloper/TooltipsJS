// index.js
const Tooltip = require('./src/tooltips');

const button = document.querySelector('.my-button');
const tooltip = new Tooltip(button, 'Haz clic aqui','left');

button.addEventListener('mouseenter', () => {
  tooltip.show();
});

button.addEventListener('mouseleave', () => {
  tooltip.hide();
});
