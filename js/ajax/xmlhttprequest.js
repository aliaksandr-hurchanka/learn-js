// Пример синхронного запроса
function loadSync() {
    // 1. Создаём новый объект XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // 2. Конфигурируем его: GET-запрос на URL 'data.json'
    // Это синхронный запрос
    xhr.open('GET', '/data', false);

    // 3. Отсылаем запрос
    xhr.send();

    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
      // обработать ошибку
      console.log( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
    } else {
      // вывести результат
      console.log( xhr.responseText ); // responseText -- текст ответа.
    }
}

function loadData () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/data', true);     // указываем третий аргумент, чтобы запрос был асинхронным
    xhr.send();                         // в этой строке код не зависнет

    xhr.onreadystatechange = function() {
      if (xhr.readyState != 4) return;
      button.innerHTML = 'Done!';
      if (xhr.status != 200) {
        alert(xhr.status + ': ' + xhr.statusText);
      } else {
        alert(xhr.responseText);
      }
    }

    button.innerHTML = 'Loading...';
    button.disabled = true;
}

//const unsigned short UNSENT = 0; // начальное состояние
//const unsigned short OPENED = 1; // вызван open
//const unsigned short HEADERS_RECEIVED = 2; // получены заголовки
//const unsigned short LOADING = 3; // загружается тело (получен очередной пакет данных)
//const unsigned short DONE = 4; // запрос завершён
function run() {

    var xhr = new XMLHttpRequest();
    write(xhr.readyState);

    xhr.open('GET', '/digits', true);
    write(xhr.readyState);

    xhr.onreadystatechange = function() {
        write(xhr.readyState + " получено символов:" + xhr.responseText.length);
    };

    xhr.send();
}

function write(text) {
    var li = log.appendChild(document.createElement('li'));
        li.innerHTML = text;
}
