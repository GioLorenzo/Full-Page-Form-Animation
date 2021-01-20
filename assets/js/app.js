(function IIFE(global) {
  
  
  const green = 'rgb(50, 201, 101)';
  const red = 'rgb(189, 87, 87)';
  const pink = 'rgb(255, 225, 234)';

  function validation(arrow) {
    const input = arrow.previousElementSibling;
    const parent = arrow.parentElement;
    const nextForm = parent.nextElementSibling;

    // Check for validation
    if (input.type === 'text' && isSixCharacters(input)) {
      nextSlide(parent, nextForm);
    } else if (input.type === 'email' && validateEmail(input)) {
      nextSlide(parent, nextForm);
    } else if (input.type === 'password' && validatePassword(input)) {
     
    } else {
      if (input.type === 'text') {
        input.value = '';
        input.placeholder = 'Must be more than 6 characters';
        shakeAnimation(parent);
        input.addEventListener('click', () => input.placeholder = 'Username');
      } else if (input.type === 'email') {
        input.value = '';
        input.placeholder = 'Invalid Email';
        shakeAnimation(parent);
        input.addEventListener('click', () => input.placeholder = 'Email');
      } else if (input.type === 'password') {
        input.value = '';
        input.placeholder = 'Invalid Password';
        shakeAnimation(parent);
        input.addEventListener('click', () => input.placeholder = 'Password');
      }
    }
  }  

  }

  const isSixCharacters = user => {
    if (user.value.length < 6) {
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

  const shakeAnimation = (parent) => {
    parent.style.animation = 'shake 200ms ease';
    setTimeout(() => parent.style.animation = '', 200);
  }

  function nextSlide(parent, nextForm) {
    parent.classList.add('innactive');
    parent.classList.remove('active');
    nextForm.classList.add('active');
    nextForm.classList.remove('innactive');
    let ne

  (animateFormIIFE = () => {
    const arrows = document.querySelectorAll('.fa-arrow-down');
    
    arrows.forEach(arrow => {
      arrow.addEventListener('click', () => validation(arrow));
    });

    global.addEventListener('keypress', function keypress(e) {
      if (e.key === 'Enter' || 13 == e.keyCode) {
        let active = global.querySelector('.active');
        active.querySelector('.click-me').click();
      };
    });
  })();


})(document);