'use strict';

window.pin = (() => {
  const mapWrapper = document.querySelector('.map__pins');
  const formElements = document.querySelectorAll('fieldset');
  const createButtons = () => {
    const mapFilter = document.querySelector('.map__filters-container');
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < window.mapdata.mapData.avatar.length; i++) {
      let buttonAvatar = window.mapdata.mapData.avatar[i];
      let button = document.createElement('button');
      let button_avatar = document.createElement('img');
      button.className = 'map__pin';
      button.style.left = `${window.utils.randomInteger(window.mapdata.mapData.locations[0]) - 20}px`;
      button.style.top = `${window.utils.randomInteger(window.mapdata.mapData.locations[1]) - 20}px`;
      button_avatar.src = buttonAvatar;
      button_avatar.style.width = `${40}px`;
      button_avatar.style.height = `${40}px`;
      button_avatar.draggable = false;
      button.appendChild(button_avatar);
      fragment.appendChild(button);
      window.mapdata.map.insertBefore(window.showCard.createCards(button.style.left, button.style.top, i, buttonAvatar), mapFilter);
    }
    mapWrapper.appendChild(fragment);
    disablePopup();
  };

  const toggleForm = (list, state = 'off') => {
    for (let i = 0; i < list.length; i++) {
      const formElement = list[i];
      if (state == 'on') {
        formElement.removeAttribute('disabled', '');
        formElement.parentNode.classList.remove('notice__form--disabled');
      }
      if (state == 'off') {
        formElement.setAttribute('disabled', '');
        formElement.parentNode.classList.add('notice__form--disabled');
      }
    };
  };

  toggleForm(formElements);

  const activateFormMap = (targetbtn) => {
    window.mapdata.map.classList.remove('map--faded');
    createButtons();
    window.map.dragObj(targetbtn);
    targetbtn.classList.add('active');
    toggleForm(formElements, 'on');
  };

  const showPopup = (arr, button) => {
    const buttonIndex = arr.indexOf(button) - 1;
    const mapCardsDisabled = document.querySelectorAll('.map__card');
    closePin();
    button.classList.add('map__pin--active');
    mapCardsDisabled[buttonIndex].classList.add('popup');
  };

  const closePin = () => {
    let popup = document.querySelectorAll('.popup');
    let activePin = document.querySelectorAll('.map__pin--active');
    if (popup) {
      for (var i = 0; i < popup.length; i++) {
        popup[i].classList.remove('popup');
      }
    };
    if (activePin) {
      for (var i = 0; i < activePin.length; i++) {
        activePin[i].classList.remove('map__pin--active');
      }
    };
  };

  const mainpinMouseHandler = (event) => {
    let target = event.target;
    let button = target.closest('button');
    if (!button) return;
    if (!window.mapdata.map.contains(button)) return;
    if (button.classList.contains('map__pin--main') && !button.classList.contains('active')) {
      activateFormMap(button);
    }
    if (button.classList.contains('map__pin') && !button.classList.contains('map__pin--main')) {
      let allButton = Array.prototype.slice.call(document.querySelectorAll('.map__pin'));
      showPopup(allButton, button);
    }
    if (button.classList.contains('popup__close')) {
      closePin();
    }
  };

  const disablePopup = () => {
    const mapCards = document.querySelectorAll('.map__card');
    for (let i = 0; i < mapCards.length; i++) {
      const element = mapCards[i];
      element.classList.remove('popup');
    }
  };

  const mainpinTabHandler = (event) => {
    let target = event.target;
    let button = target.closest('button');
    if (!button) return;
    if (!window.mapdata.map.contains(button)) return;
    if (event.keyCode === 13) {
      if (button.classList.contains('map__pin--main') && !button.classList.contains('active')) {
        activateFormMap(button);
      }
      if (button.classList.contains('map__pin') && !button.classList.contains('map__pin--main')) {
        let allButton = Array.prototype.slice.call(document.querySelectorAll('.map__pin'));
        showPopup(allButton, button);
      }
      if (button.classList.contains('popup__close')) {
        closePin();
      }
    }
    if (event.keyCode === 27) {
      if (button.classList.contains('map__pin--active')) {
        closePin();
      }
    }
  };

  return {
    mainpinMouseHandler: mainpinMouseHandler,
    mainpinTabHandler: mainpinTabHandler
  };

})();