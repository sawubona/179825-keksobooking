'use strict';

window.mapdata = (() => {

  const map = document.querySelector('.map');
  const noticeForm = document.querySelector('.notice__form');
  const urlData = 'https://1510.dump.academy/keksobooking/data';
  const urlForm = 'https://1510.dump.academy/keksobooking';

  return {
    map,
    urlData,
    noticeForm,
    urlForm
  };

})();
