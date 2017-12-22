'use strict';

window.card = (function () {

  const createFeatureList = (obj) => {
    let featuresArr = obj.offer.features;
    let featuresFragment = document.createDocumentFragment();
    for (let i = 0; i < featuresArr.length; i++) {
      let featureElem = document.createElement('li');
      featureElem.className = `feature feature--${featuresArr[i]}`;
      featuresFragment.appendChild(featureElem);
    }
    return featuresFragment;
  };

  const createFotoList = (obj) => {
    let fotoArr = obj.offer.photos;
    let fotoFragment = document.createDocumentFragment();
    for (let i = 0; i < fotoArr.length; i++) {
      let fotoElem = document.createElement('li');
      fotoElem.style.overflow = 'hidden';
      fotoElem.style.width = '20%';
      let imgElem = document.createElement('img');
      imgElem.src = fotoArr[i];
      imgElem.style.display = 'inline-block';
      imgElem.style.width = '100%';
      imgElem.style.padding = '3px';
      fotoElem.appendChild(imgElem);
      fotoFragment.appendChild(fotoElem);
    }
    return fotoFragment;
  };

  return {
    createFeatureList,
    createFotoList
  };

})();