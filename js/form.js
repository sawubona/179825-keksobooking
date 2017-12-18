'use strict';

window.formaction = (() => {
  
  const formHandler = (event) => {
    let target = event.target;
    let option = target.closest('select');
    if (!option) return;
    option.addEventListener('change', window.syncronizeField.changeHandler);
  };

  const formValid = (event) => {
    let inputs = noticeForm.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
      const element = inputs[i];
      if (element.id === 'address' && element.value === '') {
        element.style.border = '2px solid red';
        event.preventDefault();
      }
      if (element.id === 'title' && element.value.length < 30) {
        element.style.border = '2px solid red';
        event.preventDefault();
      }
      if (element.id === 'price' && element.value.length < 0) {
        element.style.border = '2px solid red';
        event.preventDefault();
      }
    }
  };

  return {
    formHandler: formHandler,
    formValid: formValid
  };

})();