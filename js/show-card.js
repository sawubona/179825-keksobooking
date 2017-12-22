'use strict';

window.showCard = (function () {

  const createCards = (obj) => {
    const fragment = document.createDocumentFragment();
    let cardWrapperTemplate = document.querySelector('template').content;
    let cardTemplate = cardWrapperTemplate.querySelector('article.map__card');
    let card = cardTemplate.cloneNode(true);
    let feature = card.querySelector('.popup__features');
    let avatarPath = card.querySelector('.popup__avatar');
    let cardPhotos = card.querySelector('.popup__pictures');
    card.querySelector('h3').textContent = obj.offer.title;
    card.querySelector('p small').textContent = obj.offer.address;
    card.querySelector('.popup__price').textContent = `${obj.offer.price} \u20bd/ночь`;
    card.querySelector('h4').textContent = window.utils.routingType(obj);
    card.children[6].textContent = `${obj.offer.rooms} комнат для ${obj.offer.guests} гостей`;
    card.children[7].textContent = `Заезд после ${obj.offer.checkin}, выезд до ${obj.offer.checkout}`;
    feature.innerHTML = '';
    feature.appendChild(window.card.createFeatureList(obj));
    card.children[9].textContent = obj.offer.description;
    avatarPath.src = obj.author.avatar;
    cardPhotos.innerHTML = '';
    cardPhotos.appendChild(window.card.createFotoList(obj));
    fragment.appendChild(card);
    return fragment;
  };

  return { createCards };

})();