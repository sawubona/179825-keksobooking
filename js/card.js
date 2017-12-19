'use strict';

window.card = (() => {

  const createFeatureList = () => {
    let featuresArr = window.utils.randomStrings(window.mapdata.mapData.features);
    let featuresFragment = document.createDocumentFragment();
    for (let i = 0; i < featuresArr.length; i++) {
      let featureElem = document.createElement('li');
      featureElem.className = `feature feature--${featuresArr[i]}`;
      featuresFragment.appendChild(featureElem);
    }
    return featuresFragment;
  };

  return { createFeatureList: createFeatureList };

})();
