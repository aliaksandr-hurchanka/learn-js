"use strict";

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.getInfo = function() {
        return 'My name is ' + this.name + '. I am ' + this.age + '.'
    }
}

function Developer(name, age, skills) {
    Person.call(this, name, age);
    this.skills = skills;
    this.getInfo = function() {
        return 'My name is ' + this.name + '. I am ' + this.age + '. I have skills '+ this.skills + '.';
    }
}

var person = new Person('Misha', 20);
var dev = new Developer('Aliaksandr', 26, 'javascript');
console.log(person);
console.log(dev);
