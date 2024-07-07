const kelvin = 0; // variable 'kelvin' declared as 293 (constant)
var celcius = kelvin - 293; // variable 'celcius' declared as 293 less than 'kelvin'
var fahrenheit = celcius * (9/5) + 32; // variable 'fahrenheit' declared as 9/5 of 'celcius' plus 32
fahrenheit = Math.floor(fahrenheit); // variable 'fahrenheit' rounded down to nearest integer
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

var newton = celcius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
