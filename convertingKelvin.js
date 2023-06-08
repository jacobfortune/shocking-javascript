const kelvin = INSERT NUMBER HERE;
// This code assigns the number 293 to the constant variable kelvin. //
const celsius = kelvin - 273;
// This code has converted the celsius to kelvin //
let farenheit = celsius * (9/5) + 32;
// This code converts celsius to farenheit //
farenheit = Math.floor(farenheit);
// This rounds the variable farenheit to the newest integer //
let newton = celsius * (33/100);
// This code converts celsius to newton //
newton = Math.floor(newton);
// This will create a rough estimate to the newest integer of newtons //
console.log(`The temperature is ${newton} degrees Newton`);
console.log(`The temperature is ${farenheit} degrees Fahrenheit`);
console.log(`The temperature is ${celsius} degrees Celsius`);
// These codes log all 3 of the final temperatures from kelvin in celsius, farenheit and newtons's // 
