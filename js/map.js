'use strict';

window.map = (() => {
  const dragObj = (target) => {  //migrate to mod drag.js
    target.addEventListener('mousedown', function (event) {
      let targetStartCords = {
        x: event.clientX,
        y: event.clientY
      };

      const onMouseMove = (moveEvent) => {
        moveEvent.preventDefault();
        let shift = {
          x: targetStartCords.x - moveEvent.clientX,
          y: targetStartCords.y - moveEvent.clientY
        }
        targetStartCords = {
          x: moveEvent.clientX,
          y: moveEvent.clientY
        }
        target.style.top = `${window.utils.targetDragLimiter(target.offsetTop, shift.y, 100, 500)}px`;
        target.style.left = `${target.offsetLeft - shift.x}px`;
      };

      const onMouseUp = (upEvent) => {
        address.value = `x: {${target.offsetLeft - (target.offsetWidth / 2)}}, y: {${target.offsetTop + target.offsetHeight}}`;
        upEvent.preventDefault();
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  };

  window.mapdata.map.addEventListener('mouseup', window.pin.mainpinMouseHandler);
  window.mapdata.map.addEventListener('keydown', window.pin.mainpinTabHandler);
  window.mapdata.noticeForm.addEventListener('mouseup', window.formaction.formHandler);
  window.mapdata.noticeForm.addEventListener('submit', window.formaction.formValid);

  return { dragButton: dragButton };

})();
