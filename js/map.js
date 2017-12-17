'use strict';

(() => {
  window.mapdata.map.addEventListener('mouseup', window.pin.mainpinMouseHandler);
  window.mapdata.map.addEventListener('keydown', window.pin.mainpinTabHandler);
  window.mapdata.noticeForm.addEventListener('mouseup', window.formaction.formHandler);
  window.mapdata.noticeForm.addEventListener('submit', window.formaction.formValid);
})();