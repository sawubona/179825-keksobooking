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
    syncroRoom: syncroRoom,
    syncroPrice: syncroPrice,
    syncroTime: syncroTime
  };

})();