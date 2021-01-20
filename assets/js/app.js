(function IIFE(global) {
  
  
  const green = 'rgb(50, 201, 101)';
  const red = 'rgb(189, 87, 87)';
  const pink = 'pink';

  (animateFormIIFE = () => {
    const arrows = document.querySelectorAll('.fa-arrow-down');
    return arrows.forEach(arrow => {
      arrow.addEventListener('click', () => validation(arrow));
      arrow.addEventListener('keypress', (e) => (e.key === 'Enter') ? validation(arrow) : null);
    });
  })();

  function validation(arrow) {
    const input = arrow.previousElementSibling;
    const parent = arrow.parentElement;
    const nextForm = parent.nextElementSibling;

    // Check for validation
    if (input.type === 'text' && isSixCharacters(input)) {
      nextSlide(parent, nextForm);
    } else if (input.type === 'email' && validateEmail(input)) {
      nextSlide(parent, nextForm);
    