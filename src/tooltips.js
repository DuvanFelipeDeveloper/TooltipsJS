// tooltips.js
class Tooltip {
    constructor(element, text) {
      this.element = element;
      this.text = text;
      this.tooltipElement = document.createElement('div');
      this.tooltipElement.classList.add('tooltip');
      this.tooltipElement.innerText = this.text;
    }
  
    show() {
      document.body.appendChild(this.tooltipElement);
    }
  
    hide() {
      document.body.removeChild(this.tooltipElement);
    }
  }
  
  module.exports = Tooltip;
  