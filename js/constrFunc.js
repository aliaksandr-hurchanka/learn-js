
var Man = function (name) {
    this.name = name;
    this.speak = true;

    // если пишем переменные через var они скрыты извне
    // но доступны внутри
    var priv = '20';

    this.sayHello = function () {
        return 'Hello! My name is' + this.name + '. I am ' + priv;
    }

    // return {name: 'Ann'};
}

Man.prototype.sayHello = function () {
    return 'Hello! My name is' + this.name + '. I am 22';
}

var vanya = new Man('Vanya');
var petr = new Man('Petr');

console.log(vanya);
console.log(vanya.name);
console.log(vanya.speak);
console.log(vanya.sayHello());
console.log(petr.sayHello());
console.log(petr.priv);

var MyApp = {
    Man: function (name) {
        this.name = name;
        this.speak = true;
    };
};
