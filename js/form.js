'use strict';

window.formaction = (() => {

  const changeHandler = (event) => {
    let target = event.target;
    if (target.id === 'type') {
      window.syncronizeField.syncroField(target, price, syncroPrice);
    };
    if (target.id === 'timein') {
      window.syncronizeField.syncroField(target, timeout, syncroTime);
    };
    if (target.id === 'timeout') {
      window.syncronizeField.syncroField(target, timein, syncroTime);
    };
    if (target.id === 'room_number') {
      window.syncronizeField.syncroField(target, capacity, syncroRoom);
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

  /*----------------------*/

  const syncroRoom = (master, slave) => {
    slave.selectedIndex = -1;
    for (let i = 0; i < master.options.length; i++) {
      const element = master.options[i];
      if (element.selected) {
        if (element.index === 0) {
          slave.selectedIndex = 2;
          slave.options[0].setAttribute('disabled', '');
          slave.options[1].setAttribute('disabled', '');
          slave.options[3].setAttribute('disabled', '');
          slave.options[2].removeAttribute('disabled', '');
        }
        if (element.index === 1) {
          slave.selectedIndex = 1;
          slave.options[0].setAttribute('disabled', '');
          slave.options[3].setAttribute('disabled', '');
          slave.options[2].removeAttribute('disabled', '');
          slave.options[1].removeAttribute('disabled', '');
        }
        if (element.index === 2) {
          slave.selectedIndex = 0;
          slave.options[3].setAttribute('disabled', '');
          slave.options[0].removeAttribute('disabled', '');
          slave.options[1].removeAttribute('disabled', '');
          slave.options[2].removeAttribute('disabled', '');
        }
        if (element.index === 3) {
          slave.selectedIndex = 3;
          slave.options[0].setAttribute('disabled', '');
          slave.options[1].setAttribute('disabled', '');
          slave.options[2].setAttribute('disabled', '');
          slave.options[3].removeAttribute('disabled', '');
        }
      }
    }
  };

  const syncroPrice = (master, slave) => {
    if (master.selectedIndex === 0) {
      slave.min = 1000;
    }
    if (master.selectedIndex === 1) {
      slave.min = 0;
    }
    if (master.selectedIndex === 2) {
      slave.min = 5000;
    }
    if (master.selectedIndex === 3) {
      slave.min = 10000;
    }
  };

  const syncroTime = (master, slave) => {
    slave.selectedIndex = -1;
    for (let i = 0; i < master.options.length; i++) {
      const element = master.options[i];
      if (element.selected) {
        slave.selectedIndex = element.index;
      }
    }
  };

  return {
    formHandler: formHandler,
    formValid: formValid
  };

})();