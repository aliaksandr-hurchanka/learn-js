// abs

console.log(Math.abs(-2));
console.log(Math.abs(null));
console.log(Math.abs('null'));

// sqrt - корень числа
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(2)); // 1.414213562373095
console.log(Math.sqrt(1));  // 1
console.log(Math.sqrt(0));  // 0
console.log(Math.sqrt(-1)); // NaN
console.log('-------------------------');

// round - округление
console.log(Math.round(20.4));  //20
console.log(Math.round(-20.51));  //-21
console.log('-------------------------');

// max - наибольшее
console.log(Math.max(10, 20));   //  20
console.log(Math.max(-10, -20)); // -10
console.log(Math.max(-10, 20));  //  20
console.log('-------------------------');

// random
console.log(Math.random());

// acos (арккосинус числа)

console.log(Math.acos(-2));  // NaN
console.log(Math.acos(-1));  // 3.141592653589793
console.log(Math.acos(0));   // 1.5707963267948966
console.log(Math.acos(0.5)); // 1.0471975511965979
console.log(Math.acos(1));   // 0
console.log(Math.acos(2));   // NaN
