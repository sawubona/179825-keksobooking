'use strict';

window.syncronizeField = (() => {

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

  const syncroPrice = (master, slave, attr, obj) => {
    for (let key in obj) {
      let value = obj[key];
      if (master.selectedIndex === +key) {
        if (attr === 'minimum') {
          slave.min = value;
        }
        if (attr === 'maximum') {
          slave.max = value;
        }
      }
    }
  };

  const changeHandler = (event) => {
    let target = event.target;
    if (target.id === 'type') {
      syncroPrice(target, price, 'minimum', { 0: 1000, 1: 0, 2: 5000, 3: 10000 });
    };
    if (target.id === 'timein') {
      window.utils.syncroTime(target, timeout);
    };
    if (target.id === 'timeout') {
      window.utils.syncroTime(target, timein);
    };
    if (target.id === 'room_number') {
      syncroRoom(target, capacity);
      //syncroRoom(target, capacity, {0:[2], 1:[2,1], 2:[0,1,2], 3:[3]});// не разобрался как унифицировать:(
    };
  };

  return { changeHandler: changeHandler };

})();