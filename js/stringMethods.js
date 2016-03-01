// Экранирование
var str = "My name is \"Aliaksandr\"";
console.log(str);

// Длина строки 
console.log(str.length);

// Получение символа строки по индексу
console.log(str.charAt(4));

// Изменение регистра
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Поиск подстроки в строке
console.log(str.indexOf('is'))


// Взятие подстроки
console.log(str.substring(8));
console.log(str.substring(8, 10));
console.log(str.substr(8, 4)); // вторым параметром сколько символов обрезать
console.log(str.slice(-5));

// Split
console.log(str.split(' '));

// Replace
console.log(str.replace('\"Aliaksandr\"', 'Alex'));
