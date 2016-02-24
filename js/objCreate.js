// 1. ---

var Person = {
    constructor: function(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.colors = ["red", "blue", "green"];
        return this;
    },
    greet: function () {
        console.log(this.name);
    }
}

//console.log(typeof person);

// console.log(person.name);
// console.log(Person.isPrototypeOf(person));

// наследование и дополнение свойствами
var WebDeveloper = Object.create(Person);
WebDeveloper.constructor = function(name, age, gender, skills) {
    Person.constructor.apply(this, arguments);
    skills = skills || [];
    return this;
};

// Добавляем новый метод
WebDeveloper.develop = function () {
    console.log('Working ... ');
};

var developer = Object.create(WebDeveloper).constructor('Aliaksandr', 26, 'male', ['js', 'css', 'html']);
console.log(typeof developer, ' <- this is bad!'); // это плохо
console.log(developer);

console.log(developer.skills);
// можем обращаться к свойствам и методам родительского класса Person
developer.develop();
console.log(developer.name);
developer.greet();
