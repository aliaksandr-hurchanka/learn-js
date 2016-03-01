// Метод split (из строки в массив)

var names = 'Маша, Петя, Марина, Василий';
var arr = names.split(', ');
for (var i = 0; i < arr.length; i++) {
  console.log( 'Вам сообщение ' + arr[i] );
}
// ---
console.log( "a,b,c,d".split(',', 2) ); // a,b

// ---
var str = "тест";
console.log( str.split('') ); // т,е,с,т


// Метод join
var arr0 = ['Маша', 'Петя', 'Марина', 'Василий'];
var str = arr0.join(';');
console.log( str ); // Маша;Петя;Марина;Василий

console.log( new Array(4).join("рас") );

// удаление
var arr1 = ["Я", "иду", "домой"];
delete arr1[1]; // значение с индексом 1 удалено
// теперь arr = ["Я", undefined, "домой"];
console.log( arr1[1] ); // undefined



// Метод splice

// удаление
var arr2 = ["Я", "изучаю", "JavaScript"];
arr2.splice(1, 1); // начиная с позиции 1, удалить 1 элемент
console.log( arr2 ); //  осталось ["Я", "JavaScript"]

// удаление
var arr3 = ["Я", "сейчас", "изучаю", "JavaScript"];
// удалить 2 первых элемента
var removed = arr3.splice(0, 2);
console.log( removed ); // "Я", "сейчас" <-- array of removed elements


// добавление
var arr4 = ["Я", "изучаю", "JavaScript"];
// с позиции 2
// удалить 0
// вставить "сложный", "язык"
arr4.splice(2, 0, "сложный", "язык");
console.log( arr4 ); // "Я", "изучаю", "сложный", "язык", "JavaScript"



// Метод slice
var arr5 = ["Почему", "надо", "учить", "JavaScript"];
var arr6 = arr5.slice(1, 3); // элементы 1, 2 (не включая 3)
console.log( arr6 ); // надо, учить


// Сортировка
function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

var arr7 = [ 1, 2, 15 ];
arr7.sort(compareNumeric);
console.log(arr7);



// arr.push('new2'); //добавляет в конце массива элемент
// arr.join(', ') ); //создает из массива строку, разделяя указанным разделителем
// arr.pop(); //обрезает последний элемент массива
// arr.unshift('up_new'); //добавляет в начало массива элемент
// arr.shift(); //удаляет первый элемент массива
// arr.reverse(); //делает реверс массива
// arr.sort(); //сортирует массив, но не правильно
// var sliced = arr.slice(1,3);
