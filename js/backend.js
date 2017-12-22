'use strict';

window.backend = (() => {

  const url = 'https://js.dump.academy/keksobooking';
  let cacheControl = [];//localStorage.setItem('data', response);

  const save = (data, onSuccess, onError) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        onSuccess(xhr.response);
      } else {
        onError(`Произошла ошибка. Код ошибки: ${xhr.status}  ${xhr.statusText}`);
      }
    });
    xhr.addEventListener('error', () => {
      onError('Ошибка соединения');
    });
    xhr.addEventListener('timeout', () => {
      onError(`Превышено время ожидания запроса ${xhr.timeout} мс`);
    });
    xhr.timeout = 10000;
    xhr.open('POST', url);
    xhr.send(data);
  }

  const load = (onSuccess, onError) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', `${url}/data`);
    if (cacheControl.length !== 0) {
      onSuccess(cacheControl);
    } else {
      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          cacheControl = xhr.response;
          onSuccess(xhr.response);
        } else {
          onError(`Произошла ошибка. Код ошибки: ${xhr.status}  ${xhr.statusText}`);
        }
      });
      xhr.addEventListener('error', () => {
        onError('Ошибка соединения');
      });
      xhr.addEventListener('timeout', () => {
        onError(`Превышено время ожидания запроса ${xhr.timeout} мс`);
      });
      xhr.timeout = 10000;
      xhr.send();
    }
  }

  return {
    save,
    load,
  };

})();