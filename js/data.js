'use strict';

window.mapdata = (() => {

  const map = document.querySelector('.map');
  const noticeForm = document.querySelector('.notice__form');
  const mapData = {
    avatar: ['img/avatars/user01.png',
      'img/avatars/user02.png',
      'img/avatars/user03.png',
      'img/avatars/user04.png',
      'img/avatars/user05.png',
      'img/avatars/user06.png',
      'img/avatars/user07.png',
      'img/avatars/user08.png'],
    title: ['Большая уютная квартира',
      'Маленькая неуютная квартира',
      'Огромный прекрасный дворец',
      'Маленький ужасный дворец',
      'Красивый гостевой домик',
      'Некрасивый негостеприимный домик',
      'Уютное бунгало далеко от моря',
      'Неуютное бунгало по колено в воде'],
    address: [],
    price: [1000, 1000000],
    type: ['flat', 'house', 'bungalo'],
    rooms: [1, 5],
    guests: [1, 15],
    checkin: ['12:00', '13:00', '14:00'],
    checkout: ['12:00', '13:00', '14:00'],
    features: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
    description: [],
    photos: [],
    locations: [
      [300, 900],
      [100, 500]
    ]
  };

  return {
    map: map,
    mapData: mapData,
    noticeForm: noticeForm
  };

})();
