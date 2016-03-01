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
