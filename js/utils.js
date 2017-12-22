'use strict';

window.utils = (() => {

  /*const randomInteger = (arr) => {
    let rand = arr[0] + Math.random() * (arr[1] + 1 - arr[0]);
    rand = Math.floor(rand);
    return rand;
  };

  const randomStrings = (arr) => {
    let startIndex = Math.floor(Math.random() * arr.length);
    return arr.slice(startIndex);
  };

  const randomString = (arr) => {
    let startIndex = Math.floor(Math.random() * arr.length);
    let targetType = arr[startIndex];
    if (targetType === 'flat') {
      return 'Квартира';
    } else if (targetType === 'house') {
      return 'Дом';
    } else if (targetType === 'bungalo') {
      return 'Бунгало';
    } else {
      return targetType;
    }
  };*/

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
    //randomInteger,
    //randomStrings,
    //randomString,
    //showError,
    crawler,
    debounce,
    targetDragLimiter,
    routingType
  };

})();
