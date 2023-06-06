// tooltips.js
class Tooltip {
    constructor(element, text, position) {
      this.element = element;
      this.text = text;
      this.position = position;
      this.tooltipElement = document.createElement('div');
      this.tooltipElement.classList.add('tooltip');
      this.tooltipElement.innerText = this.text;
      console.log(position)

      if (this.position === 'right') {
        this.tooltipElement.classList.add('tooltip-right');
      } else if (this.position === 'left') {
        this.tooltipElement.classList.add('tooltip-left');
      } else if (this.position === 'top') {
        this.tooltipElement.classList.add('tooltip-top');
      } else if (this.position === 'bottom') {
        this.tooltipElement.classList.add('tooltip-bottom');
      }


    }
  
    show() {
      document.body.appendChild(this.tooltipElement);
    }
  
    hide() {
      document.body.removeChild(this.tooltipElement);
    }
  }
  
  module.exports = Tooltip;
  