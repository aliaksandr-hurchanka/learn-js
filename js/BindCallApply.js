// .bind()
// Метод создает новую функцию, которая при вызове устанавливает в качестве
// контекста выполнения this предоставленное значение.
// В метод также передается набор аргументов, которые будут установлены
// перед переданными в привязанную функцию аргументами при её вызове.

this.x = 9;
var module = {
  x: 81,
  getX: function() { console.log(this.x); }
};

module.getX(); // 81

var getX = module.getX;
getX(); // 9, поскольку в этом случае this ссылается на глобальный объект

// создаём новую функцию с this, привязанным к module
var boundGetX = getX.bind(module);
boundGetX(); // 81

// ----------------------------------------------

var user = {
    data:[
        {name:"T. Woods", age:37},
        {name:"P. Mickelson", age:43}
    ],
    clickHandler: function (event) {
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1;
        $("#input").val(this.data[randomNum].name + " " + this.data[randomNum].age);
        console.log('click');
    }
};

$(document).ready(function(){
    //$("#button").click(user.clickHandler);                // false
    $("#button").click(user.clickHandler.bind(user));       // true
});
console.log('---------------------------------------')


// .call() & .apply()
// global variable for demonstration​

var avgScore = "global avgScore";

// global function
function avg (arrayOfScores) {
    var sumOfScores = arrayOfScores.reduce (function (prev, cur, index, array) {
        return prev + cur;
    });
    this.avgScore = sumOfScores / arrayOfScores.length;
}

var gameController = {
    scores: [20, 34, 55, 46, 77],
    avgScore: null,
};

avg(gameController.scores);
console.log (window.avgScore); // 46.4​
console.log (gameController.avgScore); // null​

// reset the global avgScore​
avgScore = "global avgScore";

// To set the "this" value explicitly, so that "this" is bound to the gameController,​
// We use the call () method:​
avg.call(gameController, gameController.scores);

console.log (window.avgScore); //global avgScore​
console.log (gameController.avgScore); // 46.4​
