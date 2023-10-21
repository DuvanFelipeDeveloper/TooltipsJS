import Tooltip from './src/tooltips';

const button = document.querySelector('.my-button');
const tooltip = new Tooltip(button, 'Haz clic aquí', 'top');

button.addEventListener('mouseenter', () => {
  tooltip.show();
});

button.addEventListener('mouseleave', () => {
  tooltip.hide();
});
