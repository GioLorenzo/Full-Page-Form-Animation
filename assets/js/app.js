(function IIFE(global) {
  
  
  const green = 'rgb(50, 201, 101)';
  const red = 'rgb(189, 87, 87)';
  const pink = 'pink';

  (animateFormIIFE = () => {
    const arrows = document.querySelectorAll('.fa-arrow-down');
    return arrows.forEach(arrow => {
      arrow.addEv