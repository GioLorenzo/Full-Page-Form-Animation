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
    } else if (input.type === 'password' && isSixCharacters(input)) {
      nextSlide(parent, nextForm);
    }
  }  

  const isSixCharacters = user => {
    if (user.value.length < 6) {
      console.log('not enough characters');
      colorChange(red);
     
    } else {
      colorChange(green);
      
      return true;
    };
  };

  const validateEmail = email => {
    const validation =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (validation.test(email.value)) {
      colorChange(green);
      
      return true;
    } else {
      colorChange(red);
      
    }
  }


  const colorChange = color => {
    global.body.style.backgroundColor = color;
    setTimeout(function changeBack() {
      global.body.style.backgroundColor = pink;
    }, 600);
  }

  function nextSlide(parent, nextForm) {
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
    nextForm.classList.remove('innactive');
  }
    



})(document);