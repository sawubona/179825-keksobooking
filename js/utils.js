'use strict';

window.utils = (function () {

  const crawler = (arr, fn) => {
    Array.prototype.forEach.call(arr, fn);
  };

  const routingType = (type) => {
    let targetType = type.offer.type;
    if (targetType === 'flat') {
      return 'Квартира';
    } else if (targetType === 'house') {
      return 'Дом';
    } else if (targetType === 'bungalo') {
      return 'Бунгало';
    } else {
      return targetType;
    }
  };

  const targetDragLimiter = (cordOut, cordIn, limitmin, limitmax) => {
    if ((cordOut - cordIn) > limitmax) {
      return limitmax;
    }
    if ((cordOut - cordIn) < limitmin) {
      return limitmin;
    }
    else {
      return cordOut - cordIn;
    }
  };

  const debounce = (targfun) => {
    let timeout = null;
    return () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(targfun, 500);
    };
  };

  return {
    crawler,
    debounce,
    targetDragLimiter,
    routingType
  };

})();
