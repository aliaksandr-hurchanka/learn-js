// Templates for call

// this связывается с глобальным объектом
var func = function (a, b) {
    return a + b;
}

// this ссылается на объект
// var MYAPP = {
//     func: function (a, b) {
//         console.log(this);
//         return a + b;
//     }
// };
// console.log(MYAPP.func(1,3));

var MYAPPS = (function() {
    var funcPrivate = function () {
        return 'private';
    };

    return {
        func: function (a,b) {
            console.log( this );

            // шаблон вызова функции внутри метода
            // даже внутри метода, контекстом относится все ровно глобально
            // для решения этой проблемы
            // мы можем закеширвать наш this: 
            var that = this;
            var helperFunc = function (c, d) {
                console.log( this )
                that.multiply = c*d;
            };

            helperFunc(a, b);

            return a + b;
        },

        // если хотим вызвать приватный метод, нужно 
        // нужно его присвоить публичному
        funcPublic: funcPrivate
    }
})();

console.log(MYAPPS.func(2,3));
console.log(MYAPPS.funcPublic());
console.log(MYAPPS.multiply)


// передача функции контекста с помощью .apply()
var arr = [3,5];
var add = function ( a,b ) {
    console.log(this);
    return a + b;
};

// null - если хотим передать глобальный контекст
// можем передать объект MYAPPS
var sum = add.apply( null, arr );

console.log( sum );     // получили глобальный контекст
