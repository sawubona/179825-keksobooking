'use strict';

window.message = (() => {
  
 const infoMessage = (msg) => {
   let dialog = document.querySelector('dialog');
   let dialogText = dialog.querySelector('p');
   dialogText.innerHTML = msg;
   dialog.style.display = 'block';
   dialog.style.zIndex = 100;
    setTimeout(() => {
      dialog.style.display = 'none';
    }, 2000);
  }

  return {infoMessage};

})();