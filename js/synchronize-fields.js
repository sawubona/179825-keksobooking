'use strict';

window.syncronizeField = (() => {

  const syncroField = (target, source, callback) => {
    callback(target, source);
  };

  return { syncroField };

})();