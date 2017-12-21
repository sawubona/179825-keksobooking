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

  /*const showError = (message) => {
    let errorBlock = document.createElement('div');
    errorBlock.style.position = 'absolute';
    errorBlock.style.width = '25%';
    errorBlock.style.height = '25%'
    errorBlock.style.backgroundColor = 'red';
    errorBlock.style.left = '37.5%';
    errorBlock.style.top = '37.5%';
    window.mapdata.map.appendChild(errorBlock);
    console.log(message);
  };*/

  return {
    //randomInteger,
    //randomStrings,
    //randomString,
    //showError,
    targetDragLimiter,
    routingType
  };

})();
