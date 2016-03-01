var a = 5;
//console.log(window.a);  // 5

function sayHi(name) {
    // LexicalEnvironment = { name: 'Вася', phrase: undefined }
    var phrase = "Привет, " + name;

    // LexicalEnvironment = { name: 'Вася', phrase: 'Привет, Вася'}
    console.log( phrase );
}

sayHi('Вася');

// --------------------------------
// innerFn получает доступ к переменным outerFn
function outerFn(myArg) {
   var myVar;
   function innerFn() {
      //имеет доступ к myVar и myArg
   }
}

// --------------------------------
// Переменная numberOfCalls остается жить после выполнения createCounter()
function createCounter() {
   var numberOfCalls = 0;
   return function() {
      return ++numberOfCalls;
   }
}
var fn = createCounter();
fn(); //1
fn(); //2
fn(); //3

// пример с 
var fn1 = (function() {
   var numberOfCalls = 0;
   return function() {
      return ++ numberOfCalls;
   }
})();

console.log(fn1()); // 1
console.log(fn1()); // 2
console.log(fn1()); // 3
console.log('--------------------------------');

// метод, привязывающий функцию к определённому контексту 
Function.prototype.bind = function(context) {
   var fn = this;
   return function() {
      return fn.apply(context, arguments);
   };
}
var HelloPage = {
   name: 'Alex',
   init: function() {
      console.log('Hello, ' + this.name);
   }
}
//window.onload = HelloPage.init; //вывел бы undefined, т.к. this указывало бы на window
//window.onload = HelloPage.init.bind(HelloPage); //вот теперь всё работает

console.log('--------------------------------');

// применение замыканий — защита данных (инкапсуляция)
var MyModule = {
   name: 'Aliaksandr',
   sayHello: function(name) {
      console.log('Hello ' + name.toUpperCase())
   },   
   sayHelloToAlex: function() {
      this.sayHello(this.name);
   }
}
MyModule.sayHelloToAlex();

console.log('--------------------------------');

// делаем методы и свойсва не используемые извне, приватными
var MyModule2 = (function() {
   var name = 'Alex';
   function sayHello() {
      console.log('HELLO ' + name.toUpperCase());
   }
   return {
      sayHelloToAlex: function() {
         sayHello(name);
      }
   }
})();
MyModule2.sayHelloToAlex();

console.log('--------------------------------');

// неправильно
// for (var i = 0; i < links.length; i++) {
//    links[i].onclick = function() {
//       console.log(i);
//    }
// }

// правильно
// for (var i = 0; i < links.length; i++) {
//    (function(i) {
//       links[i].onclick = function() {
//          alert(i);
//       }
//    })(i);
// }
