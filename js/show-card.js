'use strict';

window.showCard = (() => {

  const createCards = (left, top, i, avatar) => {
    const fragment = document.createDocumentFragment();
    let cardWrapperTemplate = document.querySelector('template').content;
    let cardTemplate = cardWrapperTemplate.querySelector('article.map__card');
    let card = cardTemplate.cloneNode(true);
    let feature = card.querySelector('.popup__features');
    let avatarPath = card.querySelector('.popup__avatar');
    card.querySelector('h3').textContent = window.mapdata.mapData.title[i];
    card.querySelector('p small').textContent = `${left}, ${top}`;
    card.querySelector('.popup__price').textContent = `${window.utils.randomInteger(window.mapdata.mapData.price)} \u20bd/ночь`;
    card.querySelector('h4').textContent = `${window.utils.randomString(window.mapdata.mapData.type)}`;
    card.children[6].textContent = `${window.utils.randomInteger(window.mapdata.mapData.rooms)} комнат для ${window.utils.randomInteger(window.mapdata.mapData.guests)} гостей`;
    card.children[7].textContent = `Заезд после ${window.utils.randomString(window.mapdata.mapData.checkin)}, выезд до ${window.utils.randomString(window.mapdata.mapData.checkout)}`;
    feature.innerHTML = '';
    feature.appendChild(window.card.createFeatureList());
    card.children[9].textContent = `${window.mapdata.mapData.description[i]}`;
    avatarPath.src = `${avatar}`;
    fragment.appendChild(card);
    return fragment;
  };

  return { createCards: createCards };

})();