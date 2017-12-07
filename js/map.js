'use strict';

const map = document.querySelector('.map');
const mapWrapper = document.querySelector('.map__pins');
const formElements = document.querySelectorAll('fieldset');

const randomInteger = (arr) => {
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
}; 

const mapData = {
  avatar: ['img/avatars/user01.png', 
  'img/avatars/user02.png', 
  'img/avatars/user03.png', 
  'img/avatars/user04.png', 
  'img/avatars/user05.png', 
  'img/avatars/user06.png', 
  'img/avatars/user07.png', 
  'img/avatars/user08.png'],
  title: ["Большая уютная квартира", 
  "Маленькая неуютная квартира", 
  "Огромный прекрасный дворец", 
  "Маленький ужасный дворец", 
  "Красивый гостевой домик", 
  "Некрасивый негостеприимный домик", 
  "Уютное бунгало далеко от моря", 
  "Неуютное бунгало по колено в воде"],
  address: [], 
  price: [1000, 1000000],
  type: ['flat', 'house', 'bungalo'],
  rooms: [1, 5],
  guests: [1, 15],
  checkin: ['12:00', '13:00', '14:00'], 
  checkout: ['12:00', '13:00', '14:00'], 
  features: ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"],
  description: [],
  photos: [],
  locations: [
    [300, 900],
    [100, 500]
  ]
};

const createButtons = () => {
  const map = document.querySelector('.map');
  const mapFilter = document.querySelector('.map__filters-container');
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < mapData.avatar.length; i++) {
    let buttonAvatar = mapData.avatar[i];
    let button = document.createElement('button');
    let button_avatar = document.createElement('img');
    button.className = 'map__pin';
    button.style.left = `${randomInteger(mapData.locations[0]) - 20}px`;
    button.style.top = `${randomInteger(mapData.locations[1]) - 20}px`;
    button_avatar.src = buttonAvatar;
    button_avatar.style.width = `${40}px`;
    button_avatar.style.height = `${40}px`;
    button_avatar.draggable = false;
    button.appendChild(button_avatar);
    fragment.appendChild(button);
    map.insertBefore(createCards(button.style.left, button.style.top, i, buttonAvatar), mapFilter);
  }
  mapWrapper.appendChild(fragment);
  disablePopup();
};

const createFeatureList = () => {
  let featuresArr = randomStrings(mapData.features);
  let featuresFragment = document.createDocumentFragment();
  for (let i = 0; i < featuresArr.length; i++) {
    let featureElem = document.createElement('li');
    featureElem.className = `feature feature--${featuresArr[i]}`;
    featuresFragment.appendChild(featureElem);
  }
  return featuresFragment;
};

const createCards = (left, top, i, avatar) => {
  const fragment = document.createDocumentFragment();
  let cardWrapperTemplate = document.querySelector('template').content;
  let cardTemplate = cardWrapperTemplate.querySelector('article.map__card');
  let card = cardTemplate.cloneNode(true);
  card.querySelector('h3').textContent = mapData.title[i];
  card.querySelector('p small').textContent = `${left}, ${top}`;
  card.querySelector('.popup__price').textContent = `${randomInteger(mapData.price)} \u20bd/ночь`;
  card.querySelector('h4').textContent = `${randomString(mapData.type)}`;
  card.children[6].textContent = `${randomInteger(mapData.rooms)} комнат для ${randomInteger(mapData.guests)} гостей`;
  card.children[7].textContent = `Заезд после ${randomString(mapData.checkin)}, выезд до ${randomString(mapData.checkout)}`;
  let feature = card.querySelector('.popup__features');
  feature.innerHTML = '';
  feature.appendChild(createFeatureList());
  card.children[9].textContent = `${mapData.description[i]}`;
  let avatarPath = card.querySelector('.popup__avatar');
  avatarPath.src = `${avatar}`;
  fragment.appendChild(card);
  return fragment;
};

const toggleForm = (list, state) => {
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

toggleForm(formElements, 'off');

const activateFormMap = () => {
  map.classList.remove('map--faded');
  createButtons();
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
  if (!map.contains(button)) return;
  if (button.classList.contains('map__pin--main')) {
    activateFormMap();
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
  if (!map.contains(button)) return;
  if (event.keyCode === 13) {
    if (button.classList.contains('map__pin--main')) {
      activateFormMap();
    }
    if (button.classList.contains('map__pin') && !button.classList.contains('map__pin--main')) {
      let allButton = Array.prototype.slice.call(document.querySelectorAll('.map__pin'));
      showPopup(allButton, button);
    }
    if (button.classList.contains('popup__close')) {
      closePin();
    }
  }
  if(event.keyCode === 27) {
    if (button.classList.contains('map__pin--active')) {
      closePin();
    }
  }
};

map.addEventListener('mouseup', mainpinMouseHandler);
map.addEventListener('keydown', mainpinTabHandler);