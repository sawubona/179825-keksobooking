'use strict';

window.formaction = (() => {

  const changeHandler = (event) => {
    let target = event.target;
    if (target.id === 'type') {
      window.syncronizeField.syncroPrice(target, price, 'minimum', { 0: 1000, 1: 0, 2: 5000, 3: 10000 });
    };
    if (target.id === 'timein') {
      window.syncronizeField.syncroTime(target, timeout);
    };
    if (target.id === 'timeout') {
      window.syncronizeField.syncroTime(target, timein);
    };
    if (target.id === 'room_number') {
      window.syncronizeField.syncroRoom(target, capacity);
    };
  };

  const formHandler = (event) => {
    let target = event.target;
    let option = target.closest('select');
    if (!option) return;
    option.addEventListener('change', changeHandler);
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