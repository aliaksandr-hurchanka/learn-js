// 1. 
var obj = {
    name: 'Table'
};

// __proto__ - это ссылка, и на что она указывает, то и является
// прототипом объекта
// если какое либо свойство не находится в объекте, то по этой
// ссылке оно ищется в прототипе
// пока не дойдёт до нативного объекта
//console.log(obj.__proto__); // получим проттотип созданного объекта


// 2. ----

function inheritPrototype(subType, superType) {
    function TempCtor() {}
    TempCtor.prototype = superType.prototype;

    var prototype = new TempCtor;

    subType.prototype = prototype;
    subType.prototype.constructor = subType;
}

function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}
SuperType.prototype.sayName = function () {
    return "Name is " + this.name;
};
function SubType (name, age) {
    SuperType.call(this, name); // убираем из прототипа (__proto__) массив colors
    this.age = age;
}

inheritPrototype(SubType, SuperType);
    // Наследование
// SubType.prototype = new SuperType();
// SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
    return "Age is " + this.age;
};

var test = new SubType('Nick', 12);
console.log(test);
