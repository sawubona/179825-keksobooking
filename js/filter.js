'use strict';

window.pin = (() => {

  const filterForm = document.querySelector('.map__filters');
  const featuresBtns = filterForm.querySelectorAll('.feature input');

  let defaultData = [];

  const clearPins = () => {
    let pins = document.querySelectorAll('.map__pin');
    let cards = window.mapdata.map.querySelectorAll('.map__card');
    window.utils.crawler(pins, (el) => {
      if (!el.classList.contains('map__pin--main')) {
        el.remove();
      }
    });
    window.utils.crawler(cards, (el) => {
      el.remove();
    });
  };

  const filterType = (el) => {
    if (filterForm[0].value === 'any') {
      return defaultData;
    } else {
      return el.offer.type === filterForm[0].value;
    }
  };

  const filterCount = (el) => {
    if (filterForm[2].value === 'any') {
      return defaultData;
    } else {
      return el.offer.rooms === Number(filterForm[2].value);
    }
  };

  const filterGuests = (el) => {
    if (filterForm[3].value === 'any') {
      return defaultData;
    } else {
      return el.offer.guests === Number(filterForm[3].value);
    }
  };

  const filterPrice = (el) => {
    switch (filterForm[1].value) {
      case 'any':
        return defaultData;
      case 'middle':
        return el.offer.price >= 10000 && el.offer.price <= 50000;
      case 'low':
        return el.offer.price < 10000;
      case 'high':
        return el.offer.price > 50000;
      default:
        return false;
    }
  };

  const filterFeatures = (el) => {
    let featuresCheckboxes = filterForm.querySelectorAll('.features input[type="checkbox"]:checked');
    let checkedFeatures = Array.prototype.map.call(featuresCheckboxes, (checkbox) => {
      return checkbox.value;
    });
    return checkedFeatures.every((feature) => {
      return el.offer.features.indexOf(feature) > -1;
    });
  };

  const filteredArr = [filterType, filterCount, filterPrice, filterGuests, filterFeatures];

  const updatePins = () => {
    clearPins();
    let filteredData = filteredArr.reduce((initial, el) => {
      return initial.filter(el);
    }, defaultData);
    window.pin.createButtons(filteredData);
  };

  window.utils.crawler(filterForm.children, (el) => {
    el.addEventListener('change', window.utils.debounce(updatePins));
  });

  window.utils.crawler(featuresBtns, (el) => {
    el.addEventListener('change', window.utils.debounce(updatePins));
  });

  const onSuccess = (data) => {
    defaultData = data;
  };

  backend.load(onSuccess, window.message.infoMessage);

})();