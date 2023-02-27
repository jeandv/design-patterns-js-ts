// console.log('hola');

function sum(a, b) {
  return a + b;
}

let res = sum(1, 2);
console.log(res);

const fSum = sum;
res = fSum(5, 6);
console.log(res);

// función orden superior
function operation(fn, a, b) {
  console.log('se hace algo');
  console.log(fn(a, b));
}

operation(sum, 10, 20);

// arrow funcion
operation((a, b) => a * b, 5, 5);

operation((a, b) => {

  const c = a + b;

  return c * 2;

}, 1, 2);

// forEach <-- Inmutable
const names = ['Jean', 'Antony', 'Rondón', 'Beroy'];

names.forEach(name => console.log(name));

names.forEach(name => console.log(name.toUpperCase()));
console.log(names); // <-- No cambia, es inmutable!!

names.sort();
console.log(names); // <-- Si cambia, es mutable!!

// map - crea nuevo array independiente.
const namesUpper = names.map(name => name.toUpperCase());
console.log(namesUpper); // <-- nuevo array no afecta al array original name.

// reduce
const numbers = [3, 4, 5, 6, 21, 50];

const total = numbers.reduce((ac, number) => ac + number, 0);
console.log(total);

// PROGRAMACIÓN ORIENTADA A OBJETOS
// clases
class Drink {

  constructor(name) {
    this.name = name;
  }

  info() {
    return 'la bebida es: ' + this.name;
  }

}

//funcional
function Drink2(name) {

  this.name = name;

  this.info = function () {
    return 'la bebida es: ' + this.name;
  }

}

const drink = new Drink('Monster');
console.log(drink.info);

const drink2 = new Drink2('RedBull');
console.log(drink.info);