function Click() {
    this.handlers = [];  // observers
}
 
Click.prototype = {
 
    subscribe: function(fn) {
        this.handlers.push(fn);
    },
 
    unsubscribe: function(fn) {
        this.handlers = this.handlers.filter(
            function(item) {
                if (item !== fn) {
                    return item;
                }
            }
        );
    },
 
    butt: function(o, thisObj) {
        var scope = thisObj || window;
        this.handlers.forEach(function(item) {
            item.call(scope, o);
        });
    }
}
 
// log helper
 
var log = (function() {
    var log = "";
 
    return {
        add: function(msg) { 
            log += msg + "\n"; 
        },
        show: function() {
            console.log(log); 
            log = ""; 
        }
    }
})();
 
function run() {
 
    var clickHandler = function(item) { 
        log.add("buttd: " + item); 
    };
 
    var click = new Click();
 
    click.subscribe(clickHandler);
    click.butt('event #1');
    click.unsubscribe(clickHandler);
    click.butt('event #2');
    click.subscribe(clickHandler);
    click.butt('event #3');
 
    log.show();
}
