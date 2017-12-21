'use strict';

window.backend = (() => {

  const errorStatus = (response) => {
    //console.log(response.status);
    //alert(`Ошибка запроса: код ошибки ${response.status}`);
    if (response.status >= 400 && response.status < 500) {
      alert(`Ошибка запроса: код ошибки ${response.status}`);
      return Promise.reject(new Error(response.status));
    }
    if (response.status >= 500 && response.status < 600) {
      alert(`Ошибка сервера: код ошибки ${response.status}`);
      return Promise.reject(new Error(response.status));
    }
    return Promise.resolve(response)
  };

  const jsonGet = (response) => {
    return response.json()
  };

  const clearForm = () => {
    window.mapdata.noticeForm.reset();
  };

  const getData = (url) => {
    return fetch(url, { method: 'get' })
      .then(errorStatus)
      .then(jsonGet)
      .then((data) => {
        return data;
      })
      .catch((error) => {
        alert(`К сожалению произошла ошибка. Попробуйте позже. Код ошибки: ${error}`);
      })
  };

  const sendForm = (url, form) => {
    fetch(url, {
      method: 'post',
      body: form
    })
      .then(errorStatus)
      .then(clearForm)
      .catch((error) => {
        alert(`К сожалению произошла ошибка. Форма не отправлена. Попробуйте позже. Код ошибки: ${error}`);
      })
  };

  return {
    getData,
    sendForm
  };

})();