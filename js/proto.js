var animal = {
  eats: true
};

var rabbit = {
  jumps: true,
  __proto__: animal
};

for (var key in rabbit) {
    if (!rabbit.hasOwnProperty(key))
        console.log( key + " = " + rabbit[key] );

}

// -------------------------------------------------------

var animal = {
  jumps: null
};
var rabbit = {
  jumps: true
};

rabbit.__proto__ = animal;
console.log( rabbit.jumps ); // ? (1)
delete rabbit.jumps;
console.log( rabbit.jumps ); // ? (2)
delete animal.jumps;
console.log( rabbit.jumps ); // ? (3)
console.log('-------------------------------');
// -------------------------------------------------------

var animal = {
  eat: function() {
    this.full = true;
  }
};

var rabbit = {
  __proto__: animal
};

rabbit.eat();
console.log(rabbit);
